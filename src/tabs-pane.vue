<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'PandaTabsPane',
        data(){
            return {
                active: false
            }
        },
        props:{
            name: {
                type: [String,Number],
                required: true
            }
        },
        inject: ['eventBus'],
        created() {
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
    .tabs-pane{
        padding: 1em;
        &.active{
        }
    }
</style>