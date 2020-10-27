import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setShowEdit,
  removeUser,
  setUsername,
  setEmail,
  setPhone,
} from "./redux/reducers/users"

const EditCard = () => {
  const dispatch = useDispatch()
  const showEdit = useSelector((s) => s.users.showEdit)
  return (
    <div
      className={`${
        showEdit === "none"
          ? "hidden"
          : "edit_card absolute z-20 flex-row border bg-gray-100 rounded-lg shadow-lg p-4 max-w-md"
      }`}
    >
      <div className="row flex justify-between py-2 items-center">
        <div className="add_photo">
          <div className="flex items-center">
            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <div className="upload_button">
              <button
                type="upload_button"
                className="py-2 px-2 border bg-white border-gray-300 rounded-md ml-4 mr-4 shadow-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 "
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="line h-px w-64 px-auto mx-8"></div>
        <div className="delete">
          <span>
            <button
              type="button"
              onClick={() => {
                const user_id = showEdit * 1
                dispatch(removeUser(user_id))
                dispatch(setShowEdit("none"))
              }}
              className="inline-flex items-center border bg-white border-gray-300 px-1 py-1 text-sm leading-5 font-medium rounded-md shadow-md text-red-500 bg-white hover:text-red-700 active:text-orange-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                  fill="currentColor"
                />
                <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                <path d="M13 9H15V17H13V9Z" fill="currentColor" />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="full_name pt-2">
        <label
          for="full_name"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Full name
        </label>
        <input
          id="full_name"
          onChange={(e) => {
            const id = showEdit * 1
            dispatch(setUsername(id, e.target.value)
            
            )
          }}
          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
      <div className="email pt-2">
        <label
          for="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          onChange={(e) => {
            const id = showEdit * 1
            dispatch(setEmail(id, e.target.value))
          }}
          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
      <div className="phone pt-2">
        <label
          for="phone"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Phone
        </label>
        <input
          id="phone"
          onChange={(e) => {
            const id = showEdit * 1
            dispatch(setPhone(id, e.target.value))
          }}
          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
      <div className="flex flex-row-reverse w-full">
        <div className="save_button pt-4">
          <button
            type="button"
            onClick={() => {
              dispatch(setShowEdit("none"))
            }}
            className="py-2 px-2 border bg-white border-gray-300 rounded-md shadow-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditCard
