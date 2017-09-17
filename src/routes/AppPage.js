import React, {PropTypes} from 'react'
import {Layout} from 'antd'
import {connect} from 'dva'
const {Sider} = Layout;
import Menus from '../components/Layout/Menus'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import styles from './AppPage.css';


function App({children, location, dispatch, app}) {
  const {user, collapsed, isNavbar, menuPopoverVisible, navOpenKeys} = app

  const headerProps = {
    user: user || {name: '管理员'},
    collapsed,
    location,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover () {
      dispatch({type: 'app/switchMenuPopver'})
    },
    logout () {
      dispatch({type: 'app/logout'})
    },
    switchSider () {
      dispatch({type: 'app/switchSider'})
    },
    changeOpenKeys (openKeys) {
      localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
      dispatch({type: 'app/handleNavOpenKeys', payload: {navOpenKeys: openKeys}})
    }
  };

  const menusProps = {
    collapsed,
    location,
    navOpenKeys,
    changeOpenKeys (openKeys) {
      localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
      dispatch({type: 'app/handleNavOpenKeys', payload: {navOpenKeys: openKeys}})
    }
  }

  return (
    <Layout className={styles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={styles.logo}>立体校园</div>
        <Menus {...menusProps} />
      </Sider>

      <Layout className={styles.main}>
        <Header {...headerProps}/>
        {/* <Bread location={location}/>*/}
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default connect(({app}) => ({app}))(App);
