<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'PandaTabsItem',
        data: function(){
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String,Number],
                required: true
            }
        },
        inject: ['eventBus'],
        methods: {
            xxx(){
                this.eventBus.$emit('update:selected', this.name, this)
            }
        },
        created(){
           this.eventBus.$on('update:selected', (name) => {
                if (name === this.name){
                    this.active = true
                }else{
                    this.active = false
                }
           })
        },
        computed: {
            classes: function () {
                return {
                    active: this.active
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            color: $blue;
            font-weight: bold;
        }
    }
</style>