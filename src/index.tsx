import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'

import Layout from './containers/Layout'
import Chat from './containers/Chat'
import Settings from './containers/Settings'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <>
                    <Route component={Layout} />
                    <Route path='/chat' component={Chat} />
                    <Route path='/settings' component={Settings} />
                </>
            </Switch>
        </ConnectedRouter>
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
