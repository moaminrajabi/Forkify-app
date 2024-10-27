import * as model from "./model";
import "core-js/stable";
import "regenerator-runtime/runtime";
import recipeView from "./views/recipeView";
import recipeView from "./views/recipeView";

const recipeContainer = document.querySelector(".recipe");



// https://forkify-api.herokuapp.com/v2

const controllRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpiner(recipeContainer);

    //loading:
    await model.loadRecipe(id);

    // Rendering:
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controllRecipe)
);
