import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})

//单元测试
import chai from 'chai'
const expect = chai.expect
//icon 单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
//loading 单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
// icon 左
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'left'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}
//icon 右
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
}
