import React from 'react'
import {Table, Pagination, Popconfirm, Button, Input} from 'antd'
import styles from './Class.css'
import {PAGE_SIZE} from '../../constants'
import ClassModal from './ClassModal'

const Search = Input.Search;

function CLassList({list: dataSource, loading, total, page: current,
                      deleteClass, fetchClassList, paginateList,submitClassInfo}) {
  const columns = [
    {
      title: '创建时间',
      dataIndex: 'create-time',
      key: 'create-time',
      className: "column"
    },
    {
      title: '班级名称',
      dataIndex: 'class-name',
      key: 'class-name',
      className: "column"
    },
    {
      title: '班主任',
      dataIndex: 'head-teacher',
      key: 'head-teacher',
      className: "column"
    },
    {
      title: '班主任电话',
      dataIndex: 'head-teacher-tel',
      key: 'head-teacher-tel',
      className: "column"
    },
    {
      title: '班级课程',
      dataIndex: 'courses',
      key: 'courses',
      className: "column"
    },
    {
      title: '人数',
      dataIndex: 'count',
      key: 'count',
      className: "column"
    },
    {
      title: '操作',
      key: 'operation',
      className: "column",
      render: (text, record) => (
        <span className={styles.operation}>
          <ClassModal currentCourse={record} modalType="edit"
                       onOk={submitClassInfo}>
            <a>修改</a>
          </ClassModal>
          <hr className="ant-divider"/>
          <Popconfirm title="你确定要删除该班级吗?" onConfirm={deleteClass.bind(null, record.id)}>
            <a href="">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div className={styles.operation}>
        <ClassModal currentCourse={{}} modalType="add"
                     onOk={submitClassInfo.bind(null, {modalType: 'add'})}>
          <Button type="primary">创建班级</Button>
        </ClassModal>

        <Search
          placeholder="可根据名称进行查找"
          style={{width: 300, float: 'right'}}
          onSearch={value => fetchClassList.bind(this, value)}
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

export default CLassList;
