import React from 'react'
import {connect} from 'dva'
import ClassComponent from '../../components/SchoolSetting/Class'

function Class({dispatch, classes, loading}) {
  const props = {
    ...classes,
    loading,
    fetchClassList: (value) => {
      dispatch({
        type: 'classes/fetchClassList',
        payload: {page: classes.page, searchStr: value},
      });
    },

    paginateList: (page) => {
      dispatch({
        type: 'classes/fetchClassList',
        payload: {page, searchStr: classes.searchStr},
      });
    },
    submitClassInfo: (values) => {

    },
    deleteClass: (id) => {
      dispatch({
        type: 'classes/deleteClass',
        payload: id,
      });
    }
  }
  return (<ClassComponent {...props}/>)
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
    loading: state.loading.models.classes
  }
}
export default connect(mapStateToProps)(Class)
