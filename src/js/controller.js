import * as model from "./model";

import "core-js/stable";
import "regenerator-runtime/runtime";
import recpieView from "./views/recipeView.js";
import recipeView from "./views/recipeView.js";
import SearchView from "./views/searchView.js";
import searchView from "./views/searchView.js";

// const recipeContainer = document.querySelector(".recipe");

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpiner();

    await model.loadRecpie(id);

    recpieView.render(model.state.recipe);
    // const recpieView = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderMessage();
  }
};
const contorolSearchResault = async function () {
  try {
  
    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResault(query);

    
    console.log(model.state.search.resault);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addhandelRender(controlRecipes);
  searchView.addHandlerSearch(contorolSearchResault);
};
init();

