import Card from '../Card/Card.js';
import Component from '../Component.js';
import Header1 from '../Heading/Heading.js';
import { series } from '../Card/Card.js';
export default class App extends Component {
    #children;
    constructor(parentElement, cssClasses = '') {
        super(parentElement, 'div', cssClasses);
        this.#children = [new Header1('My Series', this.element, 'main-header')];
        for (let i = 0; i < series.length; i++) {
            this.#children.push(new Card(this.element, i, 'series-list'));
        }
    }
    render() {
        super.render();
        this.#children.forEach(component => component.render());
    }
}
