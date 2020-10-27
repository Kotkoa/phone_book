const UPDATE_USERNAME = "UPDATE_USERNAME"
const SET_SHOW_EDIT = "SET_SHOW_EDIT"
const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"
const SET_USERNAME = "SET_USERNAME"
const SET_EMAIL = "SET_EMAIL"
const SET_PHONE = "SET_PHONE"
const SET_PHILTER = "SET_PHILTER"
const SET_SORTSTRING = "SET_SORTSTRING"

const initialState = {
  list: [],
  showEdit: "none",
  sortString: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {
        ...state,
        name: action.name,
      }
    }

    case SET_SHOW_EDIT:
      return { ...state, showEdit: action.text }

    case ADD_USER:
      if (state.showEdit !== "none") {
        return {
          ...state,
        }
      }
      return {
        ...state,
        list: [...state.list, action.newUser],
        showEdit: `${action.id}`,
      }

    case REMOVE_USER: {
      const filtered = state.list.filter((it, id) => id !== action.ind)
      return {
        ...state,
        list: filtered,
      }
    }

    case SET_USERNAME:
      const newName = state.list.map((it, id) =>
        id === action.ind ? { ...it, name: action.name } : it
      )
      return { ...state, list: newName }

    case SET_EMAIL:
      const newEmail = state.list.map((it, id) =>
        id === action.ind ? { ...it, email: action.email } : it
      )
      return { ...state, list: newEmail }

    case SET_PHONE:
      const newPhone = state.list.map((it, id) =>
        id === action.ind ? { ...it, phone: action.phone } : it
      )
      return { ...state, list: newPhone }

    case SET_PHILTER:
      return { ...state, philter: action.philter }

    case SET_SORTSTRING:
      return { ...state, sortString: action.str }

    default:
      return state
  }
}

export function addUser(id) {
  const newUser = {
    id,
    name: "",
    email: "",
    phone: "",
  }
  return { type: ADD_USER, newUser, id }
}

export function updateUsername(name) {
  return { type: UPDATE_USERNAME, name }
}

export function setShowEdit(text) {
  return { type: SET_SHOW_EDIT, text }
}

export function removeUser(ind) {
  return { type: REMOVE_USER, ind }
}

export function setUsername(ind, name) {
  return { type: SET_USERNAME, ind, name }
}

export function setEmail(ind, email) {
  return { type: SET_EMAIL, ind, email }
}

export function setPhone(ind, phone) {
  return { type: SET_PHONE, ind, phone }
}

export function philter(arr, sortstr) {
  if (sortstr === "") {
    return arr
  }
  return arr.filter(
    (it, id, arra) => it.name.indexOf(sortstr) !== -1
  )
}

export function setSortString(str) {
  return { type: SET_SORTSTRING, str }
}
