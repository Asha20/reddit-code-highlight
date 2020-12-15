import Prism from "../vendor/prism";

function assert<T>(x: T): asserts x {
	if (!x) {
		throw new Error(`Assertion "${x}" failed.`);
	}
}

const qsa = (selector: string, parent: ParentNode = document) =>
	Array.from(parent.querySelectorAll(selector));

function isVisited(el: HTMLElement) {
	return el.hasAttribute("data-rch-visited");
}

function visit(el: HTMLElement) {
	el.setAttribute("data-rch-visited", "true");
}

function getCodeBlocks() {
	return qsa("pre code").map(code => {
		const pre = code.parentElement;
		assert(pre);
		return { pre, code: code as HTMLElement };
	});
}

setInterval(() => {
	getCodeBlocks().forEach(({ pre, code }) => {
		if (!isVisited(code) || code.firstChild?.nodeType === Node.TEXT_NODE) {
			code.classList.add("line-numbers", "language-javascript");
			Prism.highlightElement(code);

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
			pre.style.display = "table";
			pre.style.lineHeight = "1";

			visit(code);
		}
	});
}, 1000);
