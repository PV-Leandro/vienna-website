<script lang="ts">
    import {scrollTo} from "$lib/util/scroll";
</script>

<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                 alt="">
        </a>
    </div>
    <div class="flex lg:hidden">
        <button type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
        </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
        <a href="#features" on:click={() => scrollTo('features-header')}
           class="text-sm font-semibold leading-6 text-gray-900">Features</a>
        <a href="#pricing" on:click={() => scrollTo('pricing-header')}
           class="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
        <a href="https://docs.wait-up.net"
           class="text-sm font-semibold leading-6 text-gray-900">Documentation</a>
        <a href="https://status.wait-up.net" class="text-sm font-semibold leading-6 text-gray-900">Status</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="https://dev.wait-up.net" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                aria-hidden="true">&rarr;</span></a>
    </div>
</nav>