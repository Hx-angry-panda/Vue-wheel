<template>
    <div class="wrapper" :class="{'error': iserror}">
        <input :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
               :type="type"
               :required="required"
        >
        <template v-if="iserror">
            <g-icon name="setting" class="error-icon"></g-icon>
            <span class="error-message">{{iserror}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: 'PandaInput',
        components: {
            'g-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            iserror: {
                type: String
            },
            type: {
                type:String,
                validator(value){
                    return ['button','checkbox','color','date','datetime-local','email','file','hidden','month',
                        'number','password','radio','range','reset','search','submit','tel','text','time','url',
                        'week'].indexOf(value) >= 0
                }
            },
            required: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #999;
    $border-radius: 4px;
    $border-color-hover: #666;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F1453D;
    .wrapper{
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        :not(last-child){
            margin-right: .5em;
        }
        > input {
            height: 32px;
            border: 1px solid $border-color;
            padding: 0 8px;
            font-size: inherit;
            border-radius: $border-radius;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
                &:focus {
                    box-shadow: none;
                    outline: none;
                }
            }
            > .error-icon {
                fill: $red;
            }
            > .error-message {
                color: $red;
            }
        }
    }
</style>