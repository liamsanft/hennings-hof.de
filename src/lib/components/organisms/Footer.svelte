<script lang="ts">
	import { MarginContainer } from '$lib/components';
</script>

<footer>
	<MarginContainer>
		<div id="container">
			<p class="sans-serif">&copy; 2022 Flower Art</p>
			<div>
				<a href="https://www.flowerarterfurt.de/impressum" class="sans-serif">Impressum</a>
				<a href="/datenschutz" class="sans-serif">Datenschutz</a>
			</div>
		</div>
	</MarginContainer>
</footer>

<style>
	#container {
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;
	}

	a {
		text-decoration: none;
	}

	a:first-child {
		margin-right: 1rem;
	}
</style>
