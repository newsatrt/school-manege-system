import dva from 'dva';
import {browserHistory} from 'dva/router';
import createLoading from 'dva-loading';
import {message} from 'antd';

import './index.html';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒

const app = dva({
  history: browserHistory,
  onError(e) {
    console.log('出错了');
    message.error(e.message, ERROR_MSG_DURATION);
  },
});


app.use(createLoading());
app.model(require('./models/app'));
app.router(require('./router'));
app.start('#root');
