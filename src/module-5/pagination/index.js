export default class Pagination {
  element;
  start = 0;
  currentPage = 0;

  constructor({
    totalPages = 10,
    currentPage = 1,
  } = {}) {
    this.totalPages = totalPages;
    this.pageIndex = currentPage;
    
    this.render();
    // ... your logic
  }

  get template(){
    
    return `
    <div class="pagination">
      <div>
        <a href="#" id='prevPage' class="pagination__reference-direction reference">
          <img src="../img/PathNav2.svg" id="prevPageImg" alt="navigation path image">
        </a>
      </div>
      <div class="pagination__pages reference">
        ${this.pages().slice(this.start, this.start + 10).join('')}
      </div>
      <a href="#" id='nextPage' class="pagination__reference-direction reference">
        <img src="../img/PathNav1.svg" id="nextPageImg" alt="navigation path image">
      </a>
    </div>
    `;
  }

  pages() {
    const pagesArr = [];
    for (let index = 0; index < this.totalPages; index++) {
      pagesArr.push(`
      <div class="pagination__container ${this.pageIndex == index + 1? 'pagination__active' : '1'}">
      <a href="#${index + 1}" id="pagination__id-${index + 1}" class="pagination__reference reference ${this.pageIndex == index + 1? 'pagination__active' : ''}">${index + 1}</a>
      </div>
      `)
    }
    return pagesArr;
  }

  render() {
    const wrapper = document.createElement('div');
    console.log('page->', this.pageIndex)
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild;
  }

  takeCurPage(ref = []){
    this.pageIndex = +ref[1];
    this.render();
  }

  goToPrevPage () {
    if (this.pageIndex !== 0 && this.start > 0) {
      this.start -= 1;
    } 
    if (this.pageIndex > 1) {
      this.pageIndex = this.pageIndex - 1; 
      this.render();
    }
  }

  goToNextPage () {
    if (this.currentPage !== this.totalPages) {
      
      if (this.start < 10) {
        this.start += 1;
      } 
    }
    if (this.pageIndex < this.totalPages) {
      this.pageIndex = this.pageIndex + 1;
      this.render();
    }
  
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
