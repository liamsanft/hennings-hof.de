<script lang="ts">
	let menuOpen = false;
</script>

<header>
	<button
		on:click={() => (menuOpen = !menuOpen)}
		aria-expanded={menuOpen}
		aria-controls="main-menu"
		class="sans-serif">Menu</button
	>
	<nav id="main-menu" aria-label="main menu" aria-hidden={!menuOpen}>
		<ul id="nav-list" class:visible={menuOpen} class="center">
			<li><a href="/#start" class="sans-serif">Start</a></li>
			<li><a href="/#veranstaltungen" class="sans-serif">Veranstaltungen</a></li>
			<li><a href="/#ueber-den-henningshof" class="sans-serif">Über den Henningshof</a></li>
			<li><a href="/#kontakt" class="sans-serif">Kontakt</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		padding: 1rem 0rem 1rem 0rem;
		z-index: 3;
	}

	/* create header background gradient with pseudo element */

	header::after {
		content: '';
		position: fixed;
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		height: 3.4rem;
		inset: 0;
		z-index: -1;
		top: 0;
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		header::after {
			-webkit-backdrop-filter: blur(4px);
			backdrop-filter: blur(4px);
			background-color: transparent;
			-webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
			mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
			height: 6rem;
		}
	}

	button {
		display: none;
	}

	li {
		list-style-type: none;
		list-style-position: outside;
		margin-right: 3rem;
	}

	li:last-child {
		margin-right: 0;
	}

	a {
		text-decoration: none;
		font-weight: 500;
		font-size: 1.03rem;

		/* required for the hover effect */
		position: relative;
	}

	/* cool link hover effect */

	a::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		top: 23px;
		background-color: #000;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	a:hover::before {
		transform: scaleX(1);
	}

	/* media queries */
	@media (max-width: 700px) {
		button {
			display: block;
			background-color: transparent;
			border: none;
			font-weight: 700;
			font-size: 1.1rem;
			right: 0;
			margin-right: 1rem;
			z-index: 3;
			position: fixed;
		}

		button:hover {
			cursor: pointer;
		}

		ul {
			display: flex;
			visibility: hidden;
			width: 100%;
			height: 100%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: fixed;
			inset: 0;
			z-index: 2;
			background-color: rgba(255, 255, 255, 0.8);
			opacity: 0;
			transition: visibility 0.3s linear, opacity 0.3s linear;
		}

		.visible {
			visibility: visible;
			opacity: 1;
		}

		/* no transition for prefers reduced motion */
		@media (prefers-reduced-motion: reduce) {
			ul {
				transition: none;
			}
		}

		li {
			margin-right: 0rem;
			margin-bottom: 0.5rem;
		}

		li:last-child {
			margin-bottom: 0rem;
		}

		a {
			font-size: 1.25rem;
			position: static;
		}

		a::before {
			display: none;
		}

		/* special blurred background */
		@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
			ul {
				-webkit-backdrop-filter: blur(4px);
				backdrop-filter: blur(4px);
				background-color: transparent;
			}
		}
	}
</style>
