<template>
    <div class="t-border t-border-gray-400 t-text-center price-card t-pb-5">
        <PriceCardHeader :price="price"/>
        <div class="t-py-5">
            <ul>
                <li v-for="(packageItem, index) in price.packages" :key="index" class="t-mb-2">
                    <div v-if="packageItem.type">
                        <div v-if="packageItem.type == 'rating'">
                            <i v-for="n in packageItem.value" :key="n" class="fas fa-star t-text-md t-text-yellow-600" ></i>
                        </div>
                    </div>
                    <div v-else>
                        <span class="t-font-bold" v-if="packageItem.value"> {{packageItem.value}} </span>
                        <span>
                            {{packageItem.name}}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="">
            <a 
                href="#" 
                class="t-px-5 t-py-2 t-border-2 t-border-gray-700 t-inline-block hover:t-no-underline hover:t-bg-blue-darken hover:t-text-white hover:t-border-blue-darken"
                :class="{
                    't-bg-blue-medium': price.isBestSeller,
                    't-text-white': price.isBestSeller,
                    't-border-none': price.isBestSeller,
                }"
                style="border-radius: 5rem;"
            > 
                {{choosePrice}}
            </a>
        </div>
    </div>
</template>

<script>
import PriceCardHeader from './PriceCardHeader.vue';

export default {
    props: [
        'price'
    ],
    components: {
        PriceCardHeader,
    },
    computed: {
        choosePrice: function() {
            console.log(this.price);
            return this.price.disc ? `Diskon ${this.price.disc}%` : `Pilih Sekarang`;
        }
    }
}
</script>