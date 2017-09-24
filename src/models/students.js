import {fecthStudentList} from '../services/students';
import {message} from 'antd'
export default {
  namespace: 'students',
  state: {

  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname, query}) => {

      })
    }
  },
  effects: {

  },
  reducers: {

  }
}
