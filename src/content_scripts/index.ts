import Prism from "../vendor/prism";
import { Dropdown } from "./dropdown";
import {
	languages as allLanguages,
	PrismLanguage,
	Language,
} from "./languages";

function assert<T>(x: T): asserts x {
	if (!x) {
		throw new Error(`Assertion "${x}" failed.`);
	}
}

class CodeBlock {
	pre: HTMLElement;
	code: HTMLElement;
	private lang: PrismLanguage;

	constructor(pre: HTMLElement, code: HTMLElement) {
		this.pre = pre;
		this.code = code;
		this.lang = this.code.getAttribute("data-rch-language") ?? "none";
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
		this.pre.style.display = "table";
		this.pre.style.lineHeight = "1";
		this.pre.style.width = "100%";
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
		assert(pre);
		return new CodeBlock(pre, code as HTMLElement);
	});
}

function sortLanguages(a: Language, b: Language) {
	if (a.lang === "none") return -1;
	if (b.lang === "none") return 1;
	return a.name.localeCompare(b.name);
}

function insertPicker(codeBlock: CodeBlock) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("rch-picker");

	const items = allLanguages.slice().sort(sortLanguages);

	const drp = new Dropdown({
		items,
		display: x => x.name,
		onChange: x => codeBlock.rehighlight(x.lang),
	});

	codeBlock.pre.insertAdjacentElement("beforebegin", drp.element);
}

function setup() {
	for (const block of getCodeBlocks()) {
		if (!block.visited) {
			insertPicker(block);
			block.highlight();
			block.visited = true;
		}
	}
}

setInterval(setup, 2000);
