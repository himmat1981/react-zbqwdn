import React, { Component } from 'react';

import { connect } from 'react-redux';

import 'tachyons'
import * as fetchProductsAction from './services';


class Users extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const {fetchProducts, myProducts } = this.props;
        fetchProducts();
        myProducts();
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
                <table class="tachyons-tables dt">
                <thead>
                    <th>Name</th>
                     <th>Email</th>
                      <th>Phone</th>
                       <th>Website</th>
                </thead>
               <tbody>
               <tr> {this.props.mysuccess } </tr>
               {this.props.products && this.props.products.map((product, i) => (
                  <tr>
          <td key={i}>{product.name}</td>
           <td key={i}>{product.email}</td>
            <td key={i}>{product.phone}</td>
             <td key={i}>{product.website}</td>
           <td key={i}>Delete</td>
          
          </tr>
          
        ))} </tbody>

<tbody>
               {this.props.myproductslist && this.props.myproductslist.map((product, i) => (
                  <tr>
          <td key={i}>{product.name}</td>
           <td key={i}>{product.email}</td>
            <td key={i}>{product.phone}</td>
             <td key={i}>{product.website}</td>
           <td key={i}>Delete</td>
          
          </tr>
          
        ))} </tbody>

             </table>
            </div>
        )
    }
}


const mapStateToProps = state =>  ({
    error: state.error,
    products: state.products,
    myproductslist: state.products,
    pending: state.pending,
    mysuccess: state.success
})

const mapDispatchToProps = dispatch => ({
  
  myProducts: (name) => dispatch(fetchProductsAction.fetchProducts(name)),
  fetchProducts: (name) => dispatch(fetchProductsAction.fetchProducts(name))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users );
