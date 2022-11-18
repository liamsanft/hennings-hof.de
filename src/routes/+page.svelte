<script lang="ts">
	import type { PageData } from './$types';
	import AboutSection from './sections/AboutSection.svelte';
	import ContactSection from './sections/ContactSection.svelte';
	import EventSection from './sections/EventSection.svelte';
	import LandingSection from './sections/LandingSection.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Henningshof</title>
</svelte:head>

<LandingSection />
<EventSection events={data.events} />
<AboutSection about={data.about} />
<ContactSection />
