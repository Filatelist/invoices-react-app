import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import InvoicesService from './services/service';
import {ServiceProvider} from './components/service-context';
import store from './store';

const invoicesService = new InvoicesService();

ReactDOM.render(
    <Provider store={store}>
        <ServiceProvider value={invoicesService}>
            <App />
        </ServiceProvider>
    </Provider>
    , document.getElementById('root'));
