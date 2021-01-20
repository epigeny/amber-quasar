export function loading (state) {
  return state.loading
}

export function formGroups (state) {
  return state.formGroups
}

export function formValue (state) {
  return state.formValue
}

export function formById (state) {
  return (id) => {
    for (const group of state.formGroups) {
      const form = group.forms.filter(f => f.id === id).pop()
      if (form) {
        return form
      }
    }
  }
}

export function links (state) {
  return state.links
}
