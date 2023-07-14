import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
    successMessage: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // _______________________Actions To GET ALL USERS ______________________________________
        getUsers: (state) => {
            state.loading = true;
        },
        getUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        getUsersFailure: (state) => {
            state.loading = false;
            state.error = "Failed to get all users";
        },

        // _______________________Actions To ADD USER ______________________________________
        addUser: (state, action) => {
            state.loading = true;
            state.successMessage = null;
        },
        addUserSuccess: (state, action) => {
            state.loading = false;
            state.successMessage = "User added successfully";
            state.users.push(action.payload);
        },
        addUserFailure: (state, action) => {
            state.loading = false;
            state.error = "Failed to add user";
        },

        // _______________________Actions To EDIT USER ______________________________________
        editUser: (state, action) => {
            state.loading = true;
            state.successMessage = null;
        },
        editUserSuccess: (state, action) => {
            state.loading = false;
            state.successMessage = "User edited successfully";
            const { username, role, email, id } = action.payload;
            const user = state.users.find((user) => user.id === id);
            if (user) {
                user.username = username;
                user.email = email;
                user.role = role;
            }
        },
        editUserFailure: (state, action) => {
            state.loading = false;
            state.error = "Failed to edit user";
        },

        // _______________________Actions To DELETE USER ______________________________________
        deleteUser: (state, action) => {
            state.loading = true;
            state.successMessage = null;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.successMessage = "User deleted successfully";
            const userId = action.payload;
            state.users = state.users.filter((user) => user.id !== userId);
        },
        deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = "Failed to delete user";
        },

        clearStatus: (state) => {
            state.loading = false;
            state.error = null;
            state.successMessage = null;
        },
    },
});

export const {
    getUsers,
    getUsersSuccess,
    getUsersFailure,
    addUser,
    editUser,
    deleteUser,
    addUserSuccess,
    addUserFailure,
    editUserSuccess,
    editUserFailure,
    deleteUserSuccess,
    deleteUserFailure,
    clearStatus,
} = userSlice.actions;

export default userSlice.reducer;
