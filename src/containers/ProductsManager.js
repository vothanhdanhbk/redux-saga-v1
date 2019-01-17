import React, { Component } from 'react';
import Manager from '../components/manager';
import ShowList from '../components/showList';
import { connect } from 'react-redux'

import { actFetchInfor } from "./../action/index"

class ProductsManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productList:[],
    };
  }

  componentDidMount() {
    this.props.get_infor();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productList) {
      this.setState({
          productList: nextProps.productList
      })
    }
  }



  render() {

    let {productList}=this.state;
    let showList = productList.map((product,index)=>{
      return(
      <ShowList key={index} product={product} />
      )
    })

    return (
      <div className="container-productManager">
        <Manager />
        {showList}
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    productList: state.productList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get_infor: () => {
      dispatch(actFetchInfor())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsManager)



