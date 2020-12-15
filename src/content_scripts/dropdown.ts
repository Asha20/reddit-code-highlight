interface DropdownSettings<T> {
	items: readonly T[];
	display(item: T): string;
	onChange(value: T): void;
}

export class Dropdown<T> {
	element: HTMLSelectElement;
	private items: DropdownSettings<T>["items"];

	constructor({ items, display, onChange }: DropdownSettings<T>) {
		this.items = items;
		this.element = document.createElement("select");

		this.items
			.map((x, i) => {
				const option = document.createElement("option");
				option.value = String(i);
				option.textContent = display(x);
				return option;
			})
			.forEach(option => this.element.appendChild(option));

		this.element.addEventListener("change", () => {
			onChange(this.selected());
		});
	}

	selected(): T {
		const selectedOption = this.element.options[this.element.selectedIndex];
		const selectedIndex = Number(selectedOption.value);
		return this.items[selectedIndex];
	}

	select(predicate: (x: T) => boolean): void {
		if (predicate(this.selected())) {
			return;
		}

		const index = this.items.findIndex(predicate);
		if (index > -1) {
			this.element.selectedIndex = index;
		}
	}
}
