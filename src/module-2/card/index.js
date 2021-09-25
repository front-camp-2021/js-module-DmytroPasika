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

  render() {

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.id = this.id;


    const cardContent = document.createElement('div');
    cardContent.className = 'card__content';

    const cardAction = document.createElement('div');
    cardAction.className = 'card__actions';

    const cardImmageContainer = document.createElement('div');
    cardImmageContainer.className = 'card__image-container'

    const cardImmage = document.createElement('img');
    cardImmage.className = 'card__image';
    cardImmage.src = this.images[0];
    cardImmage.alt = 'Product imagge';

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card__description';

    const cardPriceAndScore = document.createElement('div');
    cardPriceAndScore.className = 'card__price-and-score';

    const cardScore = document.createElement('div');
    cardScore.className = 'card__score';

    const cardScoreButton = document.createElement('button');
    cardScoreButton.className = 'card__score-button button';

    const cardContainerScoreBtn = document.createElement('div');
    cardContainerScoreBtn.className = 'card__container-btn';

    const cardScoreText = document.createElement('span');
    cardScoreText.className = 'card__score-text';
    cardScoreText.textContent = `${this.rating}`;

    const cardScoreImaggeBtn = document.createElement('img');
    cardScoreImaggeBtn.className = 'card__score-image-btn';
    cardScoreImaggeBtn.src = '../img/star.svg';
    cardScoreImaggeBtn.alt = 'Score image';

    const cardPrice = document.createElement('div');
    cardPrice.className = 'card__price';
    cardPrice.textContent = `₴${this.price}`;


    const cardDescriptionText = document.createElement('div');
    cardDescriptionText.className = 'card__description-text';

    const cardHeader = document.createElement('span');
    cardHeader.className = 'card__header';
    cardHeader.textContent = `${this.title}`;

    const cardText = document.createElement('span');
    cardText.className = 'card__text';
    cardText.textContent = 'Redesigned from scratch and completely revised.';


    const cardWishlistBtn = document.createElement('button');
    cardWishlistBtn.className = 'card__wishlist-btn button';

    const cardAddBtn = document.createElement('button');
    cardAddBtn.className = 'card__add-btn button';

    const cardContainerWishlistBtn = document.createElement('div');
    cardContainerWishlistBtn.className = 'card__container-btn';

    const cardContainerAddBtn = document.createElement('div');
    cardContainerAddBtn.className = 'card__container-btn';

    const cardHeartImage = document.createElement('img');
    cardHeartImage.className = 'card__heart';
    cardHeartImage.src = '../img/Path.svg';
    cardHeartImage.alt = 'Like image';

    const cardTextWishBtn = document.createElement('div');
    cardTextWishBtn.className = 'card__text-btn';
    cardTextWishBtn.textContent = 'WISHLIST';

    const cardAddToCartImage = document.createElement('img');
    cardAddToCartImage.className = 'card__add-to-cart';
    cardAddToCartImage.src = '../img/shopping-bag.svg';
    cardAddToCartImage.alt = 'Shop image';

    const cardTextAddBtn = document.createElement('div');
    cardTextAddBtn.className = 'card__text-btn';
    cardTextAddBtn.textContent = 'ADD TO CART';


    cardContainer.append(cardContent);
    cardContainer.append(cardAction);

    cardContent.append(cardImmageContainer);
    cardImmageContainer.append(cardImmage);

    cardContent.append(cardDescription);



    cardDescription.append(cardPriceAndScore);
    cardPriceAndScore.append(cardScore);
    cardScore.append(cardScoreButton);
    cardScoreButton.append(cardContainerScoreBtn);
    cardContainerScoreBtn.append(cardScoreText);
    cardContainerScoreBtn.append(cardScoreImaggeBtn);
    cardPriceAndScore.append(cardPrice);

    cardDescription.append(cardDescriptionText);
    cardDescriptionText.append(cardHeader);
    cardDescriptionText.append(cardText);

    cardAction.append(cardWishlistBtn);
    cardAction.append(cardAddBtn);

    cardWishlistBtn.append(cardContainerWishlistBtn);
    cardAddBtn.append(cardContainerAddBtn);

    cardContainerWishlistBtn.append(cardHeartImage);
    cardContainerWishlistBtn.append(cardTextWishBtn);

    cardContainerAddBtn.append(cardAddToCartImage);
    cardContainerAddBtn.append(cardTextAddBtn);




    this.element = cardContainer;
    // ... your logic
  }
}




