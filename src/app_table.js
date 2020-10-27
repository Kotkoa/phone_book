import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setShowEdit, philter } from "./redux/reducers/users"

const TableName = () => {
  const dispatch = useDispatch()
  const list = useSelector((s) => s.users.list)
  const sort = useSelector((s) => s.users.sortString)
  return (
    <div className="card_table px-4 py-4 whitespace-no-wrap">
      {philter(list, sort).map((card, id) => {
        return (
          <div key={card.id} className="card">
            <div className="flex flex-row justify-between items-center">
              <div className="photo h-10 w-10">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="name ml-4">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {card.name}
                </div>
                <div className="text-sm leading-5 text-gray-500">
                  {card.email}
                </div>
              </div>
              <div className="phone px-4 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">
                  {card.phone}
                </div>
              </div>
              <div className="edit_button px-2 py-2 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <button
                  onClick={() => {
                    dispatch(setShowEdit(`${id}`))
                  }}
                  className="inline-flex items-center px-2 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TableName
