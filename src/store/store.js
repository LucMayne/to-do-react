import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDo";

export default configureStore({
    reducer: {
        toDoList: toDoReducer,
    },
});
