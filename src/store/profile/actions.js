import hello from 'hellojs'

export function loadProfile (context) {
  context.commit('updateLoading', true)
  const realm = context.state.realm
  // here will use axios to query the user's forms
  if (hello.getAuthResponse(realm) == null) {
    this.$router.push('/login')
  }
  context.commit('updateRealm', realm)
  hello(realm).api('me')
    .then((profile) => {
      console.log(profile)
      context.commit('updateProfile', profile)
      context.commit('updateLoading', false)
    })
}

export function storeRealm (context, realm) {
  context.commit('updateRealm', realm)
  context.commit('updateProfile', { name: 'anonymous' })
}
