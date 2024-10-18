<script>
    import Transition from "svelte-transition";
    import {createEventDispatcher} from "svelte";
    import {clickOutside} from "$lib/util/click-outside.js";

    const dispatch = createEventDispatcher();

    function dispatchCloseEvent() {
        dispatch('close');
    }
</script>

<div class="lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-50"></div>
    <Transition enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">
        <div use:clickOutside on:outclick={dispatchCloseEvent}  class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto"
                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                </a>
                <button type="button" on:click={dispatchCloseEvent} class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                         aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a href="#features"
                           class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                        <a href="#pricing"
                           class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pricing</a>
                        <a href="https://docs.wait-up.net"
                           class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Documentation</a>
                        <a href="https://status.wait-up.net"
                           class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Status</a>
                    </div>
                    <div class="py-6">
                        <a href="https://dev.wait-up.net"
                           class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                            in</a>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</div>