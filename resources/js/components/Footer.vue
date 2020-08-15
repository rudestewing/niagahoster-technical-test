<template>
    <div id="footer" >
        <FooterTop />
        <div class="t-bg-dark t-text-gray-400">
            <app-wrapper-section-content>
                <app-wrapper-container>
                    <div class="row t-mb-3 lg:t-mb-12">
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> HUBUNGI KAMI </h3>

                            <ul class="t-mb-4">
                                <li v-for="(item, index) in contact.one" :key="index" class="t-mb-1">
                                    {{item}}
                                </li>
                            </ul>
                            
                            <ul class="t-mb-4">
                                <li v-for="(item, index) in contact.two" :key="index" class="t-mb-1">
                                    {{item}}
                                </li>
                            </ul>

                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> Layanan </h3>

                            <ul class="t-mb-3">
                                <li v-for="(service, index) in services" :key="index" class="t-mb-1">
                                    <a :href="service.path" class="hover:t-text-gray-100 hover:t-no-underline">{{service.title}}</a>
                                </li>
                            </ul>
                            
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> SERVICE HOSTING </h3>

                            <ul class="t-mb-3">
                                <li v-for="(serviceHosting, index) in serviceHostings" :key="index" class="t-mb-1">
                                    <a :href="serviceHosting.path" class="hover:t-text-gray-100 hover:t-no-underline">{{serviceHosting.title}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> TUTORIAL </h3>

                            <ul class="t-mb-3">
                                <li v-for="(tutorial, index) in tutorials" :key="index" class="t-mb-1">
                                    <a :href="tutorial.path" class="hover:t-text-gray-100 hover:t-no-underline">{{tutorial.title}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row t-mb-3 lg:t-mb-12">
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> TENTANG KAMI </h3>

                            <ul class="t-mb-3">
                                <li v-for="(about, index) in aboutUs" :key="index" class="t-mb-1">
                                    <a :href="about.path" class="hover:t-text-gray-100 hover:t-no-underline">{{about.title}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> KENAPA PILIH NIAGAHOSTER? </h3>

                            <ul class="t-mb-3">
                                <li v-for="(why, index) in whyChoose" :key="index" class="t-mb-1">
                                    {{why}}
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> NEWSLETTER </h3>
                            <div 
                                class="t-flex t-content-between t-items-stretch t-bg-white t-text-gray-700 t-outline-none t-border-white"
                                style="border-radius: 5rem; border-width: 4px;"
                                >
                                <input 
                                    type="text" 
                                    class="t-p-4 t-bg-white t-text-gray-700 t-outline-none t-border-none"
                                    placeholder="Email"
                                    
                                    style="border-radius: 5rem;"
                                >
                                <!-- <button class="button round t-block t-h-full" @click="handleSubmit">
                                    hello
                                </button> -->
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> </h3>
                            <ul class="t-flex t-flex-wrap t-justify-left">
                                <li v-for="(social, index) in socials" :key="index" class="t-mr-3 t-mb-2">
                                    <a 
                                        :href="social.url"
                                        target="_blank" 
                                        class="t-rounded-full t-border t-border-gray-500 t-text-gray-500 t-h-12 t-w-12 t-flex t-items-center t-justify-center hover:t-text-gray-800 hover:t-bg-white"
                                        style="border-width: 3px;"
                                    >
                                        <div v-html="social.iconHtml" class="t-text-lg"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row t-mb-3 lg:t-mb-12">
                        <div class="col-12">
                            <h3 class="t-font-bold t-mb-5 t-text-gray-600 t-mt-3 t-h-8"> PEMBAYARAN </h3>
                            <ul class="t-flex t-flex-wrap t-justify-left">
                                <li v-for="(iconName, index) in paymentIconNames" :key="index" class="t-border-2 t-border-gray-500 t-mr-2 lg:t-mr-4 t-mb-2 lg:t-mb-4 t-rounded-lg t-flex t-justify-center t-items-center t-h-10 t-w-24 t-bg-gray-100">
                                    <img :src="`/assets/images/${iconName}.png`" alt="" class="t-h-6 t-w-auto">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="t-font-bold t-mb-5 t-text-gray-700 t-mt-3 t-h-8">
                                Aktivasi instant dengan e-Payment Hosting dan domain langsung aktif!
                            </p>
                        </div>
                    </div>
                    <div class="t-border t-border-gray-900 t-mb-4"></div>
                    <div class="row t-text-xs">
                        <div class="col-12 col-lg-8 t-mb-4 lg:t-mb-0">
                            <p>
                                Copyright 2016 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja, and DC Biznet Technovillage Jakarta 
                            </p>
                            <p>
                                Clodu VPS Murah powered by Webuzo Softacolus, intel SSD and cloud computing technology
                            </p>
                        </div>
                        <div class="col-12 col-lg-4 lg:t-text-right">
                            <a href="/#" clas="t-text-gray-700"> Syarat & Ketentuan | Kebijakan Privasi </a>
                        </div>
                    </div>
                </app-wrapper-container>
            </app-wrapper-section-content>
        </div>
    </div>
</template>

<script>
import FooterTop from './FooterTop.vue';

export default {
    components: {
        FooterTop,
    },
    data() {
        return {
            contact: {
                one: [
                    '0274-5305505',
                    'Senin - Minggu',
                    '24 Jam Nonstop',
                ],
                two: [
                    'Jl. Selokan Mataram Monjali',
                    'Karangjati MT I/304',
                    'Sinduadi, Mlati, Sleman',
                    'Yogyakarta 55284',
                ]
            },
            services: [
                {
                    title: 'Domain',
                    path: '/#',
                },
                {
                    title: 'Shared Hosting',
                    path: '/#',
                },
                {
                    title: 'Cloud VPS Hosting',
                    path: '/#',
                },
                {
                    title: 'Manage VPS Hosting',
                    path: '/#',
                },
                {
                    title: 'Web Builder',
                    path: '/#',
                },
                {
                    title: 'Keamanan SSL/ HTTPS',
                    path: '/#',
                },
                {
                    title: 'Jasa Pembuatan Website',
                    path: '/#',
                },
                {
                    title: 'Program Afiliasi',
                    path: '/#',
                },
            ],
            serviceHostings: [
                {
                    title: 'Hosting Murah',
                    path: '/#',
                },
                {
                    title: 'Hosting Indonesia',
                    path: '/#',
                },
                {
                    title: 'Hosting Singapura SG',
                    path: '/#',
                },
                {
                    title: 'Hosting PHP',
                    path: '/#',
                },
                {
                    title: 'Hosting Wordpress',
                    path: '/#',
                },
                {
                    title: 'Hosting Laravel',
                    path: '/#',
                },
            ],
            tutorials: [
                {
                    title: 'Knowledgebase',
                    path: '/#',
                },
                {
                    title: 'Blog',
                    path: '/#',
                },
                {
                    title: 'Cara Pembayaran',
                    path: '/#',
                },
            ],
            aboutUs: [
                {
                    title: 'Tim Niagahoster',
                    path: '/#',
                },
                {
                    title: 'Karir',
                    path: '/#',
                },
                {
                    title: 'Events',
                    path: '/#',
                },
                {
                    title: 'Penawaran & Promo Spesial',
                    path: '/#',
                },
                {
                    title: 'Kontak Kami',
                    path: '/#',
                },
            ],
            whyChoose: [
                'Support Terbaik',
                'Garansi Harga Termurah',
                'Domain Gratis Selamanya',
                'Datacenter Hosting Terbaik',
                'Review Pelanggan',
            ],
            socials: [
                {
                    name: 'facebook',
                    iconHtml: '<i class="fab fa-facebook-f"></i>',
                    url: 'https://google.com' 
                },
                {
                    name: 'twitter',
                    iconHtml: '<i class="fab fa-twitter"></i>',
                    url: 'https://google.com' 
                },
                {
                    name: 'google',
                    iconHtml: '<i class="fab fa-google"></i>',
                    url: 'https://google.com' 
                },
            ],
            paymentIconNames: [
                'bca',
                'mandiri',
                'bni',
                'visa',
                
                'bca',
                'mandiri',
                'bni',
                'visa',
                
                // 'master-card',
                // 'atm-bersama',
                // 'permata-bank',
                // 'prima',
                // 'alto'
            ],
        }
    },
    methods: {
        handleSubmit() {

        }
    },
    
}
</script>