<template>
    <div>
        <app-wrapper-section-content>
            <app-wrapper-container class="t-flex t-flex-wrap t-justify-center">
                <PriceCard v-for="(price, index) in prices" :key="index"  :price="price"  />
            </app-wrapper-container>
        </app-wrapper-section-content>
    </div>
</template>

<script>
import PriceCard from './PriceCard.vue';

export default {
    components: {
        PriceCard
    },
    data() {
        return {
            prices: [
                {
                    disc: null,
                    isBestSeller: false,
                    name: 'Bayi',
                    value: {
                        before: '19900',
                        after: '14900',
                    },
                    totalUser: 938,
                    resourcePower: 0.5,
                    packages: [
                        {
                            value: '500MB',
                            name: 'Disk Space'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Bandwith'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Databases'
                        },
                        {
                            value: '1',
                            name: 'Domain'
                        },
                        {
                            value: 'Instant',
                            name: 'Backup'
                        },
                        {
                            value: 'Unlimited',
                            name: 'SSL Gratis Selamanya'
                        },
                    ]
                },
                {
                    disc: null,
                    isBestSeller: false,
                    name: 'Pelajar',
                    value: {
                        before: '46900',
                        after: '23450',
                    },
                    totalUser: 4168,
                    resourcePower: 1,
                    packages: [
                        {
                            value: 'Unlimited',
                            name: 'Disk Space'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Bandwith'
                        },
                        {
                            value: 'Unlimited',
                            name: 'POP3 Email'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Databases'
                        },
                        {
                            value: '10',
                            name: 'Addon Domain'
                        },
                        {
                            value: 'Instant',
                            name: 'Backup'
                        },
                        {
                            value: 'Domain Gratis',
                            name: 'Selamanya'
                        },
                        {
                            value: 'Unlimited',
                            name: 'SSL Gratis Selamanya'
                        },
                    ]
                },
                {
                    disc: null,
                    isBestSeller: true,
                    name: 'Personal',
                    value: {
                        before: '58900',
                        after: '38900',
                    },
                    totalUser: 10017,
                    resourcePower: 2,
                    packages: [
                        {
                            value: 'Unlimited',
                            name: 'Disk Space'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Bandwith'
                        },
                        {
                            value: 'Unlimited',
                            name: 'POP3 Email'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Databases'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Addon Domain'
                        },
                        {
                            value: 'Instant',
                            name: 'Backup'
                        },
                        {
                            value: 'Domain Gratis',
                            name: 'Selamanya'
                        },
                        {
                            value: 'Unlimited',
                            name: 'SSL Gratis Selamanya'
                        },
                        {
                            value: 'Private',
                            name: 'Name Server'
                        },
                        {
                            value: 'Spam Assasin',
                            name: 'Mail Protection'
                        },
                    ]
                },
                {
                    disc: 40,
                    isBestSeller: false,
                    name: 'Bisnis',
                    value: {
                        before: '109900',
                        after: '65900',
                    },
                    totalUser: 3552,
                    resourcePower: 3,
                    packages: [
                        {
                            value: 'Unlimited',
                            name: 'Disk Space'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Bandwith'
                        },
                        {
                            value: 'Unlimited',
                            name: 'POP3 Email'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Databases'
                        },
                        {
                            value: 'Unlimited',
                            name: 'Addon Domain'
                        },
                        {
                            value: 'Instant',
                            name: 'Backup'
                        },
                        {
                            value: 'Domain Gratis',
                            name: 'Selamanya'
                        },
                        {
                            value: 'Unlimited',
                            name: 'SSL Gratis Selamanya'
                        },
                        {
                            value: 'Private',
                            name: 'Name Server'
                        },
                        {
                            value: 'Spam Assasin',
                            name: 'Mail Protection'
                        },
                        {
                            type: 'rating', 
                            value: 5
                        },
                        {
                            value: 'Spam Expert',
                            name: 'Pro Mail Protection'
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .price-card {
        width: 300px;
    }
</style>