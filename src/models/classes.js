import {fecthClassList, fecthClassInfo, submitClassInfo, deleteClass} from '../services/classes';
import {message} from 'antd'
export default {
  namespace: 'classes',
  state: {
    list: [],
    currentClass: {},
    total: 1,
    page: 1,
    searchStr: ''
  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname, query}) => {
        if (pathname === '/school-setting/class') {
          dispatch({
            type: 'fetchClassList',
            payload: {
              page: 1,
              searchStr: ''
            }
          })
        }
      })
    }
  },
  effects: {
    *fetchClassList ({payload}, {call, put}) {
      const data = yield call(fecthClassList, payload)
      if (data.result === 0) {
        message.success(data.message)
        yield put({
          type: 'handleStateChange',
          payload: {
            list: data.data,
            searchStr: payload.searchStr
          }
        })
      } else {
        message.error(data.message)
      }
    },

    *fetchClassInfo ({payload}, {call, put}) {
      const data = yield call(fetchClassInfo, payload)
      if (data.result === 0) {
        message.success(data.message)
        yield put({
          type: 'handleClassInfo',
          payload: data.data
        })
      } else {
        message.error(data.message)
      }
    },

    *submitClassInfo ({payload}, {call, put}) {
      const data = yield call(submitClassInfo, payload)
      if (data.result === 0) {
        message.success(data.message)
        yield put({
          type: 'handleClassInfo',
          payload: {...payload, id: data.data}
        })
      } else {
        message.error(data.message)
      }
    },

    *deleteClass ({payload}, {call, put}) {
      const data = yield call(deleteClass, payload)
      if (data.result === 0) {
        message.success(data.message)
      } else {
        message.error(data.message)
      }
    },


  },
  reducers: {
    handleClassList(state, action) {
      return {
        ...state,
        list: action.payload
      }
    },
    handleClassInfo(state, action) {
      return {
        ...state,
        currentClass: action.payload
      }
    },
    handleStateChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    }

  }
}
