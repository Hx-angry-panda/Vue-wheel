import Toast from "./toast";

let currentToast
export default {
    install (Vue, options){
        Vue.prototype.$toast = function (message,options) {
            if (currentToast){
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: options,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Vue, message, propsData: options, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: options
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}