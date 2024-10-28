import View from "./View";
import icons from "url:../../img/icons.svg";

class paginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.resault.length / this._data.resaultPerPage
    );
    console.log(numPages);

    if (this._data.page === 1 && numPages > 1) {
      return "page 1 , ohter";
    }

    if (this._data.page === numPages && numPages > 1) {
      return "last page";
    }

    if (this._data.page < numPages) {
      return "other page";
    }

    return "only 1 page";
  }
}

export default new paginationView();
