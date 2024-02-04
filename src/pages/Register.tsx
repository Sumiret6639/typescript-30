import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Divider from "../components/common/divider";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { DevTool } from "@hookform/devtools";
import { Fetcher } from "swr";
import { REGISTER } from "../apis/user";
import { IRegisterRequest, IRegisterResponse } from "../types/api/user";
import useSWRMutation from "swr/mutation";
import "./Register.scss";

interface IFirstForm {
	email: string;
	password: string;
	confirmPassword: string;
}

interface ISecondForm {
	name: string;
	phone: string;
	year: string;
	month: string;
	date: string;
	city: string;
	town: string;
	address: string;
}
const fetcher: Fetcher<IRegisterResponse | undefined, IRegisterRequest> = (data) => REGISTER(data);

export default function Register() {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState<number>(1);
	const { trigger } = useSWRMutation("/user/register", () =>
		fetcher(
			(() => {
				const firstData = getFirstValues();
				const secondData = getSecondValues();
				const requestData = {
					name: secondData.name,
					email: firstData.email,
					password: firstData.password,
					phone: secondData.phone,
					birthday: `${secondData.year}/${secondData.month}/${secondData.date}`,
					address: {
						zipcode: Number(secondData.town.split("-")[0]),
						detail: `${secondData.city}${secondData.town.split("-")[1]}${secondData.address}`,
					},
				};

				return requestData;
			})()
		)
	);

	const {
		register,
		handleSubmit,
		getValues: getFirstValues,
		formState: { errors },
	} = useForm<IFirstForm>({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const {
		register: secondRegister,
		getValues: getSecondValues,
		handleSubmit: secondHandleSubmit,
		formState: { errors: secondErrors },
	} = useForm<ISecondForm>({
		defaultValues: {
			name: "",
			phone: "",
			year: "",
			month: "",
			date: "",
			city: "",
			town: "",
			address: "",
		},
	});

	const yearOptions = () => {
		const arr = [];
		for (let index = 1990; index < 2024; index++) {
			arr.push(index);
		}
		return arr;
	};

	const monthOptions = () => {
		const arr = [];
		for (let index = 1; index < 13; index++) {
			arr.push(index);
		}
		return arr;
	};

	const dateOptions = () => {
		const arr = [];
		for (let index = 1; index < 32; index++) {
			arr.push(index);
		}
		return arr;
	};

	const onFirstFormSubmit: SubmitHandler<IFirstForm> = (data) => {
		setCurrentStep(2);
		console.log(data);
	};

	const onSecondFormSubmit: SubmitHandler<ISecondForm> = async (data) => {
		console.log(data);
		const res = await trigger();

		if (res?.result) {
			alert("註冊成功");
			navigate("/login");
		} else {
			if (res?.message) {
				alert(res.message);
			} else {
				alert("註冊失敗，請重新嘗試");
			}
		}
	};

	return (
		<div className="w-100 bg-neutral-bg position-relative overflow-hidden" style={{ padding: "97px 0 0 0" }}>
			<div className="row">
				<div className="d-none d-md-block col-0 col-md-6 position-relative" style={{ zIndex: 3 }}>
					<img
						className="w-100"
						src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/register.png?raw=true"
						alt=""
					/>
				</div>

				<div className="col-12 col-md-6">
					{/* 第一步 */}
					{currentStep === 1 && (
						<div className="h-100 d-flex flex-column justify-content-md-center align-items-center">
							<img
								className="deco-line"
								src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
								alt="deco-line"
							/>

							<Form id="firstForm" className="register-form" onSubmit={handleSubmit(onFirstFormSubmit)}>
								<div className="mb-10">
									<h6 className="text-primary mb-2">享樂酒店，誠摯歡迎</h6>
									<h1 className="text-white">立即註冊</h1>
								</div>

								<div className="d-flex justify-content-between align-items-center mb-10">
									<div className="d-flex flex-column align-items-center flex-nowrap my-2" style={{ width: "114px" }}>
										<div className="rounded-circle bg-primary text-white text-center" style={{ width: "32px", height: "32px" }}>
											<span className="align-middle" style={{ lineHeight: "28px" }}>
												1
											</span>
										</div>
										<p className="text-white">輸入信箱及密碼</p>
									</div>

									<div className="mx-2" style={{ width: "45%" }}>
										<Divider />
									</div>

									<div className="d-flex flex-column align-items-center" style={{ width: "98px" }}>
										<div className="rounded-circle border border-neutral-60 text-neutral-60 text-center" style={{ width: "32px", height: "32px" }}>
											<span className="align-middle" style={{ lineHeight: "28px" }}>
												2
											</span>
										</div>
										<p>填寫基本資料</p>
									</div>
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
										{...register("password", { validate: { required: (v: string) => (v !== "" && v !== undefined) || "請輸入密碼" } })}
									/>
									<Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-10" controlId="confirmPassword">
									<Form.Label className="text-white">確認密碼</Form.Label>
									<Form.Control
										size="lg"
										type="password"
										placeholder="請輸入密碼"
										isInvalid={!!errors?.confirmPassword}
										defaultValue={""}
										{...register("confirmPassword", { validate: { required: (v: string) => (v !== "" && v !== undefined) || "請再次輸入密碼" } })}
									/>
									<Form.Control.Feedback type="invalid">{errors?.confirmPassword?.message}</Form.Control.Feedback>
								</Form.Group>

								<Form.Control className="btn-outline mb-4" size="lg" type="submit" value="下一步"></Form.Control>
							</Form>

							<div className="d-flex align-items-center">
								<span className="text-white">已經有會員了嗎？</span>
								<Link to={"/login"}>
									<Button variant="link" type="button">
										立即登入
									</Button>
								</Link>
							</div>
						</div>
					)}

					{/* 第二步 */}
					{currentStep === 2 && (
						<div className="h-100 d-flex flex-column justify-content-center align-items-center">
							<div className="position-absolute left-0" style={{ top: "192px" }}>
								<img
									className="w-100"
									height={100}
									src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
									alt=""
								/>
							</div>

							<Form className="register-form" onSubmit={secondHandleSubmit(onSecondFormSubmit)}>
								<div className="mb-10">
									<h1 className="text-white">立即註冊</h1>
								</div>

								<div className="d-flex justify-content-between align-items-center mb-10">
									<div className="d-flex flex-column align-items-center flex-nowrap my-2" style={{ width: "114px" }}>
										<div className="rounded-circle bg-primary text-white text-center" style={{ width: "32px", height: "32px" }}>
											<span className="align-middle" style={{ lineHeight: "28px" }}>
												1
											</span>
										</div>
										<p className="text-white">輸入信箱及密碼</p>
									</div>

									<div className="mx-2" style={{ width: "45%" }}>
										<Divider />
									</div>

									<div className="d-flex flex-column align-items-center" style={{ width: "98px" }}>
										<div className="rounded-circle bg-primary text-white text-center" style={{ width: "32px", height: "32px" }}>
											<span className="align-middle" style={{ lineHeight: "28px" }}>
												2
											</span>
										</div>
										<p className="text-white">填寫基本資料</p>
									</div>
								</div>

								<Form.Group className="mb-4" controlId="name">
									<Form.Label className="text-white">姓名</Form.Label>
									<Form.Control
										size="lg"
										type="text"
										placeholder="請輸入姓名"
										isInvalid={!!secondErrors?.name}
										defaultValue={""}
										{...secondRegister("name", {
											validate: {
												required: (v: string) => {
													return (v !== "" && v !== undefined) || "請輸入電子信箱";
												},
											},
										})}
									/>
									<Form.Control.Feedback type="invalid">{secondErrors?.name?.message}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4" controlId="phone">
									<Form.Label className="text-white">手機號碼</Form.Label>
									<Form.Control
										size="lg"
										type="text"
										placeholder="請輸入手機號碼"
										isInvalid={!!secondErrors?.phone}
										defaultValue={""}
										{...secondRegister("phone", {
											validate: {
												required: (v: string) => {
													return (v !== "" && v !== undefined) || "請輸入手機號碼";
												},
											},
										})}
									/>
									<Form.Control.Feedback type="invalid">{secondErrors?.phone?.message}</Form.Control.Feedback>
								</Form.Group>

								<Form.Label className="text-white">生日</Form.Label>
								<div className="row mb-4">
									<div className="col-4">
										<Form.Select
											size="lg"
											{...secondRegister("year", {
												validate: {
													required: (v: string) => {
														return (v !== "" && v !== undefined) || "請選擇年份";
													},
												},
											})}
										>
											<option disabled value="">
												年份
											</option>

											{yearOptions().map((item) => (
												<option key={`${item}年`} value={item}>
													{item}年
												</option>
											))}
										</Form.Select>
									</div>
									<div className="col-4">
										<Form.Select
											size="lg"
											{...secondRegister("month", {
												validate: {
													required: (v: string) => {
														return (v !== "" && v !== undefined) || "請選擇月份";
													},
												},
											})}
										>
											<option disabled value="">
												月份
											</option>

											{monthOptions().map((item) => (
												<option key={`${item}年`} value={item}>
													{item}月
												</option>
											))}
										</Form.Select>
									</div>

									<div className="col-4">
										<Form.Select
											size="lg"
											{...secondRegister("date", {
												validate: {
													required: (v: string) => {
														return (v !== "" && v !== undefined) || "請選擇日期";
													},
												},
											})}
										>
											<option disabled value="">
												日期
											</option>

											{dateOptions().map((item) => (
												<option key={`${item}日`} value={item}>
													{item}日
												</option>
											))}
										</Form.Select>
									</div>
								</div>

								<Form.Label className="text-white">地址</Form.Label>
								<div className="row mb-4">
									<div className="col-6">
										<Form.Select
											size="lg"
											{...secondRegister("city", {
												validate: {
													required: (v: string) => {
														return (v !== "" && v !== undefined) || "請選擇縣市";
													},
												},
											})}
										>
											<option value="" disabled>
												縣市
											</option>
											<option value="高雄市">高雄市</option>
										</Form.Select>
									</div>
									<div className="col-6">
										<Form.Select
											size="lg"
											{...secondRegister("town", {
												validate: {
													required: (v: string) => {
														return (v !== "" && v !== undefined) || "請選鄉鎮區";
													},
												},
											})}
										>
											<option value="" disabled selected>
												鄉鎮區
											</option>
											<option value="806-前鎮區" selected>
												前鎮區
											</option>
											<option value="800-新興區">新興區</option>
										</Form.Select>
									</div>
								</div>

								<Form.Group className="mb-10" controlId="adress">
									<Form.Control
										type="text"
										placeholder="請輸入詳細地址"
										size="lg"
										isInvalid={!!secondErrors?.address}
										defaultValue={""}
										{...secondRegister("address", {
											validate: {
												required: (v: string) => {
													return (v !== "" && v !== undefined) || "請輸入地址";
												},
											},
										})}
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>

								<Form.Check type="checkbox" className="text-white mb-6" label="我已閱讀並同意本網站個資使用規範" />

								<Button variant="primary" size="lg" type="submit" className="w-100 mb-4">
									完成註冊
								</Button>
							</Form>

							<div className="d-flex align-items-center">
								<span className="text-white">已經有會員了嗎？</span>

								<Link to={"/login"}>
									<Button variant="link" type="button">
										立即登入
									</Button>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* <DevTool control={secondControl} /> */}
		</div>
	);
}
