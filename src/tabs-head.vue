<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PandaTabsHead',
        inject: ['eventBus'],

    }
</script>
<style lang="scss" scoped>
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>