import Prism from "../vendor/prism";
import { Dropdown } from "./dropdown";
import {
	languages as allLanguages,
	PrismLanguage,
	Language,
} from "./languages";
import { getDefaultLanguage, getSuggestions } from "./suggestions";

const RCH = {
	class: {
		suggestion: "rch-suggestion",
		suggestionActive: "rch-suggestion--active",
		suggestionList: "rch-suggestion-list",
		toolbar: "rch-toolbar",
		dropdown: "rch-dropdown",
	},
	attr: {
		language: "data-rch-language",
		visited: "data-rch-visited",
	},

	refreshDelay: 2000,
};

function assert<T>(x: T, message: string): asserts x {
	if (!x) {
		throw new Error(message);
	}
}

function sortLanguages(a: Language, b: Language) {
	if (a === allLanguages.none) return -1;
	if (b === allLanguages.none) return 1;
	return a.name.localeCompare(b.name);
}

const sortedLanguages = Object.values(allLanguages).slice().sort(sortLanguages);

function createSuggestionButtons(
	suggestions: Language[],
	activeLang: PrismLanguage,
	onClick: (lang: PrismLanguage) => void,
) {
	const buttons = suggestions.map(x => {
		const button = document.createElement("button");
		button.classList.add(RCH.class.suggestion);
		button.dataset.value = x.lang;
		button.textContent = x.name;

		return button;
	});

	const setActiveButton = (lang: PrismLanguage) => {
		for (const button of buttons) {
			button.classList.toggle(
				RCH.class.suggestionActive,
				button.dataset.value === lang,
			);
		}
	};

	const buttonWrapper = document.createElement("div");
	buttonWrapper.classList.add(RCH.class.suggestionList);
	buttons.forEach(x => buttonWrapper.appendChild(x));

	buttonWrapper.addEventListener("click", e => {
		if (!e.target) {
			return;
		}

		const target = e.target as HTMLElement;
		if (target.matches(`.${RCH.class.suggestion}`)) {
			e.preventDefault();
			const lang = target.dataset.value as PrismLanguage | undefined;
			assert(lang, "Button does not have a language.");

			setActiveButton(lang);
			onClick(lang);
		}
	});

	setActiveButton(activeLang);
	return buttonWrapper;
}

class CodeBlock {
	pre: HTMLElement;
	code: HTMLElement;
	private lang: PrismLanguage;
	private toolbar: HTMLDivElement | null;

	constructor(pre: HTMLElement, code: HTMLElement) {
		this.pre = pre;
		this.code = code;
		this.lang =
			(this.code.getAttribute(RCH.attr.language) as PrismLanguage | null) ??
			"none";
		this.toolbar = null;
	}

	initToolbar(suggestions: Language[], initialLang: PrismLanguage) {
		const dropdown = new Dropdown({
			items: sortedLanguages,
			display: x => x.name,
			onChange: x => this.rehighlight(x.lang),
		});

		dropdown.element.classList.add(RCH.class.dropdown);
		dropdown.select(x => x.lang === initialLang);
		this.lang = initialLang;

		const suggestionButtons = createSuggestionButtons(
			suggestions,
			initialLang,
			lang => {
				this.rehighlight(lang);
				dropdown.select(x => x.lang === lang);
			},
		);

		const toolbar = document.createElement("div");
		toolbar.classList.add(RCH.class.toolbar);
		toolbar.appendChild(dropdown.element);
		toolbar.appendChild(suggestionButtons);
		this.toolbar = toolbar;

		this.pre.insertAdjacentElement("beforebegin", toolbar);
	}

	get visited() {
		return this.code.hasAttribute(RCH.attr.visited);
	}

	set visited(value: boolean) {
		if (value) {
			this.code.setAttribute(RCH.attr.visited, "true");
		} else {
			this.code.removeAttribute(RCH.attr.visited);
		}
	}

	private get language() {
		return this.lang;
	}

	private set language(lang: PrismLanguage) {
		this.code.classList.remove("language-" + this.lang);
		this.pre.classList.remove("language-" + this.lang);
		this.code.classList.add("language-" + lang);
		this.code.setAttribute(RCH.attr.language, lang);
		this.lang = lang;
	}

	highlight(lang: PrismLanguage = this.lang) {
		this.code.classList.add("line-numbers");
		this.language = lang;
		Prism.highlightElement(this.code);

		/*
		 * HACK:
		 * Reddit's CSS sets the parent <pre> element's display to grid.
		 * This interferes with the Line Numbers plugin and makes the numbering
		 * completely invisible. Removing the grid display makes the numbering
		 * appear, but it isn't aligned properly to the lines of code. For some
		 * reason, setting the display to "table" on the <pre> element itself
		 * and making sure that the line-height is set to 1 fixes the invisible line
		 * numbers and aligns them to the code properly.
		 */

		const preParent = this.pre.parentElement;
		const isNewReddit = !!preParent && preParent.classList.contains("md");

		if (!isNewReddit) {
			this.pre.style.display = "table";
			this.pre.style.lineHeight = "1";
			this.pre.style.width = "100%";
			if (this.toolbar) {
				this.toolbar.style.width = `${this.pre.offsetWidth}px`;
			}
		}
	}

	rehighlight(lang: PrismLanguage) {
		if (lang === this.language) {
			return;
		}

		this.language = lang;
		const content = this.code.textContent;
		this.code.innerHTML = "";
		this.code.textContent = content;
		Prism.highlightElement(this.code);
	}
}

const qsa = (selector: string, parent: ParentNode = document) =>
	Array.from(parent.querySelectorAll(selector));

function getCodeBlocks() {
	return qsa("pre code").map(code => {
		const pre = code.parentElement;
		assert(pre, "<code> does not have a parent.");
		return new CodeBlock(pre, code as HTMLElement);
	});
}

function setup() {
	for (const block of getCodeBlocks()) {
		if (!block.visited) {
			block.initToolbar(getSuggestions(), getDefaultLanguage().lang);
			block.highlight();
			block.visited = true;
		}
	}
}

function main() {
	setInterval(setup, RCH.refreshDelay);
}

main();
