<template>
    <div class="t-min-h-full">
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
        height: 100%;
    }
</style>