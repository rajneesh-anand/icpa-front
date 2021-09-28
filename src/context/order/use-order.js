import React, { useReducer, useContext, createContext } from "react";
import { reducer } from "./order-reducer";

export const orderContext = createContext();

const initialState = {
  orderDetails: {
    name: "",
    email: "",
    type: "",
    course_id: "",
  },
};

const useOrderActions = (orders) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const result = await res.json();
    if (result.msg === "success") {
      dispatch({ type: "FETCH_CATEGORY", payload: result.data });
    }
  };

  return {
    state,
    fetchCategories,
  };
};

export const CategoryProvider = ({ children }) => {
  const { state, fetchCategories } = useCategoryActions();
  return (
    <categoryContext.Provider
      value={{
        state,
        categories: state.categories,
        totalNumberOfrecords: state.categories.length,
        fetchCategories: fetchCategories,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export const useCategory = () => useContext(categoryContext);
