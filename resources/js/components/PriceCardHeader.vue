<template>
    <div>
        <div v-if="price.isBestSeller">
            <div>
                
            </div>
        </div>
        <div v-else>
            <h2 class="t-font-bold t-py-3">
                {{price.name}}
            </h2>
            <app-border-horizontal></app-border-horizontal>
            <div class="t-py-4">
                <div>
                    <span class="t-line-through">Rp {{convertRupiah(price.value.before)}}</span>
                </div>
                <div class="t-flex t-justify-center">
                    <span class="t-mr-2"> Rp </span>
                    <span class="t-text-5xl t-font-bold" style="margin-top: -14px;">
                        {{firstBlockPrice(convertRupiah(price.value.after))}}
                    </span>
                    <span>
                        {{restBlockPrice(convertRupiah(price.value.after)) }}/ bln
                    </span>
                </div>
            </div>
            <app-border-horizontal></app-border-horizontal>
            <div class="t-py-3">
                <span class="t-font-semibold">{{price.totalUser}}</span> Pengguna Terdaftar
            </div>
            <app-border-horizontal></app-border-horizontal>
        </div>
    </div>
</template>

<script>
import format from 'format-number';

export default {
    props: [
        'price'
    ],
    computed: {
        convertRupiah() {
            return (value) => {
                const formater = format({
                    prefix: '',
                    integerSeparator: '.'
                });
                return formater(value);
            }
        },
        firstBlockPrice() {
            return (stringPriceInRupiah) => {
                const items = stringPriceInRupiah.split('.');
                return items[0]
            }
        },
        restBlockPrice() {
            return (stringPriceInRupiah) => {
                const items = stringPriceInRupiah.split('.');
                if(items.length) {
                    delete items[0];
                } 
                return items.join('.');
            }
        }
    }
}
</script>