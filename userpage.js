import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as fetchProductsAction from './services';




class Users extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const {fetchProducts} = this.props;
        fetchProducts("yogesh");
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        
       
        if(!this.shouldComponentRender()) return <LoadingSpinner />

        return (
            <div className='product-list-wrapper'>
                {this.props.error && <span className='product-list-error'>{this.props.error}</span>}
                <table class="tachyons-tables">
               
               {this.props.products && this.props.products.map((product, i) => (
                  <tr>
          <td key={i}>{product.title}</td></tr>
        ))} 
             </table>
            </div>
        )
    }
}


const mapStateToProps = state =>  ({
    error: state.error,
    products: state.products,
    pending: state.pending
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: (name) => dispatch(fetchProductsAction.fetchProducts(name))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users );
