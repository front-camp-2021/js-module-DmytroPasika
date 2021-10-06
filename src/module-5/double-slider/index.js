export default class DoubleSlider {
  element;
  constructor({
    min = 100,
    max = 200,
    formatValue = value => value,
    selected = {
      from: min,
      to: max
    },
    precision = 0,
    filterName = ''
  } = {}) {
    
    this.max = max;
    this.min = min;
    this.selectedMin = selected['from'];
    this.selectedMax = selected['to'];
    this.step = precision;
    this.percent1 = 0;
    this.percent2 = 100;
    this.formatValue1 = function (price) { return formatValue(price)}
    this.formatValue2 = function (price) { return formatValue(price)}
    this.title = filterName;
    this.render();
  }

  get template() {
    console.log(this.formatValue1)
    console.log(this.formatValue2)
    console.log('percent 1 ====', this.percent1)
    console.log('percent 2 ====', this.percent2)
    return `<div class="filter-container__slider-container">
        <div class="filter-container__title">
          ${this.title}
        </div>
    <div id="range1" class='filter-container__range'>
        ${this.formatValue1(this.selectedMin)}
    </div>
    <div class="filter-container__slider" style="background:">
        <div class="filter-container__slider-track" style="background:linear-gradient(to right, rgb(218, 218, 229) ${this.percent1}% , rgb(111, 100, 248) ${this.percent1}% , rgb(111, 100, 248) ${this.percent2}%, rgb(218, 218, 229) ${this.percent2}%)"></div>
        <input type="range" min="${this.min}" max="${this.max}" value="${this.selectedMin}" step="${this.step}" id="slider-1" class='filter-container__range-input-1'>
        <input type="range" min="${this.min}" max="${this.max}" value="${this.selectedMax}" step="${this.step}" id="slider-2" class='filter-container__range-input-2'>
    </div>
    <div id="range2" class='filter-container__range'>
    ${this.formatValue2(this.selectedMax)}
    </div>
    </div>`
  }

  

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild;
  }

  slideOne(min = this.selectedMin){
    this.selectedMin = parseInt(min);
    this.fillColor();
}

  slideTwo(max = this.selectedMax){
    this.selectedMax = parseInt(max);
    this.fillColor();
  }

  fillColor(){
    this.percent1 = ((this.selectedMin - this.min)  / (this.max - this.min)) * 100;
    this.percent2 = ((this.selectedMax - this.min) / (this.max - this.min)) * 100;
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
