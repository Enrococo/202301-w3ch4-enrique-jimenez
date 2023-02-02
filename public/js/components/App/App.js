import Component from '../Component.js';
import Header1 from '../Heading/Heading.js';
export default class App extends Component {
    #children;
    constructor(parentElement) {
        super(parentElement, 'div');
        this.#children = [new Header1('My Series', this.element, 'main-header')];
    }
    render() {
        super.render();
        this.#children.forEach(component => component.render());
    }
}
