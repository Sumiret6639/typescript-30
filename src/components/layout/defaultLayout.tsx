import { ReactNode } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/useAppStore";
import "../../styles/global.scss";
import { setLogout } from "../../store/user";
import logoWhite from "/logo-white.svg";
import ic_menu from "/icon/ic_menu.svg";
import ic_Profile from "/icon/ic_Profile.svg";
import ic_FB from "/icon/FB.svg";
import ic_IG from "/icon/IG.svg";

export default function DefaultLayout({ children = null, withFooter = true }: { children?: ReactNode; withFooter?: boolean }) {
	const isLogin = useAppSelector((state) => state.user.isLogin);
	const name = useAppSelector((state) => state.user.name);
	const dispatch = useAppDispatch();

	return (
		<>
			<Navbar id="defaultNavbar" expand="lg" className="bg-transparent fixed-top">
				<div className="container-fluid">
					<Navbar.Brand href="#">
						<Link to="/">
							<img src={logoWhite} alt="nav brand" className="d-block m-0" style={{ maxWidth: "197px" }} />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm">
						<img src={ic_menu} alt="icon-menu" />
					</Navbar.Toggle>

					{isLogin ? (
						<Navbar.Offcanvas
							className="bg-neutral-bg text-white"
							id={`offcanvasNavbar-expand-sm`}
							aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}></Offcanvas.Title>
							</Offcanvas.Header>

							<Offcanvas.Body className="d-flex justify-content-center align-items-center">
								<Nav className="w-100 justify-content-center justify-content-md-end align-items-center">
									<Nav.Link href="#" className="text-center me-md-4 mb-4 mb-md-0">
										<Link to="/info" className="text-white fw-bold">
											客房旅宿
										</Link>
									</Nav.Link>
									<Nav.Link href="#" className="text-white text-center mb-4 mb-md-0">
										<img src={ic_Profile} alt="ic_Profile" className="me-2" />
										{name}
									</Nav.Link>
									<Nav.Link
										href="#"
										className="text-white text-center mb-4 mb-md-0"
										onClick={() => {
											dispatch(setLogout());
										}}
									>
										登出
									</Nav.Link>
									<Nav.Link href="#" className="d-block text-center">
										<Link to="/info" className="d-block">
											<Button variant="primary" className="text-white px-md-8 py-4">
												立即訂房
											</Button>
										</Link>
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					) : (
						<Navbar.Offcanvas
							className="bg-neutral-bg text-white"
							id={`offcanvasNavbar-expand-sm`}
							aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
							placement="end"
						>
							<Offcanvas.Header closeButton className="text-white">
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}></Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body className="d-flex justify-content-center align-items-center">
								<Nav className="w-100 justify-content-center justify-content-md-end align-items-center">
									<Nav.Link href="#" className="text-center me-md-4 mb-4 mb-md-0">
										<Link to="/info" className="text-white fw-bold">
											客房旅宿
										</Link>
									</Nav.Link>
									<Nav.Link href="#" className="text-center me-md-4 mb-4 mb-md-0">
										<Link to="/login" className="text-white fw-bold">
											會員登入
										</Link>
									</Nav.Link>
									<Nav.Link href="#" className="d-block text-center">
										<Link to="/info" className="d-block">
											<Button variant="primary" className="text-white px-md-8 py-4">
												立即訂房
											</Button>
										</Link>
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					)}
				</div>
			</Navbar>

			{children}

			{withFooter && (
				<footer className="bg-neutral-bg text-white" style={{ padding: "80px 0" }}>
					<div className="container">
						<div className="row d-flex flex-column flex-md-row justify-content-between">
							<div className="col-12 col-md-3">
								<img src={logoWhite} alt="footer brand" className="mb-10" width={196} height={72} />
								<div className="d-flex" style={{ marginBottom: "80px" }}>
									<img src={ic_FB} alt="ic_FB" className="me-4" />
									<img src={ic_IG} alt="ic_IG" />
								</div>
							</div>

							<div className="col-12 col-md-4">
								<div className="d-flex flex-column flex-md-row justify-content-md-between mb-4 mb-md-0">
									<div className="mb-4 mb-md-10">
										<h6 className="fw-bold mb-2">TEL</h6>
										<p className="fw-bold mb-2">+886-7-1234567</p>
									</div>
									<div>
										<h6 className="fw-bold mb-2">MAIL</h6>
										<p className="fw-bold mb-2">elh@hexschool.com</p>
									</div>
								</div>
								<div className="d-flex flex-column flex-md-row justify-content-md-between" style={{ marginBottom: "80px" }}>
									<div className="mb-4 mb-md-10">
										<h6 className="fw-bold mb-2">FAX</h6>
										<p className="fw-bold mb-2">+886-7-1234567</p>
									</div>
									<div>
										<h6 className="fw-bold mb-2">WEB</h6>
										<p className="fw-bold mb-2">www.elhhexschool.com.tw</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row d-flex flex-md-row flex-column">
							<div className="col-12 col-md-6">
								<p>806023 台灣高雄市新興區六角路123號</p>
							</div>
							<div className="col-12 col-md-6 text-md-end">
								<p>© 享樂酒店 2023 All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</footer>
			)}
		</>
	);
}
