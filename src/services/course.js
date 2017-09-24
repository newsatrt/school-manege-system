import request from '../utils/request';
import config from '../utils/config';
let basePath = config.basePath;

export function fecthCourseList(values) {
  // return request(basePath + 'get-course-list', {
  //   method: 'POST',
  //   body: JSON.stringify(values)
  // });

  return {
    result: 0,
    message: 'success',
    data: [
      {
        id: 0,
        'course-name': '语文',
        level: '适合初级水平',
        describe: '这是一个适合初级水平的学科'
      },
      {
        id: 1,
        'course-name': '语文',
        level: '适合中级水平',
        describe: '这是一个适合中级水平的学科'
      },
      {
        id: 2,
        'course-name': '数学',
        level: '适合初级水平',
        describe: '这是一个适合初级水平的学科'
      },
      {
        id: 3,
        'course-name': '数学',
        level: '适合中级水平',
        describe: '这是一个适合中级水平的学科'
      }
    ]
  }
}

export function fecthCourseInfo(values) {
  return {
    result: 0,
    message: 'success',
    data: {
      id: 3,
      'course-name': '数学',
      level: '适合中级水平',
      describe: '这是一个适合中级水平的学科'
    }
  }
}

export function submitCourseInfo(values) {
  // return request(basePath + 'logout', {
  //   method: 'POST',
  //   body: JSON.stringify({})
  // });

  return {
    result: 0,
    message: 'success',
  }
}

export function deleteCourse(id) {
  return {
    result: 0,
    message: 'success',
  }
}
