<template>
    <div class="whdx-swiper-container">
        <div class="whdx-swiper-icon-top" v-if="showTopDot && swiper">
            <a :class="['whdx-dot', index === swiper.current_index + 1 && 'whdx-dot-active']" v-for="index in length">
                {{ index }}
            </a>
        </div>
        <div class="whdx-swiper" :style="{
            height: height
        }">
            <slot></slot>
        </div>
        <div class="whdx-swiper-icon-bottom" v-if="showBottomDot">
            <a :class="['whdx-dot', index === swiper.current_index + 1 && 'whdx-dot-active']" v-for="index in length">
                {{ index }}
            </a>
        </div>
    </div>
</template>
<script>
    import Swiper from './Swiper.js'

    export default {
        props: {
            height: {
                type: [String, Number],
                default: '500px'
            },
            length: {
                type: Number,
                default: 0
            },
            showTopDot: {
                type: Boolean,
                default: true
            },
            showBottomDot: {
                type: Boolean,
                default: false
            },
        },
        name: "",
        data() {
            return {
                swiper: null
            };
        },
        methods: {
            init() {
                this.swiper = new Swiper({
                    container: this.$el,
                    height: '300'
                })
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
<style lang="less" scoped>
    .whdx-swiper {
        position: relative;
        overflow: hidden;
    }
    .whdx-dot {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid black;
    }
    .whdx-dot-active {
        color: #ffffff;
        border: 1px solid white;
        background-color: black;
    }
</style>