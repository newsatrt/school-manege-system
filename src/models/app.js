import {login, userInfo, logout} from '../services/app';
import {Link, routerRedux} from 'dva/router';
export default {
  namespace: 'app',
  state: {
    loading: false,
    user: {
      name: localStorage.getItem('username') || '管理员'
    },
    token: '',
    menuPopoverVisible: false,
    collapsed: false,
    darkTheme: true,
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem('navOpenKeys') || '[]')
  },
  subscriptions: {

  },
  effects: {
    *login ({payload}, {call, put}) {
      yield put(routerRedux.push({
        pathname: '/'
      }));
    },

    *logout ({payload}, {call, put}) {
      yield put(routerRedux.push({
        pathname: '/login'
      }));
    },
    *switchSider ({
                    payload
                  }, {put}) {
      yield put({
        type: 'handleSwitchSider'
      })
    },
    *changeTheme ({
                    payload
                  }, {put}) {
      yield put({
        type: 'handleChangeTheme'
      })
    },
    *changeNavbar ({
                     payload
                   }, {put}) {
      if (document.body.clientWidth < 769) {
        yield put({type: 'showNavbar'})
      } else {
        yield put({type: 'hideNavbar'})
      }
    },
    *switchMenuPopver ({payload}, {put}) {
      yield put({
        type: 'handleSwitchMenuPopver'
      })
    }
  },
  reducers: {
    handleSwitchSider (state) {
      localStorage.setItem('antdAdminCollapsed', !state.collapsed)
      return {
        ...state,
        collapsed: !state.collapsed
      }
    },
    handleChangeTheme (state) {
      localStorage.setItem('antdAdminDarkTheme', !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    },
    showNavbar (state) {
      return {
        ...state,
        isNavbar: true
      }
    },
    hideNavbar (state) {
      return {
        ...state,
        isNavbar: false
      }
    },
    handleSwitchMenuPopver (state) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible
      }
    },
    handleNavOpenKeys (state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}
