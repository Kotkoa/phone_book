import React from "react"
import { Provider } from "react-redux"
import store from "./redux"
import Buttons from "./app_buttons"
import InputName from "./app_input"
import TableName from "./app_table"
import EditCard from "./app_edit"

import "./tailwind.output.css"

function App() {
  return (
    <Provider store={store}>
      <div className="body w-full h-screen bg-gray-100 pt-6">
        <div className="max-w-lg mx-auto flex-row px-4 py-0 bg-white rounded-md border border-gray-300">
          <Buttons />
          <EditCard />
          <InputName />
          <TableName />
        </div>
      </div>
    </Provider>
  )
}

export default App
