import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const setStat = (type) => {
    store.dispatch({
      type: type
    })
  }

  return (
    <div>
      <button onClick={() => setStat('GOOD')}>good</button> 
      <button onClick={() => setStat('OK')}>ok</button> 
      <button onClick={() => setStat('BAD')}>bad</button>
      <button onClick={() => setStat('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
