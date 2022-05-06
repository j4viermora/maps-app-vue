import { GetterTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<PlacesState, StateInterface> = {

  isUserLocationReady(state){
    return Boolean(state.userLoacation)
  }
};

export default getters;
