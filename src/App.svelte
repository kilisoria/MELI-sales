<script>
	export let App;
</script>

<main>
	<h1>Welcome to {App.title}!</h1>
	<p>Here you can find the items most sold on mercadolibre.com</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>