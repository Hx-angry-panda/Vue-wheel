<template>
    <div class="popover" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper"
             :class="[`position-${position}`]">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
            <slot></slot>
        </span>

    </div>
</template>

<script>
    export default {
        name: 'PandaPopover',
        data() {
            return {
                visible: false
            }
        },
        props: {
          position: {
              type: String,
              default: 'top',
              validator (value) {
                  return ['top','bottom','left','right'].indexOf(value) >= 0
              }
          },
          trigger: {
              type: String,
              default: 'click',
              validator (value) {
                  return ['click','hover'].indexOf(value) >= 0
              }
          }
        },
        mounted() {
            if(this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else{
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed () {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        methods: {
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    //点击的按钮是否为this.$refs.triggerWrapper的子节点
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            },
            positionContent(){
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                //宽、高、离屏幕页面顶部长度、离页面左边长度
                let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                //把contentWrapper.getBoundingClientRect().height 赋值给 height2
                let {height: height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {top: top + window.scrollY, left: left + window.scrollX,},
                    bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
                    left: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX + width
                    },
                }
                contentWrapper.style.left = positions[this.position].left + 'px'
                contentWrapper.style.top = positions[this.position].top + 'px'
            },
            close(){
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            open(){
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClickDocument(event){
                //this.$refs.popover存在并且this.$refs.popover为按钮或者this.$refs.popover的子节点为按钮，就什么都不做
                //不然则把 popover 关闭，并移除事件
                if (this.$refs.popover &&
                    (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))
                ) { return }
                //在 popover 中选中不会关闭并移除事件
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))
                ) { return }
                else{
                    this.close()
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                border-top-color: $border-color;
                top: 100%;
                border-bottom: none;
            }
            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
                border-bottom: none;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                border-bottom-color: $border-color;
                bottom: 100%;
                border-top: none;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
                border-top: none;
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-left-color: $border-color;
                left: 100%;
                border-right: none;
            }
            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
                border-right: none;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-right-color: $border-color;
                right: 100%;
                border-left: none;
            }
            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
                border-left: none;
            }
        }
    }
</style>