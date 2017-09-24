import request from '../utils/request';
import config from '../utils/config';
let basePath = config.basePath;

export function fecthClassList(values) {
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
        'create-time': '2017-08-09 11:22:12',
        'class-name': '英语初级班',
        'head-teacher': '韩梅梅',
        'head-teacher-tel': 18009090121,
        'courses': '语文 数学',
        'count': 100
      }
    ]
  }
}

export function fecthClassInfo(values) {
  return {
    result: 0,
    message: 'success',
    data: {
      id: 0,
      'create-time': '2017-08-09 11:22:12',
      'class-name': '英语初级班',
      'head-teacher': '韩梅梅',
      'head-teacher-tel': 18009090121,
      'courses': '语文 数学',
      'count': 100
    }
  }
}

export function submitClassInfo(values) {
  // return request(basePath + 'logout', {
  //   method: 'POST',
  //   body: JSON.stringify({})
  // });

  return {
    result: 0,
    message: 'success',
  }
}

export function deleteClass(id) {
  return {
    result: 0,
    message: 'success',
  }
}
