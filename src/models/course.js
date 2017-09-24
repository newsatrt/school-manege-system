import {fecthCourseList, fecthCourseInfo, submitCourseInfo, deleteCourse} from '../services/course';
import {message} from 'antd'
export default {
  namespace: 'course',
  state: {
    list: [],
    currentCourse: {},
    total: 1,
    page: 1,
    searchStr: ''
  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname, query}) => {
        if (pathname === '/school-setting/course') {
          dispatch({
            type: 'fetchCourseList',
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
    *fetchCourseList ({payload}, {call, put}) {
      //根据条件查询课程列表，包含搜索内容
      const data = yield call(fecthCourseList, payload)
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

    *fetchCourseInfo ({payload}, {call, put}) {
      //根据条件查询课程信息
      const data = yield call(fecthCourseInfo, payload)
      if (data.result === 0) {
        message.success(data.message)
        yield put({
          type: 'handleCourseInfo',
          payload: data.data
        })
      } else {
        message.error(data.message)
      }
    },

    *submitCourseInfo ({payload}, {call, put}) {
      const data = yield call(submitCourseInfo, payload)
      if (data.result === 0) {
        message.success(data.message)
        yield put({
          type: 'handleCourseInfo',
          payload: {...payload, id: data.data}
        })
      } else {
        message.error(data.message)
      }
    },

    *deleteCourse ({payload}, {call, put}) {
      const data = yield call(deleteCourse, payload)
      if (data.result === 0) {
        message.success(data.message)
      } else {
        message.error(data.message)
      }
    },


  },
  reducers: {
    handleCourseList(state, action) {
      return {
        ...state,
        list: action.payload
      }
    },
    handleCourseInfo(state, action) {
      return {
        ...state,
        currentCourse: action.payload
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
