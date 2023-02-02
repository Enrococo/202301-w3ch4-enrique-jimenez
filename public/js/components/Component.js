export default class Component {
    #parentElement;
    element;
    constructor(parentElement, tag, cssClasses = '') {
        this.element = document.createElement(tag);
        this.element.className = cssClasses;
        this.#parentElement = parentElement;
    }
    render() {
        this.#parentElement?.appendChild(this.element);
    }
}
