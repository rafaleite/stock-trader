import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('stocks.json')
    .then(response => response.json())
    .then(data => {
      if(data) {
        const stocks = data.stocks
        const founds = data.founds
        const stocksPortfolio = data.stockPortfolio

        const portfolio = {
          stocksPortfolio,
          founds
        }

        commit('SET_PORTFOLIO', portfolio)
        commit('SET_STOCKS', stocks)
      }
    })
}
