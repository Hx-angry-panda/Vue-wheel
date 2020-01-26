<template>
    <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]: true}">
        <g-icon v-if="icon" v-bind:name="icon" class="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
    *{margin: 0; padding: 0; box-sizing: border-box;}
    :root{--button-height: 32px;--font-size: 14px;--button-bg: white;--button-active-bg: #eee;--border-radius: 4px;--color: #333;--border-color: #999;--border-color-hover: #666;}
    .g-button{font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
    }
    .g-button:hover{border-color: var(--border-color-hover);}
    .g-button:active{background: var(--button-active-bg);}
    .g-button:focus{outline: none;}
    #app{margin: 20px;}

    .g-button > .content{
        order: 2;
    }
    .g-button > .icon{
        order: 1;
        margin-right: .3em;
    }

    .g-button.icon-right > .content{
        order: 1;
    }
    .g-button.icon-right > .icon{
        order: 2;
        margin-right: 0;
        margin-left: .3em;
    }
</style>