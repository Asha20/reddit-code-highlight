import Prism from "../vendor/prism";
import { Dropdown } from "./dropdown";
import {
	languages as allLanguages,
	PrismLanguage,
	Language,
} from "./languages";

function assert<T>(x: T, message: string): asserts x {
	if (!x) {
		throw new Error(message);
	}
}

function sortLanguages(a: Language, b: Language) {
	if (a.lang === "none") return -1;
	if (b.lang === "none") return 1;
	return a.name.localeCompare(b.name);
}

const sortedLanguages = allLanguages.slice().sort(sortLanguages);

function getSubreddit() {
	const match = location.pathname.match(/^\/r\/(\w+)/);
	return match ? match[1] : null;
}

function getSuggestions(subreddit: string | null): Language[] {
	if (!subreddit) {
		return [];
	}

	const languageNone = allLanguages.find(x => x.lang === "none");
	const languageJS = allLanguages.find(x => x.lang === "javascript");
	assert(languageNone, "none language does not exist.");
	assert(languageJS, "javascript language does not exist.");
	return [languageNone, languageJS];
}

function createSuggestionButtons(
	suggestions: Language[],
	onClick: (lang: PrismLanguage) => void,
) {
	const buttons = suggestions.map(x => {
		const button = document.createElement("button");
		button.classList.add("rch-suggestion");
		button.dataset.value = x.lang;
		button.textContent = x.name;

		return button;
	});

	const buttonWrapper = document.createElement("div");
	buttons.forEach(x => buttonWrapper.appendChild(x));

	buttonWrapper.addEventListener("click", e => {
		if (!e.target) {
			return;
		}

		const target = e.target as HTMLElement;
		if (target.matches("button.rch-suggestion")) {
			e.preventDefault();
			const lang = target.dataset.value as PrismLanguage | undefined;
			assert(lang, "Button does not have a language.");
			onClick(lang);
		}
	});

	return buttonWrapper;
}

class CodeBlock {
	pre: HTMLElement;
	code: HTMLElement;
	private lang: PrismLanguage;

	constructor(pre: HTMLElement, code: HTMLElement) {
		this.pre = pre;
		this.code = code;
		this.lang =
			(this.code.getAttribute("data-rch-language") as PrismLanguage) ?? "none";
	}

	initToolbar(suggestions: Language[]) {
		const dropdown = new Dropdown({
			items: sortedLanguages,
			display: x => x.name,
			onChange: x => this.rehighlight(x.lang),
		});

		const suggestionButtons = createSuggestionButtons(suggestions, lang => {
			this.rehighlight(lang);
			dropdown.select(x => x.lang === lang);
		});

		const toolbar = document.createElement("div");
		toolbar.appendChild(dropdown.element);
		toolbar.appendChild(suggestionButtons);

		this.pre.insertAdjacentElement("beforebegin", toolbar);
	}

	get visited() {
		return this.code.hasAttribute("data-rch-visited");
	}

	set visited(value: boolean) {
		if (value) {
			this.code.setAttribute("data-rch-visited", "true");
		} else {
			this.code.removeAttribute("data-rch-visited");
		}
	}

	private get language() {
		return this.lang;
	}

	private set language(lang: PrismLanguage) {
		this.code.classList.remove("language-" + this.lang);
		this.pre.classList.remove("language-" + this.lang);
		this.code.classList.add("language-" + lang);
		this.code.setAttribute("data-rch-language", lang);
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
			const subreddit = getSubreddit();
			const suggestions = getSuggestions(subreddit);
			block.initToolbar(suggestions);
			block.highlight();
			block.visited = true;
		}
	}
}

setInterval(setup, 2000);
