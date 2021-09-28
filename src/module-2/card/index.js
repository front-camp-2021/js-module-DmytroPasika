export default class Card {
  element;

  constructor({
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = ''
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  getTemplate() {
    return `<div class="card" id='${this.id}'>
    <div class="card__content">
      <div class="card__image-container">
        <img class='card__image' src="${this.images[0]}" alt="Product image">
      </div>
      <div class="card__description">
        <div class='card__price-and-score'>
          <div class='card__score'>
            <button name='scoreButton' class="card__score-button button">
              <div class="card__container-btn">
                <span class="card__score-text">
                  ${this.rating}
                </span>
                <img src="../img/star.svg" alt="score image" class='card__score-image-btn'>
              </div>
            </button>
          </div>
          <div class="card__price">
          ₴${this.price}
          </div>
        </div>
        <div class='card__description-text'>
          <span class="card__header">${this.title}</span>
          <span class='card__text'>Redesigned from scratch and completely revised.</span>
        </div>
      </div>
    </div>

    <div class="card__actions">
      <button class='card__wishlist-btn button' name="wishlist">
        <div class="card__container-btn">
          <img class="card__heart" src="../img/Path.svg" alt='Like image'>
          <div class="card__text-btn">WISHLIST</div>
        </div>
      </button>
      <button class='card__add-btn button' name="addToCart">
        <div class="card__container-btn">
          <img class='card__add-to-cart' src="../img/shopping-bag.svg" alt="Shop">
          <div class="card__text-btn">ADD TO CART</div>
        </div>
      </button>
    </div>
  </div>`
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

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




