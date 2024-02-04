import { Fetcher } from "swr";
import useSWRMutation from "swr/mutation";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../hooks/useAppStore";
import { setIsLogin, setName } from "../store/user";

import { ILoginRequest, ILoginResponse } from "../types/api/user";
import { LOGIN } from "../apis/user";
import "./Login.scss";

interface ILoginForm {
	email: string;
	password: string;
}

const fetcher: Fetcher<ILoginResponse | undefined, ILoginRequest> = (data) => LOGIN(data);
export default function Login() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { trigger } = useSWRMutation("/user/login", () => fetcher(getValues()));
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginForm>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<ILoginForm> = async () => {
		const res = await trigger();

		if (res?.status) {
			alert("登入成功");
			dispatch(setIsLogin(true));
			dispatch(setName(res.result.name));
			navigate("/");
		} else {
			if (res?.message) {
				alert(res.message);
			} else {
				alert("登入失敗，請重新嘗試");
			}
		}
	};

	return (
		<div className="w-100 d-flex bg-neutral-bg position-relative overflow-hidden" style={{ padding: "97px 0 0 0" }}>
			<div className="row">
				<div className="d-none d-md-block col-md-6 position-relative" style={{ zIndex: 3 }}>
					<img
						className="w-100"
						src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/register.png?raw=true"
						alt=""
					/>
				</div>

				<div className="col-12 col-md-6">
					<div className="h-100 d-flex flex-column justify-content-center align-items-center">
						<img
							className="deco-line"
							src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
							alt=""
						/>

						<Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-10">
								<h6 className="text-primary mb-2">享樂酒店，誠摯歡迎</h6>
								<h1 className="text-white">立即開始旅程</h1>
							</div>

							<Form.Group className="mb-4" controlId="email">
								<Form.Label className="text-white">電子信箱</Form.Label>
								<Form.Control
									size="lg"
									type="text"
									placeholder="hello@exsample.com"
									isInvalid={!!errors?.email}
									defaultValue={""}
									{...register("email", {
										pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "請輸入合法信箱格式" },
										validate: {
											required: (v: string) => {
												return (v !== "" && v !== undefined) || "請輸入電子信箱";
											},
										},
									})}
								/>
								<Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>
							</Form.Group>

							<Form.Group className="mb-4" controlId="password">
								<Form.Label className="text-white">密碼</Form.Label>
								<Form.Control
									size="lg"
									type="password"
									placeholder="請輸入密碼"
									isInvalid={!!errors?.password}
									defaultValue={""}
									{...register("password", {
										validate: { required: (v: string) => (v !== "" && v !== undefined) || "請輸入密碼" },
										minLength: { value: 8, message: "請輸入至少8碼字元" },
									})}
								/>
								<Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>
							</Form.Group>

							<Form.Check className="text-white mb-10" type="checkbox" label="記住帳號" />

							<Button variant="outline" size="lg" type="submit" className="w-100 bg-white mb-10">
								會員登入
							</Button>

							<div className="d-flex align-items-center">
								<span className="text-white">沒有會員嗎？</span>
								<Link to="/register">
									<Button variant="link">前往註冊</Button>
								</Link>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
