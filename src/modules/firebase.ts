export default {
  // Actions

  async registerItem(context, data) {
    const itemId = context.rootgetters.ItemId
    const itemData = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      category: data.category,
    }

    const response = await fetch('https://vue-grocery-f79c2-default-rtdb.firebaseio.com.json',
      {
        method: 'PUT',
        body: JSON.stringify(itemData),
      },
    )
    if (!response.ok) {
      context.commit('registerItem', {
        ...itemData,
        id: itemId,
      })
    }
  },
  async loadItems(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate)
      return

    const response = await fetch('https://vue-grocery-f79c2-default-rtdb.firebaseio.com.json')
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'failed to festch')
      throw error
    }

    const items = []

    // eslint-disable-next-line no-restricted-syntax
    for (const key in responseData) {
      const item = {
        id: key,
        name: responseData[key].name,
        price: responseData[key].price,
        quantity: responseData[key].quantity,
        category: responseData[key].category,
      }
      items.push(item)
    }
    context.commit('setItems', items)
    context.commit('setFetchTimestamp')
  },

  // Getters

  items(state) {
    return state.items
  },
  hasItems(state) {
    return state.items && state.items.length > 0
  },
  isItem(_, getters, _2, rootGetters) {
    const items = getters.items
    const userId = rootGetters.userId
    return items.some(item => item.id === userId)
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch
    if (!lastFetch)
      return true

    const currentTimeStamp = new Date().getTime()
    return (currentTimeStamp - lastFetch) / 1000 > 60
  },

  // Mutations

  registeritem(state, payload) {
    state.items.push(payload)
  },
  setitems(state, payload) {
    state.items = payload
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime()
  },
}
