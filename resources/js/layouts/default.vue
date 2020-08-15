<template>
    <div id="layout-default" class="t-h-full">
        <Header />
            <div id="content">
                <slot> </slot>
            </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {

        }
    },
}
</script>