import { observable, action, computed } from 'mobx'
import axios from 'axios'
import DashboardsStore from './DashboardsStore'
import Alert from 'react-s-alert'

class OpenOrdersStore {
  constructor() {
    const start = () => {
      this.fetchOpenOrders()
    }
    start()
    setInterval(() => {
      if (this.counter > 0) start()
    }, 5000)
  }
  @computed get stock() {return DashboardsStore.stock }
  @computed get pair() {return DashboardsStore.pair }


  @observable openOrders = {}
  @action fetchOpenOrders(){
    axios.get(`http://localhost:8051/openOrders/${this.stock}/${this.pair}`)
    .then((response) => {
      this.openOrders = response.data
    })
    .catch((error) => { console.log(error) })
  }
  @action cancelOrder(id, symbol, _id, stock) {
    var cancelMsg = stock + ': '+ symbol + ' canceling #' + id
    Alert.warning(cancelMsg, {
      position: 'bottom-right',
      effect: 'scale',
      beep: false,
      timeout: 'none'
    })
    axios.post(`http://localhost:8051/cancelOrder/`, {
      id: id,
      _id: _id,
      symbol: symbol,
      stock: stock
    }).then((response) => {
      Alert.success('orderCanceled', {
        position: 'bottom-right',
        effect: 'scale',
        beep: false,
        timeout: 'none'
      })
    }).catch((error) => {
      Alert.error(error.response.data.error, {
        position: 'bottom-right',
        effect: 'scale',
        beep: false,
        timeout: 'none'
      })
    })
  }
  counter = 0
  @action count(n) {
    this.counter += n
  }
}


const store = window.OpenOrdersStore = new OpenOrdersStore()

export default store
