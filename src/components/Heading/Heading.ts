import Component from '../Component.js';

export default class Header1 extends Component {
  #h1: string;

  constructor(
    h1: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'h1', cssClasses);
    this.#h1 = h1;
  }

  render(): void {
    super.render();
    const h1 = this.element as HTMLHeadingElement;
    h1.textContent = this.#h1;
  }
}
