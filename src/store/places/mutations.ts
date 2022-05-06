import { MutationTree } from "vuex";
import { PlacesState } from "./state";

const mutation: MutationTree<PlacesState> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },

  setLngLat(state: PlacesState, {lng, lat}: {lng: number, lat: number}){
    state.isLoading = false;
    state.userLoacation = [lng, lat];
  }
};

export default mutation;
