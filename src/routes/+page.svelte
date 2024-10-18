<script>
    import Faq from "./Faq.svelte";
    import Feature from "./Feature.svelte";
    import Pricing from "./Pricing.svelte";
    import Footer from "./Footer.svelte";
    import Hero from "./Hero.svelte";
    import Navigation from "./Navigation.svelte";
    import MobileMenu from "./MobileMenu.svelte";
    import Transition from "svelte-transition";
    import {onMount} from 'svelte';
    import {scrollTo} from "$lib/util/scroll";

    let showMobileMenu = false;

    onMount(() => {
        const fragment = window.location.hash.substring(1);
        console.log('fragment', fragment);
        if (fragment === 'pricing') {
            scrollTo('pricing-header');
        } else if (fragment === 'features') {
            scrollTo('features-header');
        }
    });

</script>

<div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
        <Navigation on:toggle-menu={() => showMobileMenu = !showMobileMenu}/>
        <Transition show={showMobileMenu}>
            <MobileMenu on:close={() => showMobileMenu = false}/>
        </Transition>
    </header>
    <main class="isolate">
        <Hero/>
        <Feature/>
        <Pricing/>
        <Faq/>
        <Footer/>
    </main>
</div>