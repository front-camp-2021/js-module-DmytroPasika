import { debounce } from './debounce.js'

export default class Search {
  element = null;

  constructor() {
    this.s = debounce(this.onChange, 500);
    this.url = 'http://localhost:3000/products';
    const subElement = null;
    this.render();
    this.addEventListner();
  }


  get template() {
    return `<div class="search-bar">
          <div class="search-bar__result">
            <span class="search-bar__text">
              7,618 results found
            </span>
            <a href="./favorite.html" class="reference">
              <button class="search-bar__btn-favorite button">
                <img src="../img/heartWhite.svg" alt="" class="search-bar__favorite-image">
              </button>
            </a>
          </div>
          <form class="search-bar__form">
            <div class="search-bar__container">
              <input class="search-bar__input" type="text" data-element="input" placeholder="Search">
            </div>

          </form>
        </div>`
  }

  async getList() {
    const response = await fetch(this.url);
    this.list = await response.json();
    return this.list;
  }

  onChange(e) {
    console.log(e.target.value);
  }

  getSubElement() {
    this.subElement = this.element.querySelector('[data-element]');
  }

  addEventListner() {
    this.getSubElement();
    this.subElement.addEventListener('input', this.s)
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }

}
