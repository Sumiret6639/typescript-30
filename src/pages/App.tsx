import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store";
import DefaultLayout from "../components/layout/defaultLayout";

// redux toolkit 持久化
const persistor = persistStore(store);

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<DefaultLayout>
					<Outlet />
				</DefaultLayout>
			</PersistGate>
		</Provider>
	);
}

export default App;
