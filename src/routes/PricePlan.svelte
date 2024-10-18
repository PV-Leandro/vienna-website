<script lang="ts">
    export let pricePlan: { name: string, description: string, highlight?: boolean, price: string, features: string[] }
</script>

<div>
    <div class="flex items-center justify-between gap-x-4">
        <h3 id="tier-hobby" class="text-lg font-semibold leading-8 {pricePlan.highlight ? 'text-indigo-600' : 'text-gray-900'}">{pricePlan.name}</h3>
        {#if pricePlan.highlight}
            <p class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">Most popular</p>
        {/if}
    </div>
    <p class="mt-4 text-sm leading-6 text-gray-600">{pricePlan.description}</p>
    <p class="mt-6 flex items-baseline gap-x-1">
        <span class="text-4xl font-bold tracking-tight text-gray-900">{pricePlan.price}</span>
    </p>
    <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
        {#each pricePlan.features as feature}
            <li class="flex gap-x-3">
                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"/>
                </svg>
                {feature}
            </li>
        {/each}
    </ul>
</div>
<a href="#" aria-describedby="tier-freelancer"
   class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy
    plan</a>