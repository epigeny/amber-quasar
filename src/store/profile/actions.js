import hello from 'hellojs'

export function loadProfile (context) {
  context.commit('updateLoading', true)
  const realm = context.state.realm
  // here will use axios to query the user's forms
  if (realm === 'amber') {
    const credentials = context.state.credentials
    // profile
    const profile = {
      id: credentials.identifier,
      name: credentials.identifier
    }
    context.commit('updateProfile', profile)
    context.commit('updateCredentials', undefined)
    context.commit('updateLoading', false)
  } else {
    if (hello.getAuthResponse(realm) == null) {
      this.$router.push('/login')
    }
    hello(realm).api('me')
      .then((profile) => {
        context.commit('updateProfile', profile)
        context.commit('updateLoading', false)
      })
  }
}

export function storeRealm (context, realm) {
  console.log(realm)
  context.commit('updateRealm', realm)
  context.commit('updateProfile', { name: 'anonymous' })
}

export function storeCredentials (context, credentials) {
  context.commit('updateCredentials', credentials)
}
