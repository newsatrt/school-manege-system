import React from 'react'
import { Router } from 'dva/router'
import App from './routes/AppPage'

const cached = {}
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

function RouterConfig({ history, app }) {
  // const routes = [
  //   {
  //     path: '/',
  //     name: 'AppPage',
  //     getComponent(nextState, cb) {
  //       require.ensure([], (require) => {
  //         cb(null, require('./routes/AppPage'))
  //       }, 'AppPage')
  //     },
  //     childRoutes: [
  //       {
  //         path: 'daily',
  //         name: 'DailyPage',
  //         getComponent(nextState, cb) {
  //           require.ensure([], (require) => {
  //             registerModel(app, require('./models/syllabus'))
  //             cb(null, require('./routes/SyllabusDaily'))
  //           }, 'DailyPage')
  //         }
  //       },
  //       {
  //         path: 'daily-student',
  //         name: 'StudentDailyPage',
  //         getComponent(nextState, cb) {
  //           require.ensure([], (require) => {
  //             registerModel(app, require('./models/syllabus'))
  //             cb(null, require('./routes/StudentSyllabusDaily'))
  //           }, 'StudentDailyPage')
  //         }
  //       },
  //       {
  //         path: 'month',
  //         name: 'MonthPage',
  //         getComponent(nextState, cb) {
  //           require.ensure([], (require) => {
  //             registerModel(app, require('./models/syllabus'))
  //             cb(null, require('./routes/SyllabusMonth'))
  //           }, 'MonthPage')
  //         }
  //       },
  //       {
  //         path: 'class-detail',
  //         name: 'ClassDetailPage',
  //         getComponent(nextState, cb) {
  //           require.ensure([], (require) => {
  //             registerModel(app, require('./models/syllabus'))
  //             cb(null, require('./routes/ClassDetail'))
  //           }, 'ClassDetailPage')
  //         }
  //       },
  //       {
  //         path: 'user',
  //         name: 'UserPage',
  //         getComponent(nextState, cb) {
  //           require.ensure([], (require) => {
  //             registerModel(app, require('./models/user'))
  //             cb(null, require('./routes/MyCenter'))
  //           }, 'UserPage')
  //         }
  //       },
  //       // {
  //       //   path: 'eq-test',
  //       //   name: 'EqTestPage',
  //       //   getComponent(nextState, cb) {
  //       //     require.ensure([], (require) => {
  //       //       registerModel(app, require('./models/eqtest'))
  //       //       cb(null, require('./routes/EqTest'))
  //       //     }, 'EqTestPage')
  //       //   }
  //       // }
  //     ]
  //   },
  //   {
  //     path: '/login',
  //     name: 'LoginPage',
  //     getComponent(nextState, cb) {
  //       require.ensure([], (require) => {
  //         cb(null, require('./routes/Login'))
  //       }, 'LoginPage')
  //     }
  //   }
  // ]

  const routes = [
    {
      path: '/',
      component: App,
      childRoutes: [
        {
          path: 'school-setting',
          childRoutes:
            [

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

  return <Router history={history} routes={routes} />
}

export default RouterConfig
