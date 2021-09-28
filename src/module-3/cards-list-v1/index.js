export default class CardsList {
  element;

  constructor({ data = [], Component = {} }) {
    this.data = data;
    this.Component = Component;

    this.render();
  }

  getTemplate(){
  return `<div class="cards__list">
    ${this.data.map(d => new this.Component(d).element.innerHTML).join('')}
    </div>`
}

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }

  update(arr) {
    this.data = arr;
    this.render();
  }

  remove(id = 0) {
    this.data = this.data.filter(d => d.id !== id);
    this.render();
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}

