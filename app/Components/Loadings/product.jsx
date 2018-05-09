import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div className="loading loading-product">
				<FontAwesomeIcon icon={ faSpinner } spin/>
			</div>
		);
	}
}

export default Product;