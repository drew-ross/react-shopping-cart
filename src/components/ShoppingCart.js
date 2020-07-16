import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {

	const { cart } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => {
				const key = `${item.id + Math.random(7)}`
				return <Item key={key} {...item} />
			}			
			)}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
