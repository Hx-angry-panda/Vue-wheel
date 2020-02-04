const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('可以设置 input value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '你好'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('你好')
        vm.$destroy()
    })
    it('可以设置 disabled 输入框', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.getAttribute('disabled')).to.equal('disabled')
        vm.$destroy()
    })
    it('可以设置 readonly 输入框', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.getAttribute('readonly')).to.equal('readonly')
        vm.$destroy()
    })
    it('可以设置 error 输入框', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                iserror: 'hello'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
        const spanElement = vm.$el.querySelector('span')
        expect(spanElement.innerText).to.equal(vm.iserror)
        vm.$destroy()
    })
    it('可以设置 change/input/focus/blur  事件的输入框', () => {
        ['change','input','focus','blur'].forEach((eventName) => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on(eventName, callback)
            let event = new Event(eventName)
            const inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
            vm.$destroy()
        })
    })
})