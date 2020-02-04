import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'ok'
    },
    methods: {
        inputChange: function (e) {
            console.log(e)
        },
        inputInput: function (e) {
            console.log(e);
        },
        inputFocus: function (e) {
            console.log(e);
        },
        inputBlur: function (e) {
            console.log(e);
        }
    }
})