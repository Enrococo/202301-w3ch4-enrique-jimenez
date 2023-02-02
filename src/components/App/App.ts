import Component from '../Component.js';
import Header1 from '../Heading/Heading.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    this.#children = [new Header1('My Series', this.element, 'main-header')];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
