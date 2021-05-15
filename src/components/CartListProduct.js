import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartListProduct extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ `${thumbnail}` } alt="..." />
        <p>{ price }</p>
      </div>
    );
  }
}

CartListProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
