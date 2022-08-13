// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import './assets/styles/reset.css'
// import 'swiper/dist/css/swiper.min.css'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from '@/store'
// import './assets/font/iconfont.css'



// ReactDOM.render(
//   <Provider store={store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './assets/font/iconfont.css'
import './assets/styles/reset.css'
import 'swiper/dist/css/swiper.min.css'
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)