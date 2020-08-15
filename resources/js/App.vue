<template>
    <div class="t-min-h-full t-text-gray-800 t-font-sans-serif">
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