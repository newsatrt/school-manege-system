function jsonToObject(values) {
  return JSON.parse(values)
}

/**
 * 课件状态字符串转数字
 * @param  {String} [value='可用'] [description]
 * @return {[type]}              [description]
 */
function kjStatusStringToNumber(value = '可用') {
  let status
  switch (value) {
    case '可用':
      status = 1
      break
    case '不可用':
      status = 2
      break
    default:
      status = 1
  }
  return status
}

/**
 * 课件状态数字转字符串
 * @param  {Number} [value=1] [description]
 * @return {[type]}           [description]
 */
function kjStatusNumberToString(value = 1) {
  let status
  switch (value) {
    case 1:
      status = '可用'
      break
    case 2:
      status = '不可用'
      break
    default:
      status = 1
  }
  return status
}

function courseStatusNumberToClass(value = 1) {
  let status
  switch (value) {
    case 1:
      status = 'pending'
      break
    case 2:
      status = 'doing'
      break
    case 3:
      status = 'done'
      break
    case 4:
      status = 'cancel'
      break
    default:
      status = 'pending'
  }
  return status
}

function courseStatusNumberToColor(value = 1) {
  let color
  switch (value) {
    case 1:
      color = '#9B9B9B'
      break
    case 2:
      color = '#4A90E2'
      break
    case 3:
      color = '#50E3C2'
      break
    case 4:
      color = '#FF6969'
      break
    default:
      color = '#9B9B9B'
  }
  return color
}

export {
  jsonToObject,
  kjStatusStringToNumber,
  kjStatusNumberToString,
  courseStatusNumberToClass,
  courseStatusNumberToColor
}
