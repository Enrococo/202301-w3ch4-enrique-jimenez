export default class Component {
  #parentElement: HTMLElement | null;
  protected element: HTMLElement;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    cssClasses: string = '',
  ) {
    this.element = document.createElement(tag);
    this.element.className = cssClasses;
    this.#parentElement = parentElement;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }
}
