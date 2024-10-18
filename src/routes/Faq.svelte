<script lang="ts">
    import {fly} from 'svelte/transition';

    const faqs = [
        {
            question: 'What does my client need?',
            answer: 'Just a phone with an active internet connection.',
            expanded: false
        },
        {
            question: 'How does my client get notified?',
            answer: 'It depends on the device, the capabilities of the browser, and the permissions provided. The information of the current state of the entry is always shown up to date, without the need to refresh the browser. As for calling the attention, the system will attempt to display a notification, to vibrate, and to play a sound.',
            expanded: false
        },
        {
            question: 'What do the features on the pricing section mean?',
            list: [
                {
                    title: 'Custom Messages: ',
                    description: 'Send a message to the device of the end-user once the product or service is ready or cancelled.'
                },
                {
                    title: 'Position Tracking: ',
                    description: 'The end-user can know their current position in the list.'
                },
                {
                    title: 'Wait Time Tracking: ',
                    description: 'The end-user can know the average wait time of the list.'
                },
                {
                    title: 'Branding: ',
                    description: 'Add your company logo, visible on the entry for the end-user, on the notifications, and on the QR code.'
                }
            ],
            expanded: false
        }
    ]
</script>

<div class="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
    <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
    <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        {#each faqs as faq}
            <div class="pt-6">
                <dt>
                    <button on:click={() => faq.expanded = !faq.expanded}
                            type="button"
                            class="flex w-full items-start justify-between text-left text-gray-900"
                            aria-controls="faq-0" aria-expanded="false">
                        <span class="text-base font-semibold leading-7">{faq.question}</span>
                        <span class="ml-6 flex h-7 items-center">
                            <svg class:hidden={faq.expanded} class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true" data-slot="icon">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"/>
                            </svg>
                            <svg class:hidden={!faq.expanded} class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true" data-slot="icon">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/>
                            </svg>
                          </span>
                    </button>
                </dt>
                {#if faq.expanded}
                    <dd in:fly class="mt-2 pr-12 text-base leading-7 text-gray-600" id="faq-0">
                        {#if faq.answer}
                            <p>{faq.answer}</p>
                        {:else if faq.list}
                            <ul class="list-disc list-inside">
                                {#each faq.list as item}
                                    <li>
                                        <span class="font-medium">{item.title}</span>
                                        <span>{item.description}</span>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </dd>
                {/if}
            </div>
        {/each}
    </dl>
</div>