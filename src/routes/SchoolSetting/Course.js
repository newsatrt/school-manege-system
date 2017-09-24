import React, {Component} from 'react'
import {connect} from 'dva'
import CourseComponent from '../../components/SchoolSetting/Course'

function Course({disptach, course, loading}) {
  const props = {
    ...course,
    loading,
    fetchCourseList: (value) => {
      dispatch({
        type: 'course/fetchCourseList',
        payload: {page: course.page, searchStr: value},
      });
    },

    paginateList: (page) => {
      dispatch({
        type: 'course/fetchCourseList',
        payload: {page, searchStr: course.searchStr},
      });
    },
    submitCourseInfo: (values) => {

    },
    deleteCourse: (id) => {
      dispatch({
        type: 'course/deleteCourse',
        payload: id,
      });
    }
  }
  return (<CourseComponent {...props}/>)
}

function mapStateToProps(state) {
  return {
    course: state.course,
    loading: state.loading.models.course
  }
}
export default connect(mapStateToProps)(Course)
