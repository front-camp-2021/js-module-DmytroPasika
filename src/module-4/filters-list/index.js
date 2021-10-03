export default class FiltersList {
 element;

  constructor({
    title = '',
    list = []
  } = {}) {
    this.title = title;
    this.list = list;
    this.activeFilters = []
    this.render();
  }

  get template() {
    return `
    <div class="filter-container__title">
    ${this.title}
  </div>
  <ul class="filter-container__list">
  ${this.list.map(item => 
    `<li>
    <div class="filter-container__container-checkbox">
      <label class="filter-container__label">
        <input name="category" type="checkbox" value="${item.value}" class="filter-container__checkbox" ${item.checked === true ? "checked" : ``}>
        <div class="filter-container__checkbox-custom"></div>
        <span class="filter-container__value">${item.title}</span>
      </label>
      <div class="filter-container__item-counter">1920</div>
    </div>
  </li>`
    ).join('')}`
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element = wrapper;
  }


  reset () {
    document.querySelectorAll('input.filter-container__checkbox').forEach(item => item.checked = false)
  }

  // filter(checked = 'false', value = '') {
  //   const [type, filterName] = value.split('=');
  //   if (!checked) {
  //     this.activeFilters = this.activeFilters.filter(v => v.filterName !== filterName)
  //   } else {
  //     this.activeFilters.push({ type, filterName })
  //   }
  // }

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
