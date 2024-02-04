import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import App from "./pages/App.tsx";
import Info from "./pages/Info.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/info",
					element: <Info />,
				},
				{
					path: "/register",
					element: <Register />,
				},
				{
					path: "/login",
					element: <Login />,
				},
			],
		},
	],
	{ basename: "/typescript-30" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
