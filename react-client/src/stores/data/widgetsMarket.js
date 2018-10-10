export default [
  {
    id: '0',
    component: 'core_components/Orders/Orders.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Orders asks',
    description: 'People want to sell coins',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Orders/Orders.js',
    data: {type: 'asks'}
  },
  {
    id: '1',
    component: 'core_components/Orders/Orders.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Orders bids',
    description: 'People want to buy coins',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Orders/Orders.js',
    data: {type: 'bids'}
  },
  {
    id: '2',
    component: 'core_components/Stocks/Stocks.js',
    img: 'core_components/Stocks/Stocks.png',
    header: 'Stocks',
    description: 'List of cryptostocks',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Stocks/Stocks.js',
    data: {}
  },
  {
    id: '3',
    component: 'core_components/Pairs/Pairs.js',
    img: 'core_components/Pairs/Pairs.png',
    header: 'Pairs',
    description: 'Pairs of cryptostock',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Pairs/Pairs.js',
    data: {}
  },
  {
    id: '4',
    component: 'core_components/ReactStockcharts/HeikinAshi',
    img: 'core_components/ReactStockcharts/HeikinAshi/HeikinAshi.png',
    header: 'OHLCV',
    description: 'Open-High-Low-Close-Value candles chart',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/ReactStockcharts/HeikinAshi/index.js',
    data: {}
  },
  {
    id: '5',
    component: 'core_components/MyTrades/MyTrades.js',
    img: 'core_components/Orders/Orders.png',
    header: 'My trades',
    description: 'History of my trades',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/MyTrades/MyTrades.js',
    data: {}
  },
  {
    id: '6',
    component: 'core_components/OpenOrders/OpenOrders.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Open orders',
    description: 'My open orders',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/OpenOrders/OpenOrders.js',
    data: {}
  },
  {
    id: '7',
    component: 'core_components/Trades/Trades.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Trades',
    description: 'People trades',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Trades/Trades.js',
    data: {}
  },
  {
    id: '8',
    component: 'core_components/CreateOrder/CreateOrder.js',
    img: 'core_components/CreateOrder/Buy.png',
    header: 'Limit buy',
    description: 'Place order to buy',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/CreateOrder/CreateOrder.js',
    data: {type: 'buy'}
  },
  {
    id: '9',
    component: 'core_components/CreateOrder/CreateOrder.js',
    img: 'core_components/CreateOrder/Sell.png',
    header: 'Limit sell',
    description: 'Place order to buy',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/CreateOrder/CreateOrder.js',
    data: {type: 'sell'}
  },
  {
    id: '10',
    component: 'core_components/Balance/Balance.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Total balance',
    description: 'Table view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Balance/Balance.js',
    data: {total: true}
  },
  {
    id: '11',
    component: 'core_components/Balance/Balance.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Balance',
    description: 'Table view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Balance/Balance.js',
    data: {total: false}
  },
  {
    id: '12',
    component: 'core_components/BalancePie/BalancePie.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Total balance',
    description: 'Pie chart view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/BalancePie/BalancePie.js',
    data: {total: true}
  },
  {
    id: '13',
    component: 'core_components/BalancePie/BalancePie.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Balance',
    description: 'Pie chart view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/BalancePie/BalancePie.js',
    data: {total: false}
  },
  {
    id: '14',
    component: 'core_components/BalanceHistoryArea/BalanceHistoryArea.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Total balance history',
    description: 'Stacked area chart view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/BalanceHistoryArea/BalanceHistoryArea.js',
    data: {total: true}
  },
  {
    id: '15',
    component: 'core_components/BalanceHistoryArea/BalanceHistoryArea.js',
    img: 'core_components/Orders/Orders.png',
    header: 'Balance history',
    description: 'Stacked area chart view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/BalanceHistoryArea/BalanceHistoryArea.js',
    data: {total: false}
  },
]
