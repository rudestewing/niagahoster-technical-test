<template>
    <div>
        <div v-if="price.isBestSeller" class="t-bg-blue-medium t-text-white t-relative">
            <div class="stack-top">
                BEST SELLER!
            </div>
            <div>
                <h2 class="t-font-bold t-py-3">
                    {{price.name}}
                </h2>
                <app-border-horizontal class="t-border-blue-medium"></app-border-horizontal>
                <div class="t-py-4">
                    <div>
                        <span class="t-line-through">Rp {{numberFormat(price.value.before)}}</span>
                    </div>
                    <div class="t-flex t-justify-center">
                        <span class="t-mr-2"> Rp </span>
                        <span class="t-text-5xl t-font-bold" style="margin-top: -14px;">
                            {{firstBlockPrice(numberFormat(price.value.after))}}
                        </span>
                        <span>
                            {{restBlockPrice(numberFormat(price.value.after)) }}/ bln
                        </span>
                    </div>  
                </div>
                <app-border-horizontal class="t-border-blue-medium"></app-border-horizontal>
                <div class="t-py-3 t-bg-blue-darken">
                    <span class="t-font-semibold">{{numberFormat(price.totalUser)}}</span> Pengguna Terdaftar
                </div>
                <app-border-horizontal class="t-border-blue-medium"></app-border-horizontal>
            </div>
        </div>
        <div v-else>
            <h2 class="t-font-bold t-py-3">
                {{price.name}}
            </h2>
            <app-border-horizontal></app-border-horizontal>
            <div class="t-py-4">
                <div>
                    <span class="t-line-through">Rp {{numberFormat(price.value.before)}}</span>
                </div>
                <div class="t-flex t-justify-center">
                    <span class="t-mr-2"> Rp </span>
                    <span class="t-text-5xl t-font-bold" style="margin-top: -14px;">
                        {{firstBlockPrice(numberFormat(price.value.after))}}
                    </span>
                    <span>
                        {{restBlockPrice(numberFormat(price.value.after)) }}/ bln
                    </span>
                </div>
            </div>
            <app-border-horizontal></app-border-horizontal>
            <div class="t-py-3">
                <span class="t-font-semibold">{{numberFormat(price.totalUser)}}</span> Pengguna Terdaftar
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
        numberFormat() {
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

<style lang="scss" scoped>

// I found how to make this "ribbon folder" Code in here... >>
// https://stackoverflow.com/questions/63128872/how-can-i-make-a-45-degree-responsive-ribbon-with-folded-corner

.stack-top {
    /* adjust the below to control the shape */
    --d:8px; 
    --w:180px;
    /**/

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(29.29%, -100%) rotate(45deg); /* 29.29% = 100%*(1 - cos(45deg)) */
    color: #fff;
    text-align: center;
    width: var(--w);
    transform-origin: bottom left;
    padding:8px 0 calc(var(--d) + 8px);
    
    @apply t-bg-green-medium t-font-bold;

    clip-path: polygon(0 100%,0 calc(100% - var(--d)),50% calc(100% - var(--d) - var(--w)/2),100% calc(100% - var(--d)),100% 100%,calc(100% - var(--d)) calc(100% - var(--d)), var(--d) calc(100% - var(--d)));
    
    left:0;
    right:auto;
    transform: translate(-29.29%, -100%) rotate(-45deg);
    transform-origin: bottom right;
    
    @apply t-shadow-lg;
}
</style>