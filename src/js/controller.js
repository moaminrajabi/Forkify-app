import * as model from "./model";

import "core-js/stable";
import "regenerator-runtime/runtime";
import recpieView from "./views/recipeView.js";
import recipeView from "./views/recipeView.js";
import SearchView from "./views/searchView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import paginationView from "./views/paginationView.js";

// const recipeContainer = document.querySelector(".recipe");

// if (model.hot) {
//   model.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpiner();

    await model.loadRecpie(id);

    // controlServings();

    recpieView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderMessage();
  }
};
const contorolSearchResault = async function () {
  try {
    resultView.renderSpiner();

    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResault(query);

    console.log(model.state.search.resault);
    // resultView.render(model.state.search.resault);
    resultView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlServings = function (newServings) {
  // update recipe
  model.updateServings(newServings);
  // update recipe view
  recpieView.render(model.state.recipe);
};

const controlPagination = function (goToPage) {
  model.state.search.page = goToPage;
  resultView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addhandelRender(controlRecipes);
  recipeView.addhandelUpdateServing(controlServings);
  searchView.addHandlerSearch(contorolSearchResault);
  paginationView.addHandlerClick(controlPagination);
};
init();
