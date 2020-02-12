<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'PandaLayout',
        data: function () {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted: function () {
            this.$children.forEach((vm)=>{
                if (vm.$options.name === 'PandaSider'){
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: 100vh;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>