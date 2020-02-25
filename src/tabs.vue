<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'PandaTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        data: function () {
            return {
                eventBus: new Vue()
            }
        },
        provide(){
          return {
              eventBus: this.eventBus
          }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'PandaTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'PandaTabsItem' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, item)
                            // item 为选中的那个组件
                        }
                    })
                }
            })
            this.eventBus.$emit('update:selected', this.selected)

        }
    }
</script>
<style lang="scss" scoped>
    .tabs{

    }
</style>