import { API_URL } from "./config";
import { getJson } from "./helper";
import { RES_PER_PAGE } from "./config";

export const state = {
  recipe: {},
  search: {
    query: "",
    resault: [],
    page: 1,
    resaultPerPage: RES_PER_PAGE,
  },
};
export const loadRecpie = async function (id) {
  try {
    const data = await getJson(`${API_URL}/${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.image_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};

export const loadSearchResault = async function (query) {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}?search=${query}`);
    state.search.resault = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    // console.log(state.search.resault);
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resaultPerPage; // 0;
  const end = page * state.search.resaultPerPage; // 9;
  return state.search.resault.slice(start, end);
};
