<script lang="ts">
	import { MarginContainer, MapPin } from '$lib/components';
</script>

<section id="kontakt">
	<MarginContainer>
		<div id="container">
			<div id="location" class="subcontainer">
				<h2 class="serif">Du willst uns besuchen?</h2>
				<div id="location-container">
					<MapPin width="2.7rem" color="var(--dark)" />
					<p class="sans-serif">
						Schulstraße 19
						<br />99869 Drei Gleichen
						<br />Deutschland
					</p>
				</div>
			</div>
			<div id="socials" class="subcontainer">
				<h2 class="serif">Mehr von uns</h2>
				<a href="https://www.instagram.com/henningshof/" class="sans-serif">Instagram</a>
				<a href="https://www.facebook.com/people/Henningshof/100086176788029/" class="sans-serif"
					>Facebook</a
				>
			</div>
			<div id="contact" class="subcontainer">
				<h2 class="serif">Kontaktdaten</h2>
				<a href="mailto:info@hennings-hof.de" class="sans-serif">info@hennings-hof.de</a>
			</div>
		</div>
	</MarginContainer>
</section>

<style>
	section {
		padding: 4rem 0;
	}

	#container {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	#location {
		margin-right: auto;
	}

	#socials {
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	#contact {
		margin-left: auto;
		text-align: right;
	}

	.subcontainer {
		flex: 1;
	}

	h2 {
		margin-bottom: 0.7rem;
		font-weight: 500;
		font-size: 1.7rem;
	}

	a {
		text-decoration: none;
	}

	#location-container {
		display: flex;
		align-items: flex-start;
	}

	#location-container p {
		margin-left: 1rem;
	}

	#socials a {
		font-size: 1.2rem;
	}

	/* media queries */
	@media (max-width: 800px) {
		#container {
			flex-direction: column;
			justify-content: flex-start;
		}

		#location {
			margin-right: 0rem;
			text-align: left;
		}

		#socials {
			text-align: left;
			margin-top: 2rem;
		}

		#contact {
			margin-left: 0rem;
			text-align: left;
			margin-top: 2rem;
		}
	}
</style>
