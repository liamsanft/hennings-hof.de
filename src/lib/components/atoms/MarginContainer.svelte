<div id="outer-container">
	<div id="inner-container">
		<slot />
	</div>
</div>

<style>
	#outer-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	#inner-container {
		width: 100%;
		max-width: 80rem;
		padding: 0 1rem;
	}
</style>
