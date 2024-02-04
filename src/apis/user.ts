import { fetcher } from ".";
import { ILoginRequest, ILoginResponse } from "../types/api/user";

export const LOGIN = (data: ILoginRequest) => {
	return fetcher<ILoginResponse>("POST", "/user/login", data);
};

export const REGISTER = (data: ILoginRequest) => {
	return fetcher<ILoginResponse>("POST", "/user/signup", data);
};
