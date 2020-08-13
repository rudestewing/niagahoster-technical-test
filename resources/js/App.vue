<template>
    <div class="t-min-h-full t-text-gray-700">
        <component :is="`LayoutDefault`" >
            <router-view> </router-view>
        </component>
    </div>
</template>

<script>
import LayoutDefault from './layouts/default.vue';

export default {
    components: {
        LayoutDefault,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
    html, body {
        font-size: 1rem;
        height: 100%;
    }
</style>