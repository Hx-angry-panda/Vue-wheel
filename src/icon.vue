<template>
    <svg class="g-icon">
        <use v-bind:xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'PandaIcon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
    }
</style>