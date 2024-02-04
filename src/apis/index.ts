const basePath = "https://freyja-aaoz.onrender.com/api/v1";

type TMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function fetcher<U>(method: TMethod, url: string, data: unknown) {
	try {
		const init = {
			method: method || "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: method === "POST" ? JSON.stringify(data) : null,
		};

		const res = await fetch(basePath + url, init);
		const jsonResponse = await res.json();
		return jsonResponse as U;
	} catch (error) {
		console.warn(error);
		return undefined;
	}
}
