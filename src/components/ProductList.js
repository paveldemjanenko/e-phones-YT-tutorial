import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='our' title='products'/>

                        <div className='row'>
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map( product => { // product => is callback function that will say what to do with each product in arrey
                                    return <Product key={product.id} product={product}/> // product={product} return each property of one product
                                });
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductList;