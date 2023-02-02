import Component from '../Component.js';
export default class Link extends Component {
    #href;
    constructor(href, parentElement, cssClasses = '') {
        super(parentElement, 'link', cssClasses);
        this.#href = href;
    }
    render() {
        super.render();
        const link = this.element;
        link.href = this.#href;
    }
}
