import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserInitialState {
	isLogin: boolean;
	token: string;
	email: string;
	name: string;
}

const initialState: IUserInitialState = {
	isLogin: false,
	token: "",
	email: "",
	name: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLogout: (state) => {
			state.isLogin = false;
			state.token = "";
			state.email = "";
			state.name = "";
		},
		setIsLogin: (state, action: PayloadAction<boolean>) => {
			state.isLogin = action.payload;
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
	},
});

export const { setIsLogin, setToken, setEmail, setName, setLogout } = userSlice.actions; //給React組件個別使用
export default userSlice.reducer;
