import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateUsername } from "./redux/reducers/users"

const Users = () => {

  const name = useSelector((s) => s.users.name)
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="text"
        className="border-black border-2"
        onChange={(e) => {
          dispatch(updateUsername(e.target.value))
        }}
        value={name}
      />
    </div>
  )
}

export default Users
