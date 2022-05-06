export interface PlacesState {
  isLoading: boolean;
  userLoacation?: [number, number]; // lng, lat
}

function state(): PlacesState {
  return {
    isLoading: true,
  };
}

export default state;
