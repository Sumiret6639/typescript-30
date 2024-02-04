import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		// base: mode === "production" ? "/typescript-30/" : "/",
		// base: "/typescript-30/",
		base: "./",
		// publicDir: "/typescript-30/",
		plugins: [react()],
	};
});
