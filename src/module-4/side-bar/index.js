import FiltersList from '../filters-list/index.js';

export default class SideBar {
  element;

  constructor (categoriesFilter = [], brandFilter = []) {
    this.categoriesFilter = categoriesFilter;
    this.brandFilter = brandFilter;
    this.activeFilters = [];
    this.render();
 
    // ... your logic
  }
  get template() {
    return `<div class="filter-container">

    <div class="filter-container__header">
      <span class="filter-container__text">
        Filters
      </span>
      <button class="filter-container__btn button">
        <img src="../img/pathReverse.svg" alt="image in button" class="filter-container__image-btn">
        <img src="../img/pathReverse.svg" alt="image in button" class="filter-container__image-btn">
      </button>
    </div>

    <div class="filter-container__form-container">
      <form class="filter-container__form">
        <div class="filter-container__title">
          Slider
        </div>

        <hr class="filter-container__horizontal-line">

        ${new FiltersList({
          title: 'Category',
          list: this.categoriesFilter
        }).element.innerHTML}

        <hr class="filter-container__horizontal-line">

        ${new FiltersList({
          title: 'Brand',
          list: this.brandFilter
        }).element.innerHTML}

      </form>
    </div>


    <button id="resetBtn" class="filter-container__btn-reset button">
      <div class="filter-container__btn-label">CLEAR ALL FILTERS</div>
    </button>

  </div>`
  }

  render() {
    const wrapper = document.createElement('div');
    
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstChild;
  }

  reset() {
    document.querySelectorAll('input.filter-container__checkbox').forEach(item => item.checked = false)
  }

  filter(checked = 'false', value = '') {
    const [type, filterName] = value.split('=');

    if (!checked) {
      this.activeFilters = this.activeFilters.filter(v => v.filterName !== filterName)
    } else {
      this.activeFilters.push({ type, filterName })
    }
  }

  filterLogic() {
    let list = []
    this.activeFilters.forEach(f => {
      list = list.filter(el => el[f.type] === f.filterName)
    })
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
