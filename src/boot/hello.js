import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '223893809348853',
    google: '979338525132-tnkm6l7dks96550ve071ac29sgmaa39o.apps.googleusercontent.com'
  })
  Vue.prototype.$hello = hello
}
