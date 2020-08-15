<template>
    <div id="header-top" class="t-relative">
        <div class="t-block md:t-flex t-h-full md:t-flex-wrap md:t-justify-between t-text-xs">
            <a href="/" class="t-block t-w-full t-h-full md:t-w-auto t-text-center md:t-text-left t-mb-2 lg:t-mb-0 t-py-3 t-relative">
                <span class="bookmark">
                    <i class="fas fa-tag"></i>
                </span>
                <span class="t-py-3" style="margin-left: 35px;">
                    Gratis Ebook 9 Cara Cerdas Menggunakan domain
                </span>
            </a>
            <ul class="t-flex t-flex-wrap t-justify-center md:t-justify-end t-py-3">
                <li class="t-flex t-items-center">
                    <a href="/" class="t-px-3 t-flex t-items-center">
                        <i class="fas fa-phone-alt t-mr-1"></i>
                        <span>
                            0274-5305505
                        </span>
                    </a>                        
                </li>
                <li class="t-flex t-items-center">
                    <a href="/" class="t-px-3 t-flex t-items-center">
                        <i class="fas fa-comment-alt t-mr-1"></i>
                        <span>
                            Live Chat
                        </span>
                    </a>
                </li>
                <li class="t-flex t-items-center">
                    <a href="/" class="t-px-3 t-flex t-items-center">
                        <i class="fas fa-user-circle t-mr-1 t-text-lg"></i>
                        <span>
                            Live Chat
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    .bookmark {
        @apply t-bg-blue-medium t-text-white t-absolute t-flex t-items-center t-justify-center;
        top: 0;
        left: 0;
        width: 30px;
        height: 20px;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0; 
            height: 0; 

            @apply t-border-blue-medium;

            border-top-width: 15px;
            border-top-style: solid;
            border-top-color: transparent;

            border-bottom-width: 15px;
            border-bottom-style: solid;
            border-bottom-color: transparent;
            
            border-left-width: 15px;
            border-left-style: solid;

            margin-bottom: -15px;

            z-index: 1;
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0; 
            height: 0; 

            @apply t-border-blue-medium;

            border-top-width: 15px;
            border-top-style: solid;
            border-top-color: transparent;

            border-bottom-width: 15px;
            border-bottom-style: solid;
            border-bottom-color: transparent;
            
            border-right-width: 15px;
            border-right-style: solid;

            margin-bottom: -15px;

            z-index: 1;
        }
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: none;
            color: inherit;
        }
    }
</style>