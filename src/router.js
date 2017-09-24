import React from 'react'
import {Router} from 'dva/router'
import App from './routes/AppPage'

const cached = {}
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/',
      component: App,
      childRoutes: [
        {
          path: 'school-setting',
          childRoutes: [
            {
              path: 'course',
              name: 'CoursePage',
              getComponent(nextState, cb) {
                require.ensure([], (require) => {
                  registerModel(app, require('./models/course'))
                  cb(null, require('./routes/SchoolSetting/Course'))
                }, 'CoursePage')
              }
            },
            {
              path: 'class',
              name: 'ClassPage',
              getComponent(nextState, cb) {
                require.ensure([], (require) => {
                  registerModel(app, require('./models/classes'))
                  cb(null, require('./routes/SchoolSetting/Class'))
                }, 'ClassPage')
              }
            }
          ]
        },
        {
          path: 'student-manage',
          childRoutes: [
            {
              path:'import-output',
              name:'ImportOutputPage',
              getComponent(nextState, cb) {
                require.ensure([], (require) => {
                  registerModel(app, require('./models/students'))
                  cb(null, require('./routes/StudentManage/ImportOutput'))
                }, 'ImportOutputPage')
              }

            }

          ]
        }
      ]

    },
    {
      path: '/login',
      name: 'Login',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Login'));
        });
      },
    }
  ];

  return <Router history={history} routes={routes}/>
}

export default RouterConfig
