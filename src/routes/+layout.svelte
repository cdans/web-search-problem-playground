<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen">
	<Navbar />

	<main class="mx-auto max-w-7xl px-6 py-12">
		<ParaglideJS {i18n}>
			{@render children()}
		</ParaglideJS>
	</main>

	<Footer />
</div>
