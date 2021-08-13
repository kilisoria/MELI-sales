import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		App: {
			title: "MELI - SOLD"
		}
	}
});

export default app;