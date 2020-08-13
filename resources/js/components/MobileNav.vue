<template>
    <div 
        id="nav-mobile" 
        class="t-fixed t-bg-white lg:t-hidden t-h-full t-pb-10 t-overflow-scroll t-border-l t-border-gray-400" 
        :class="{
            'active': isMobileNavShowed
        }"
        >
        <div>
            <div class="t-block t-text-right t-p-6">
                <span @click="(e) => $emit('close', e)" class="t-cursor-pointer">
                    <i class="fas fa-times t-text-2xl"></i>
                </span>
            </div>
            <div class="t-border-b t-border-gray-400"></div>
            <ul>
                <li v-for="(menu, index) in menus" :key="index" class="">
                    <a :href="menu.path" class="t-px-5 t-py-5 t-block t-text-right">
                        {{menu.title}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'menus',
        'isMobileNavShowed'
    ],
}
</script>

<style lang="scss">
    #nav-mobile {
        width: 300px;
        top: 0; 
        right: 0;
        transform: translateX(300px);
        transition: transform .3s ease-in-out;

        &.active {
            transform: translateX(0px);
        }
    }
</style>