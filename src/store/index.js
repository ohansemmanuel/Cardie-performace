import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost"
};

const store = createStore(reducer, initialState);

export default store;
