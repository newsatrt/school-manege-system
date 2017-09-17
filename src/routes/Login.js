import React from 'react';
import {connect} from 'dva';
import {Button, Row, Form, Input, Icon, Checkbox} from 'antd';
import styles from './Login.css';

const FormItem = Form.Item;

function Login({
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) {

  function onOk(data) {
    dispatch({type: 'app/login', payload: data});
  }

  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onOk(values)
    })
  }

  return (
    <div className={styles.normal}>
      <main className={styles.content}>
        <h1>立体校园</h1>
        <h3>让管理更简单</h3>
        <Form>
          <FormItem>
            <div className={styles.title}>
              登录
            </div>
          </FormItem>
          <FormItem>
            {getFieldDecorator('login_name', {
              rules: [
                {
                  required: true,
                  message: 'username'
                }
              ]
            })(<Input size='large' prefix={<Icon type="user" style={{fontSize: 17}}/>} placeholder='用户名'/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'password'
                }
              ]
            })(<Input size='large' type='password' prefix={<Icon type="lock" style={{fontSize: 17}}/>}
                      placeholder='密码'/>)}
          </FormItem>
          <FormItem style={{marginBottom: 8}}>
            {getFieldDecorator('auto_login', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                记住密码
              </Checkbox>
            )}
          </FormItem>
          <Row>
            <Button type='default' size='large' onClick={handleOk}>
              登录
            </Button>
          </Row>
          <Row className={styles.message}>

          </Row>
        </Form>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default connect(({app}) => ({app}))(Form.create()(Login));
