<template>
    <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]: true, disabled: disabled}"
            @click="$emit('click')" :disabled="disabled">
        <g-icon v-if="icon && !loading" v-bind:name="icon" class="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'PandaButton',
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return value === 'left' || value === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button{font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
        &:hover{border-color: var(--border-color-hover);}
        &:active{background: var(--button-active-bg);}
        &:focus{outline: none;}
        > .content{
            order: 2;
        }
        > .icon{
            order: 1;
            margin-right: .3em;
        }
    }
    .g-button.icon-right {
        > .content{
            order: 1;
        }
        > .icon{
            order: 2;
            margin-right: 0;
            margin-left: .3em;
        }
    }
    .loading{
        animation: spin 2s infinite linear;
    }
    .disabled{
        background: #D8D8D8;
        cursor: not-allowed;
        &:hover{border-color: var(--border-color);}
        &:active{background: #D8D8D8;}
    }
</style>