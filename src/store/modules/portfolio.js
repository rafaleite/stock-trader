const state = {
  stocks: [],
  founds: 10000
}

const mutations = {
  'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
    const record = state.stocks.filter(element => element.id === stockId);
    console.log(quantity)
    if(record.length) {
      record.quantity += quantity
    } else {

      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    console.log(state)
    state.founds -= stockPrice * quantity
  },

  'SELL_STOCK'(state, {stockId, stockPrice, quantity}) {
    const record = state.stocks.filter(element => element.id === stockId);
    if(record[0].quantity > quantity) {
      record[0].quantity -= quantity
    }else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.founds += stockPrice * quantity
  },
  'SET_PORTFOLIO'(state, portfolio) {
    state.founds = portfolio.founds
    state.stocks = portfolio.stocksPortfolio ? portfolio.stocksPortfolio : []
  }
}

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  founds: state => {
    return state.founds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
