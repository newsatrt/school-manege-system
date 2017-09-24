import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class ClassModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: `${props.modalType == 'add' ? '新增' : '修改'}班级信息`
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const {onOk} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const {children} = this.props;
    const {getFieldDecorator, getFieldValue} = this.props.form;
    const {'class-name': courseName, level, describe} = this.props.currentClass || {};
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="课程名称"
              hasFeedback
            >
              {
                getFieldDecorator('course-name', {
                  initialValue: courseName,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="适合学生水平"
              hasFeedback
            >
              {
                getFieldDecorator('level', {
                  initialValue: level,
                })(
                  <Input type="areatext"/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="教学内容描述"
              hasFeedback
            >
              {
                getFieldDecorator('describe', {
                  initialValue: describe,
                })( <Input type="areatext"/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ClassModal);
