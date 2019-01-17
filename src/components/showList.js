import React, { Component } from 'react';

class ShowList extends Component {
    render() {
        let {product}=this.props;
        return (

            <div className="showlist" >
             
                <div className="showlist-element">
                    <div>
                        {product.name}
                    </div>
                    <div>
                        {product.descript}
                    </div>
                    <div>
                        <button>edit</button>&nbsp;&nbsp;
                        <button>delete</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default ShowList;