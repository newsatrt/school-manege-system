import request from '../utils/request';
import config from '../utils/config';
let basePath = config.basePath;

export function login(values) {
  values.role = localStorage.getItem('role');
  console.log('login',values);
  return request(basePath + 'login', {
    method: 'POST',
    body: JSON.stringify(values)
  });
}

export function logout(values) {
  return request(basePath + 'logout', {
    method: 'POST',
    body: JSON.stringify({})
  });
}

export function changePassword(values) {
  return request(basePath + 'account/password/update', {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
