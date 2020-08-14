<template>
    <div>
        <app-wrapper-section-content>
            <app-wrapper-container>
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-6 t-mb-4">
                        <div>
                            <div class="t-mb-4 t-pt-0 md:t-py-4 lg:t-pt-6">
                                <h1 class="t-font-bold lg:t-text-4xl t-mb-2">
                                    PHP Hosting
                                </h1>
                                <h1 class="t-font-light lg:t-text-4xl t-mb-2">
                                    Cepat, handal, penuh dengan <br> modul PHP yang Anda butuhkan
                                </h1>
                            </div>
                            <div>
                                <ul>
                                    <li class="t-flex t-mb-4 t-items-center">
                                        <i class="fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"></i>
                                        <span>
                                            Solusi PHP untuk performa query yang lebih cepat.
                                        </span>
                                    </li>
                                    <li class="t-flex t-mb-4 t-items-center">
                                        <i class="fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"></i>
                                        <span>
                                            Konsumsi memory yang lebih rendah.
                                        </span>
                                    </li>
                                    <li class="t-flex t-mb-4 t-items-center">
                                        <i class="fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"></i>
                                        <span>
                                            Support PHP 5.3, 5.4, 5.5, 5.6, 7.
                                        </span>
                                    </li>
                                    <li class="t-flex t-mb-4 t-items-center">
                                        <i class="fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"></i>
                                        <span>
                                            Fitur enkripsi ionCube dan Zend Guard Loaders.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-6 t-flex t-items-center">
                        <div class="t-w-full">
                            <img src="/assets/svg/illustration-banner-PHP-hosting-01.svg" alt="" class="t-w-full">
                        </div>
                    </div>
                </div>
            </app-wrapper-container>
        </app-wrapper-section-content>
        <div class="t-border-b t-border-gray-400"></div>
        <app-wrapper-section-content>
            <app-wrapper-container>
                <div class="row t-justify-center t-max-w-screen-md t-mx-auto">
                    <div class="col-6 col-md-4 t-text-center">
                        <div class="t-h-48 t-flex t-justify-center t-items-center">
                            <img src="/assets/svg/icon-zenguard.svg" class="t-w-32">
                        </div>
                        <span>
                            PHP Zend Guard Loader
                        </span>
                    </div>
                    <div class="col-6 col-md-4 t-text-center">
                        <div class="t-h-48 t-flex t-justify-center t-items-center">
                            <img src="/assets/svg/icon-composer.svg" class="t-w-32">
                        </div>
                        <span>
                            PHP Composer
                        </span>
                    </div>
                    <div class="col-6 col-md-4 t-text-center">
                        <div class="t-h-48 t-flex t-justify-center t-items-center">
                            <img src="/assets/svg/icon-ioncube.svg" class="t-w-32">
                        </div>
                        <span>
                            PHP ionCube Loader
                        </span>
                    </div>
                </div>
            </app-wrapper-container>
        </app-wrapper-section-content>
        <app-wrapper-section-content>
            <app-wrapper-container>
                <h1 class="t-text-center t-font-bold">
                    Paket Hosting Singapura yang Tepat
                </h1>
                <h1 class="t-text-center t-font-light">
                    Diskon 40% + Domain dan SSL Gratis untuk Anda
                </h1>
            </app-wrapper-container>
        </app-wrapper-section-content>
        <app-wrapper-section-content>
            <app-wrapper-container>
                <PriceList />
            </app-wrapper-container>
        </app-wrapper-section-content>
        <app-wrapper-section-content>
            <app-wrapper-container>
                <h1 class="t-text-center t-mb-3">
                    Powerful dengan Limit PHP yang lebih besar
                </h1>
                <div class="row t-justify-center">
                    <div class="col-12 col-md-3 t-mb-3">
                        <ul>
                            <li class="t-flex">
                                
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3">

                    </div>
                </div>
            </app-wrapper-container>
        </app-wrapper-section-content>
    </div>
</template>

<script>
import PriceList from '../components/PriceList.vue';

export default {
    components: {
        PriceList,
    },
    data() {
        return {
            
        }
    },
}
</script>