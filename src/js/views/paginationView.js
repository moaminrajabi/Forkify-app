import View from "./View";
import icons from "url:../../img/icons.svg";

class paginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      console.log(btn);
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const cuurPage = this._data.page;
    const numPages = Math.ceil(
      this._data.resault.length / this._data.resaultPerPage
    );
    console.log(numPages);

    if (cuurPage === 1 && numPages > 1) {
      return `
         <button data-goto="${
           cuurPage + 1
         }"class="btn--inline pagination__btn--next">
            <span>Page ${cuurPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    if (cuurPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        cuurPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${cuurPage - 1}</span>
          </button>
          `;
    }

    if (cuurPage < numPages) {
      return `
       <button data-goto="${
         cuurPage - 1
       }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${cuurPage - 1}</span>
          </button>
            <button data-goto="${
              cuurPage + 1
            }" class="btn--inline pagination__btn--next">
            <span>Page ${cuurPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    return "";
  }
}

export default new paginationView();
