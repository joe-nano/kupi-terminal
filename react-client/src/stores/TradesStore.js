import { observable, action, computed } from 'mobx'
import axios from 'axios'
import _ from 'lodash'
import uuidv1 from 'uuid/v1'
import DashboardsStore from './DashboardsStore'

class TradesStore {
  constructor() {
    const start = () => {
      this.fetchTrades()
    }
    start()
    setInterval(() => {
      if (this.counter > 0) start()
    }, 5000)
  }
  @computed get stock() {return DashboardsStore.stock }
  @computed get stockLowerCase() {return DashboardsStore.stockLowerCase }
  @computed get pair() {return DashboardsStore.pair }
  @observable trades = []

  @action fetchTrades(){
    axios.get(`http://api.kupi.network/${this.stockLowerCase}/trades/${this.pair}`)
    .then((response) => {
      var trades = response.data
      trades.data.buy.map(function(trade){
        return trade.uuid = uuidv1()
      })
      trades.data.sell.map(function(trade){
        return trade.uuid = uuidv1()
      })
      var data = [...trades.data.buy, ...trades.data.sell]
      this.trades = _.orderBy(data, ['timestamp'], ['desc'])
    })
    .catch(() => {
      this.trades = []
    })
  }

  counter = 0
  @action count(n) {
    this.counter += n
  }
}

const store = window.TradesStore = new TradesStore()

export default store
