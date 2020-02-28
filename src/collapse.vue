<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "PandaCollapse",
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
            }
        },
        data () {
            return {
                eventBus: new Vue(),
            }
        },
        provide () {
            return {
                eventBus: this.eventBus
            }
        },
        mounted () {
            //触发eventBus实例上的事件update:selected，this.selected作为参数传给监听器回调，也就是数组，即预设打开的collapse
            this.eventBus.$emit('update:selected', this.selected)
            //监听eventBus实例上的update:addSelected事件，collapse-item的标志作为参数传入回调函数
            this.eventBus.$on('update:addSelected', (name) => {
                //不能直接改 props，所以采用此方法
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if (this.single) {
                    selectedCopy = [name]
                } else {
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>