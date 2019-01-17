import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actcReateInfor } from "./../action/index"
class Manager extends Component {

  addNewInfor=()=>{
      let data={
        name:"vo thanh danh",
        descript:" this is my discriptions"
      }
      this.props.create_infor(data);
  }

  render() {
    return (
      <div className="manager">
        <span>Name : </span>
        <input type="text" placeholder="name..." />&nbsp;&nbsp;
        <span> Description : </span>
        <input type="text" placeholder="description..." />&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{this.addNewInfor()}}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create_infor: (data) => {
      dispatch(actcReateInfor(data))
    },
  }
}

export default connect(null, mapDispatchToProps)(Manager)
