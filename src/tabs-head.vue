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
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                let tabsPadding = vm.$parent.$parent.$el.style.paddingLeft
                let appPadding = app.style.paddingLeft
                this.$refs.line.style.width = `${width}px`
                //g-tabs 有 padding-left 存在
                if(tabsPadding){
                    //app 和 g-tabs 同时有 padding-left 存在
                    if(appPadding){
                        this.$refs.line.style.left = `${left}` - `${parseInt(tabsPadding)}` - `${parseInt(appPadding)}` + 'px'
                    }else{
                        //只有 g-tabs 有 padding-left 存在
                        this.$refs.line.style.left = `${left}` - `${parseInt(tabsPadding)}` + 'px'
                    }
                } else if(appPadding){
                    //只有 app 有 padding-left 存在
                    this.$refs.line.style.left = `${left}` - `${parseInt(appPadding)}` + 'px'
                }else{
                    this.$refs.line.style.left = `${left}px`
                }
            })
        }

    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .tabs-head{
        height: $tab-height;
        display: flex;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 0.3s;
        }
        > .actions-wrapper{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }
</style>