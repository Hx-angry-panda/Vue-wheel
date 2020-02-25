<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
            onClick(){
                if (this.disabled) {
                    return
                }//必须放到前面，否则无效
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this) //测试用例
            }
        },
        created(){
            if (this.eventBus){
                this.eventBus.$on('update:selected', (name) => {
                    if (name === this.name){
                        this.active = true
                    }else{
                        this.active = false
                    }
                })
            }

        },
        computed: {
            classes: function () {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: grey;
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
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>