import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts-slice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        filter: filterReducer,
    },
});

