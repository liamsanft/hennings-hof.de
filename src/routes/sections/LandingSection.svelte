<script lang="ts">
	import { Logo, ChevronDown } from '$lib/components';
</script>

<section id="start" class="center">
	<div id="logo-container">
		<Logo type="full" width="100%" />
	</div>
	<div id="bottom-info">
		<p class="serif">Scrollen, um mehr zu erfahren</p>
		<ChevronDown width="2rem" color="var(--dark)" />
	</div>

	<div id="background-logo" aria-hidden="true">
		<Logo type="lilie" width="100%" />
	</div>
</section>

<style>
	#start {
		flex-direction: column;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	#logo-container {
		width: 20rem;
		margin-right: 2.5rem;
	}

	#bottom-info {
		position: absolute;
		bottom: 0;
		text-align: center;
		margin-bottom: 0.5rem;
	}

	#background-logo {
		position: absolute;
		z-index: -1;
		opacity: 0.2;
		max-width: 110rem;
		width: 200%;
	}

	/* media queries */
	@media (max-width: 1024px) {
		#logo-container {
			width: 16rem;
			margin-right: 2rem;
		}
	}

	@media (max-width: 640px) {
		#logo-container {
			width: 12rem;
			margin-right: 1.6rem;
		}
	}
</style>
