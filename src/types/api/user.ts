import { IDefaultResponse } from "./index";

export interface ILoginRequest {
	email: string;
	password: string;
}

export interface ILoginResponse extends IDefaultResponse {
	token: string;
	result: {
		address: {
			zipcode: number;
			detail: string;
			city: string;
			county: string;
		};
		_id: string;
		name: string;
		email: string;
		phone: string;
		birthday: string;
		createdAt: string;
		updatedAt: string;
		id: string;
	};
}

export interface IRegisterRequest {
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: string;
	address: {
		zipcode: number;
		detail: string;
	};
}

export interface IRegisterResponse extends IDefaultResponse {
	token: string;
	result: {
		address: {
			zipcode: number;
			detail: string;
			city: string;
			county: string;
		};
		_id: string;
		name: string;
		email: string;
		phone: string;
		birthday: string;
		createdAt: string;
		updatedAt: string;
		id: string;
	};
}
