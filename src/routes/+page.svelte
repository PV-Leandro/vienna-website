<script>
    import Faq from "./Faq.svelte";
    import Feature from "./Feature.svelte";
    import Pricing from "./Pricing.svelte";
    import Footer from "./Footer.svelte";
    import Hero from "./Hero.svelte";
    import Navigation from "./Navigation.svelte";
    import MobileMenu from "./MobileMenu.svelte";
</script>

<div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
        <Navigation/>
        <MobileMenu/>
    </header>
    <main class="isolate">
        <Hero/>
        <Feature/>
        <Pricing/>
        <Faq/>
        <Footer/>
    </main>
</div>