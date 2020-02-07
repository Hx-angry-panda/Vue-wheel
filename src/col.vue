<template>
    <div class="col" :class=colClass
        :style=colStyle>
        <div>
            <slot></slot>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'PandaCol',
        props: {
            span: {
                type: Number
            },
            offset: {
                type: Number
            }
        },
        data: function(){
            return {
                gutter: 0
            }
        },
        computed: {
            colClass: function() {
                let {span,offset} = this
                return [span &&`col-${span}`,offset &&`offset-${offset}`]
            },
            colStyle: function(){
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n /24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n /24) * 100%;
            }
        }
    }
</style>