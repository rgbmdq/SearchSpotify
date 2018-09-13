import style from './index.scss'
import React from 'react'
import store from './store'
import theme from './theme'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-css-themr'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Search from './Components/Search'
import Album from './Components/Album'
import ViewComment from './Components/ViewComment/ViewComment';
const __store = store()
const __init_el = document.createElement('div')
__init_el.id = style.reactinit

ReactDOM.render(
  <Provider store={__store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Search />
          <Route path='/' component={Album} />
          <Route path='/:id' component={ViewComment} />
        </div>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.body.appendChild(__init_el)
)