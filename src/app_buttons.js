import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSortString, setShowEdit, addUser } from "./redux/reducers/users"

const Buttons = () => {
  const dispatch = useDispatch()
  const sort = useSelector((s) => s.users.sortString)
  const list = useSelector((s) => s.users.list)

  return (
    <div className="flex items-center justify-between py-2 px-4">
      <button
        type="show_all_button"
        className={`inline-flex items-center px-2 py-2
        ${sort === "" ? "text-gray-400" : "text-gray-800"}
        text-sm leading-5 font-medium rounded-md bg-white hover:text-blue-600 transition duration-150 ease-in-out`}
        onClick={() => {
          dispatch(setSortString(""))
        }}
      >
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
              fill="currentColor"
            />
            <path
              d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
              fill="currentColor"
            />
            <path d="M22 11H16V13H22V11Z" fill="currentColor" />
            <path d="M16 15H22V17H16V15Z" fill="currentColor" />
            <path d="M22 7H16V9H22V7Z" fill="currentColor" />
          </svg>
        </span>
      </button>
      <div className="">Contacts</div>
      <button
        type="add_button"
        onClick={() => {
          const user_id =
            typeof list[list.length - 1] === "undefined"
              ? -1
              : list[list.length - 1].id
          dispatch(addUser(user_id + 1))
          dispatch(setShowEdit(`${user_id + 1}`))
        }}
        className="inline-flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
      >
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
              fill="currentColor"
            />
            <path
              d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
              fill="currentColor"
            />
            <path
              d="M18 7H20V9H22V11H20V13H18V11H16V9H18V7Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default Buttons
