<div class="bg-white">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
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
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                        aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-50"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
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
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="isolate">
        <!-- Hero section -->
        <div class="relative pt-14">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                 aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                     style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <h1 class="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Manage a
                            wait queue with confidence</h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Let your clients know immediately when their
                            product or service is available. No extra device required</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#"
                               class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                started</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                                    aria-hidden="true">→</span></a>
                        </div>
                    </div>
                    <div class="mt-16 flow-root sm:mt-24">
                        <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                                 alt="App screenshot" width="2432" height="1442"
                                 class="rounded-md shadow-2xl ring-1 ring-gray-900/10">
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                 aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                     style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
        </div>

        <!-- Feature section -->
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-base/7 font-semibold text-indigo-600">Work smarter, not harder</h2>
            <p class="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                Everything you need to manage your wait queue.</p>
            <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <div class="relative lg:col-span-3">
                    <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
                    <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-left"
                             src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png" alt="">
                        <div class="p-10 pt-4">
                            <h3 class="text-sm/4 font-semibold text-indigo-600">Simplicity</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Notify your client on their phone</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Forget about having to buy and maintain devices for notifying your client.
                            They already have a device in their pocket that can receive notifications, so let's use that instead!</p>
                        </div>
                    </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
                </div>
                <div class="relative lg:col-span-3">
                    <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]"></div>
                    <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-left lg:object-right"
                             src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png" alt="">
                        <div class="p-10 pt-4">
                            <h3 class="text-sm/4 font-semibold text-indigo-600">Privacy</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">No personal information</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Your client doesn't have to share personal information such as a
                                telephone number nor email. They only need to access a site on their browser and they're good to go!</p>
                        </div>
                    </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]"></div>
                </div>
                <div class="relative lg:col-span-2">
                    <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
                    <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-left"
                             src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png" alt="">
                        <div class="p-10 pt-4">
                            <h3 class="text-sm/4 font-semibold text-indigo-600">Informational</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Enhance the waiting experience</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Let your end-user know the average wait time, their current position in the queue,
                            and send custom messages to their device once the product or service is ready</p>
                        </div>
                    </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]"></div>
                </div>
                <div class="relative lg:col-span-2">
                    <div class="absolute inset-px rounded-lg bg-white"></div>
                    <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                        <img class="h-80 object-cover object-center"
                             src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png" alt="">
                        <div class="p-10 pt-4">
                            <h3 class="text-sm/4 font-semibold text-indigo-600">Customization</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Make it your own</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Invite people to your organization, add your company logo to display,
                                define what information is shared to the end user, and more!</p>
                        </div>
                    </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                </div>
                <div class="relative lg:col-span-2">
                    <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
                    <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-center"
                             src="https://tailwindui.com/plus/img/component-images/bento-01-network.png" alt="">
                        <div class="p-10 pt-4">
                            <h3 class="text-sm/4 font-semibold text-indigo-600">Advanced</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Smart</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Aenean vulputate justo commodo auctor
                                vehicula in malesuada semper.</p>
                        </div>
                    </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
                </div>
            </div>
        </div>


        <!-- Testimonial section -->
        <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
            <div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
                     src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                     alt="">
                <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
                <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                         style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                </div>
                <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                     aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                         style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                </div>
                <div class="relative mx-auto max-w-2xl lg:mx-0">
                    <img class="h-12 w-auto" src="https://tailwindui.com/plus/img/logos/workcation-logo-white.svg"
                         alt="">
                    <figure>
                        <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                            <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent
                                at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida
                                sociis enim nullam ultricies habitant malesuada lorem ac.”</p>
                        </blockquote>
                        <figcaption class="mt-6 text-base text-white">
                            <div class="font-semibold">Judith Black</div>
                            <div class="mt-1">CEO of Tuple</div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <!-- Pricing section -->
        <div class="py-24 sm:pt-48">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl text-center">
                    <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for teams
                        of&nbsp;all&nbsp;sizes</p>
                </div>
                <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Distinctio et nulla eum
                    soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id
                    ut laborum.</p>
                <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-r-none xl:p-10">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">
                                    Freelancer</h3>
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-600">The essentials to provide your best work for
                                clients.</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900">$24</span>
                                <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
                            </p>
                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    5 products
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Up to 1,000 subscribers
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Basic analytics
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    48-hour support response time
                                </li>
                            </ul>
                        </div>
                        <a href="#" aria-describedby="tier-freelancer"
                           class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy
                            plan</a>
                    </div>
                    <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:z-10 lg:rounded-b-none xl:p-10">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 id="tier-startup" class="text-lg font-semibold leading-8 text-indigo-600">
                                    Startup</h3>
                                <p class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                                    Most popular</p>
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-600">A plan that scales with your rapidly growing
                                business.</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900">$32</span>
                                <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
                            </p>
                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    25 products
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Up to 10,000 subscribers
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Advanced analytics
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    24-hour support response time
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Marketing automations
                                </li>
                            </ul>
                        </div>
                        <a href="#" aria-describedby="tier-startup"
                           class="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy
                            plan</a>
                    </div>
                    <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-l-none xl:p-10">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 id="tier-enterprise" class="text-lg font-semibold leading-8 text-gray-900">
                                    Enterprise</h3>
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for
                                your company.</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900">$48</span>
                                <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
                            </p>
                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Unlimited products
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Unlimited subscribers
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Advanced analytics
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    1-hour, dedicated support response time
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    Marketing automations
                                </li>
                            </ul>
                        </div>
                        <a href="#" aria-describedby="tier-enterprise"
                           class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy
                            plan</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQs -->
        <div class="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
                <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">What&#039;s the best thing
                        about Switzerland?
                    </dt>
                    <dd class="mt-4 lg:col-span-7 lg:mt-0">
                        <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is a big plus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                            fugiat.</p>
                    </dd>
                </div>

                <!-- More questions... -->
            </dl>
        </div>

        <!-- CTA section -->
        <div class="relative -z-10 mt-32 px-6 lg:px-8">
            <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
                 aria-hidden="true">
                <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
                     style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"></div>
            </div>
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boost your productivity.<br>Start
                    using our app today.</h2>
                <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Incididunt sint fugiat pariatur
                    cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#"
                       class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                        started</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                            aria-hidden="true">→</span></a>
                </div>
            </div>
            <div class="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
                 aria-hidden="true">
                <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                     style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <div class="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer aria-labelledby="footer-heading" class="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <img class="h-7" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Company name">
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Hosting</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Data
                                        Services</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Uptime
                                        Monitoring</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Enterprise
                                        Services</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">API
                                        Reference</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
