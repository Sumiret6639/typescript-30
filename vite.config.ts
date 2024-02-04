import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// const env = loadEnv(mode, process.cwd(), "");
	console.log(mode);
	return {
		base: mode === "production" ? "/typescript-30/" : "/",
		plugins: [react()],
	};
});
