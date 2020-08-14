<template>
    <div id="header">
        <app-wrapper-container>
            <HeaderTop />
        </app-wrapper-container>
        <div class="t-border-b t-border-gray-400"></div>
        <app-wrapper-container>
            <div class="t-flex t-justify-between">
                <router-link to="/" class="t-w-40 lg:t-w-56 t-py-4">
                    <img src="/assets/images/logo.png" alt="" class="t-w-56 t-h-auto">
                </router-link>
                <nav id="nav-default" class="t-hidden lg:t-flex lg:t-flex-wrap lg:t-items-center">
                    <a 
                        v-for="(menu, index) in menus" :key="index" 
                        :href="menu.path" 
                        class="t-h-full t-flex t-items-center t-px-2 xl:t-px-3 hover:t-text-gray-900 t-no-underline hover:t-no-underline t-overflow-auto">
                        <span>
                            {{menu.title}}
                        </span>
                    </a>
                </nav>
                <div class="t-flex lg:t-hidden t-items-center">
                    <span 
                        @click="showMobileNav()" 
                        class="t-w-10 t-h-10 t-rounded-lg t-flex t-justify-center t-items-center t-border t-border-blue-400 hover:t-bg-blue-700 hover:t-text-white hover:t-border-blue-900 t-cursor-pointer"
                        >
                        <i class="fas fa-bars t-text-lg"></i>
                    </span>
                </div>
            </div>
        </app-wrapper-container>
        <div class="t-border-b t-border-gray-400"></div>
        <MobileNav :menus="menus" :isMobileNavShowed="isMobileNavShowed" @close="hideMobileNav" />
    </div>
</template>

<script>
import HeaderTop from './HeaderTop.vue';
import MobileNav from './MobileNav.vue';

export default {
    components: {
        HeaderTop,        
        MobileNav,        
    },
    data() {
        return {
            isMobileNavShowed: false,
            menus: [
                {
                    title: 'Hosting',
                    path: '/hosting',
                },
                {
                    title: 'Domain',
                    path: '/hosting',
                },
                {
                    title: 'Server',
                    path: '/hosting',
                },
                {
                    title: 'Website',
                    path: '/hosting',
                },
                {
                    title: 'Afiliasi',
                    path: '/hosting',
                },
                {
                    title: 'Promo',
                    path: '/hosting',
                },
                {
                    title: 'Pembayaran',
                    path: '/hosting',
                },
                {
                    title: 'Review',
                    path: '/hosting',
                },
                {
                    title: 'Kontak',
                    path: '/hosting',
                },
                {
                    title: 'Blog',
                    path: '/hosting',
                }
            ]
        }
    },
    methods: {
        showMobileNav() {
            console.log('show mobile nav');
            this.isMobileNavShowed = true;
        },
        hideMobileNav() {
            console.log('hide mobile nav');
            this.isMobileNavShowed = false;
        }
    }
}
</script>