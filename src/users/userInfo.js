import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: "",
}

// getting the user details data
const userInfo = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserLoginDetails:(state, action) => {
               state.name = action.payload.name;
               state.email = action.payload.email;
               state.photo = action.payload.photo;
        },
        setUserSignOut: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
});

export const {setUserLoginDetails, setUserSignOut} = userInfo.actions;

export const SelectUserName = (state) => state.user.name;
export const SelectUserEmail = (state) => state.user.email;
export const SelectUserPhoto = (state) => state.user.photo;

export default userInfo.reducer;