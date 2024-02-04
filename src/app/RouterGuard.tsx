import { useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../hooks/useAppStore";
// import { setIsLogin, setName } from "../store/user";

// 無需權限的路由清單
const withoutAuthPath = ["/", "/login", "register"];

const RouterGuard = ({ children }: { children?: ReactNode }) => {
	const location = useLocation();
	const navigete = useNavigate();
	const isLogin = useAppSelector((state) => state.user.isLogin);

	// 路由權限驗證
	useEffect(() => {
		// 首頁不受登入影響
		if (withoutAuthPath.includes(location.pathname)) return;

		// 其他路由設定
		if (isLogin) {
			if (!withoutAuthPath.includes(location.pathname)) {
				navigete("/");
			}
		} else {
			if (location.pathname === "/info") {
				navigete("/");
			}

			// 登出時清空 localstorage
			if (localStorage.getItem("persist:typescript30")) {
				localStorage.removeItem("persist:typescript30");
			}

			if (localStorage.getItem("persist:user")) {
				localStorage.removeItem("persist:user");
			}
		}
	}, [location.pathname, navigete, isLogin]);

	return <>{children}</>;
};

export default RouterGuard;
