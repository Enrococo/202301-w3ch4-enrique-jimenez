import Component from '../Component.js';
export default class Header1 extends Component {
    #h1;
    constructor(h1, parentElement, cssClasses = '') {
        super(parentElement, 'h1', cssClasses);
        this.#h1 = h1;
    }
    render() {
        super.render();
        const h1 = this.element;
        h1.textContent = this.#h1;
    }
}
