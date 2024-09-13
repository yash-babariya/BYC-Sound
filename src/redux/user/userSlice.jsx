import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialUsers = JSON.parse(localStorage.getItem("users")) || [];

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: initialUsers,
    },

    reducers: {
        addUsers: (state, action) => {
            const newUser = action.payload;
            const updatedUsers = [...state.users, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            toast.success("Signed up successfully");
            localStorage.setItem("IsSignUp", true);
            state.users = updatedUsers;
        },
        clearUsers: (state) => {
            localStorage.removeItem("IsLogin");
        },
    },
});

export const { addUsers, clearUsers } = userSlice.actions;

export default userSlice.reducer;