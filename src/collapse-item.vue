<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PandaCollapseItem",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                open: false,
            }
        },
        inject: ['eventBus'],
        mounted () {
            //监听eventBus实例上的事件update:selected，数组（即预设打开的collapse）作为参数传入回调函数
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle () {
                if (this.open) {
                    //触发eventBus实例上的事件update:removeSelected，this.name作为参数传给监听器回调，即collapse-item的标识
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                } else {
                    //触发eventBus实例上的事件update:addSelected，this.name作为参数传给监听器回调，即collapse-item的标识
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
            min-height: 32px; display: flex; align-items: center; padding: 0 8px; background: $grey;
        }
        &:first-child {
            > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
        }
        &:last-child {
            > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
        }
        > .content { padding: 8px; background: white}
    }
</style>