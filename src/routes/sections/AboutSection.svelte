<script lang="ts">
	import { MarginContainer } from '$lib/components';
	import type { About } from '$lib/types';
	import { viewport } from '$lib/actions';
	import { onMount } from 'svelte';

	export let about: About;

	let shown = true;

	onMount(() => {
		if (
			'IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype
		) {
			shown = false;
			shown = true;
		}
	});
</script>

<section id="ueber-den-henningshof">
	<MarginContainer>
		<div id="heading-container">
			<h2 class="serif">{about.title}</h2>
			<span
				id="line"
				use:viewport
				on:enterViewport={() => (shown = true)}
				on:exitViewport={() => (shown = false)}
				class:shown
			/>
		</div>
		<div id="content-container">
			<div id="text-container" class="sans-serif">
				<p>{about.text}</p>
			</div>
			<img
				src={about.img.src}
				srcset={`${about.img.mobile} 300w, ${about.img.tablet} 600w, ${about.img.desktop} 1200w`}
				sizes="100%"
				alt={about.img.alt}
				id="about-img"
			/>
		</div>
	</MarginContainer>
</section>

<style>
	section {
		padding: 6rem 0;
	}

	#heading-container {
		width: 100%;
		display: flex;
		align-items: center;
	}

	h2 {
		font-size: 4rem;
		font-weight: 300;
		margin-right: 4rem;
	}

	#line {
		display: block;
		flex: 1;
		height: 2px;
		background-color: var(--dark);
	}

	#content-container {
		margin-top: 2rem;
		display: flex;
	}

	#text-container p {
		font-weight: 500;
		margin-right: 6rem;
		font-size: 1.2rem;
	}

	#about-img {
		width: 30rem;
		object-fit: cover;
	}

	/* media queries */
	@media (max-width: 1024px) {
		h2 {
			font-size: 3rem;
		}

		#line {
			display: none;
		}

		#content-container {
			flex-direction: column;
			margin-top: 1rem;
		}

		#text-container p {
			margin-right: 0rem;
		}

		#about-img {
			margin-top: 3rem;
			width: 30rem;
		}
	}

	@media (max-width: 640px) {
		#content-container {
			flex-direction: column;
		}

		#about-img {
			margin-top: 3rem;
			width: 100%;
		}
	}

	/* animations */
	@media (prefers-reduced-motion: no-preference) {
		.shown {
			animation: fadeIn 1s;
			transform-origin: left;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: scaleX(0);
			}

			to {
				opacity: 1;
				transform: scaleX(1);
			}
		}
	}
</style>
