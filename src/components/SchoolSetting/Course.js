import React from 'react'
import {Table, Pagination, Popconfirm, Button, Input} from 'antd'
import styles from './Course.css'
import {PAGE_SIZE} from '../../constants'
import CourseModal from './CourseModal'

const Search = Input.Search;

function CourseList({list: dataSource, loading, total, page: current,
                      deleteCourse, fetchCourseList, paginateList,submitCourseInfo}) {
  const columns = [
    {
      title: '课程名称',
      dataIndex: 'course-name',
      key: 'course-name',
      className: "column"
    },
    {
      title: '适合学生水平',
      dataIndex: 'level',
      key: 'level',
      className: "column"
    },
    {
      title: '教学内容描述',
      dataIndex: 'describe',
      key: 'describe',
      className: "column"
    },
    {
      title: '操作',
      key: 'operation',
      className: "column",
      render: (text, record) => (
        <span className={styles.operation}>
          <CourseModal currentCourse={record} modalType="edit"
                       onOk={submitCourseInfo}>
            <a>修改</a>
          </CourseModal>
          <hr className="ant-divider"/>
          <Popconfirm title="你确定要删除该课程吗?" onConfirm={deleteCourse.bind(null, record.id)}>
            <a href="">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div className={styles.operation}>
        <CourseModal currentCourse={{}} modalType="add"
                     onOk={submitCourseInfo.bind(null, {modalType: 'add'})}>
          <Button type="primary">创建学科</Button>
        </CourseModal>

        <Search
          placeholder="可根据名称进行查找"
          style={{width: 300, float: 'right'}}
          onSearch={value => fetchCourseList.bind(this, value)}
        />
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
        bordered
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        onChange={value => paginateList.bind(this, value)}
      />
    </div>
  );
}

export default CourseList;
