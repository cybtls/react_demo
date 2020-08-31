import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import TodoList from "./demo09"
import { Provider } from 'react-redux'
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>,
  document.getElementById("root")
)
