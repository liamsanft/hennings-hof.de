<script lang="ts">
	export let width: string;
	export let color: string;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1"
	{width}
	stroke={color}
>
	<title>Pfeil, welcher nach unten zeigt</title>
	<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
