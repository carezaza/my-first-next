import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members/slice";

const store = configureStore({
  reducer: { membersReducer },
});

export default store;
