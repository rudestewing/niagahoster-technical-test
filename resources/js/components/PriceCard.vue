<template>
    <div 
        class="t-border t-border-gray-400 t-text-center price-card t-pb-5"
        :class="{
            't-border-blue-medium': price.isBestSeller
        }"
        >
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
            <a href="#" class="button round" :class="{'primary': price.isBestSeller}">
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
            return this.price.disc ? `Diskon ${this.price.disc}%` : `Pilih Sekarang`;
        }
    }
}
</script>