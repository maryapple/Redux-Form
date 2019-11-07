import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Form from './components/form'
import { createStore } from './__data__'

ReactDOM.render(
    <Provider store={createStore()}>
        <Form />
    </Provider>,
    document.getElementById('app')
)
