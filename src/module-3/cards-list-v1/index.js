export default class CardsList {
  element;

  constructor({ data = [], Component = {} }) {
    this.data = data;
    this.Component = Component;

    this.render();
  }

  get template(){
  return `<div class="cards__list">
    ${this.data.map(d => new this.Component(d).element.innerHTML).join('')}
    </div>`
}

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.template;
    this.element = wrapper;
  }

  update(arr) {
    this.data = arr;
    this.render();
  }

  remove() {
    if(this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}

