import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '223893809348853'
  })
  Vue.prototype.$hello = hello
}
