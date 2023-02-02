import Component from '../Component.js';

export default class Link extends Component {
  #href: string;

  constructor(
    href: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'link', cssClasses);
    this.#href = href;
  }

  render(): void {
    super.render();
    const link = this.element as HTMLLinkElement;
    link.href = this.#href;
  }
}
