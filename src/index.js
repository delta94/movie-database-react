import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import storeFactory from './store'

import Home from './containers/Home'
import MovieDetails from './containers/MovieDetails'
import Header from './components/Header'

// import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
        <div className="container">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path={'/movie/:id'} component={MovieDetails} />
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
)
// registerServiceWorker()