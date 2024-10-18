<script lang="ts">
    import PricePlan from "./PricePlan.svelte";

    const pricingPlans = {
        'hobby': {
            name: 'Hobby',
            price: 'Free',
            description: 'Try out the basic functionalities of the application.',
            features: [
                '1 Wait List',
                '500 entries/month',
                '1 person in the organization'
            ]
        },
        'essential': {
            name: 'Essential',
            price: '$19',
            description: 'Expand the functionalities of the application.',
            features: [
                '5 Wait Lists',
                '2,000 entries/month',
                '5 people in the organization',
                'Custom Messages'
            ]
        },
        'startup': {
            name: 'Startup',
            price: '$49',
            highlight: true,
            description: 'A plan that scales with your rapidly growing business.',
            features: [
                '15 Wait Lists',
                '5,000 entries/month',
                '15 people in the organization',
                'Custom Messages',
                'Position Tracking',
                'Wait Time Tracking'
            ]
        },
        'enterprise': {
            name: 'Enterprise',
            price: '$99',
            description: 'Unleash the full potential.',
            features: [
                '30 Wait Lists',
                '10,000 entries/month',
                '30 people in the organization',
                'Custom Messages',
                'Position Tracking',
                'Wait Time Tracking',
                'Branding',
                'Priority support + feature request'
            ]
        }
    };
</script>

<div class="py-24 sm:pt-48">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="pricing-header" class="mx-auto max-w-4xl text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for teams of&nbsp;all&nbsp;sizes</p>
        </div>
        <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-r-none xl:p-10">
                <PricePlan pricePlan={pricingPlans.hobby}/>
            </div>
            <div class="flex flex-col justify-between rounded-3xl lg:rounded-none bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-b-none xl:p-10">
                <PricePlan pricePlan={pricingPlans.essential}/>
            </div>
            <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:z-10 lg:rounded-b-none xl:p-10">
                <PricePlan pricePlan={pricingPlans.startup}/>
            </div>
            <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-l-none xl:p-10">
                <PricePlan pricePlan={pricingPlans.enterprise}/>
            </div>
        </div>
    </div>
</div>