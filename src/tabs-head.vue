<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PandaTabsHead',
        inject: ['eventBus'],
        created() {
            this.eventBus.$emit('update:selected', this.selected)
        }

    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head{
        height: $tab-height;
        display: flex;
        justify-content: flex-start;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            width: 100px;
        }
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>