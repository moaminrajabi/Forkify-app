import * as model from "./model";

import "core-js/stable";
import "regenerator-runtime/runtime";
import recpieView from "./views/recipeView.js";
import recipeView from "./views/recipeView.js";

// const recipeContainer = document.querySelector(".recipe");

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpiner();

    await model.loadRecpie(id);
 
    recpieView.render(model.state.recipe);
    // const recpieView = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderMessage()
  }
};
const init = function () {
  recipeView.addhandelRender(controlRecipes);
};
init()
// window.addEventListener("hashchange", showRecipes);
// window.addEventListener("load", showRecipes);