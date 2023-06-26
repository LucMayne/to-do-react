import { createSlice } from "@reduxjs/toolkit";

export const toDoList = createSlice({
    name: "toDoList",

    initialState: {
        nextId: 2,
        data: {
            1: {
                content: 'Content 1',
                completed: false
            }
        }
    },
    
    reducers: {
        addToDo: (state, action) => {
            // get the id for the new to-do content
            const newToDoId = state.nextId;
            // update the id for the next to-do content
            state.nextId++;

            // action.payload is the userInput passed in
            state.data[newToDoId] = {
                content: action.payload,
                completed: false
            };
        },

        deleteToDo: (state, action) => {
            // get the id which is passed in as a key from App.js
            const { id } = action.payload;
            // delete the data at the id
            delete state.data[id];
        },

        editToDo: (state, action) => {
            // get the id and userInput passed in 
            const { id, userInput } = action.payload;
            // update the content
            state.data[id].content = userInput;
        },

        markComplete: (state, action) => {
            // get the id
            const { id } = action.payload;
            // mark the data at the id completed
            state.data[id].completed = true;
        }
    }
});

export const { addToDo, deleteToDo, editToDo, markComplete } = toDoList.actions;

export default toDoList.reducer;
