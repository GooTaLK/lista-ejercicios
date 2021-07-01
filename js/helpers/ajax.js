export default async function ajax({ url, cbSuccess, cbError }) {
	try {
		const res = await fetch(url);
		const data = await res.json();

		if (!res.ok) throw { status: res.status, statusText: res.statusText };
		cbSuccess(data);
	} catch (err) {
		!cbError ? console.error(err) : cbError(err);
	}
}
