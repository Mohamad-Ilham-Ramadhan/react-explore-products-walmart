import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle';
import faSmile from '@fortawesome/fontawesome-free-regular/faSmile';
import CardProduct from '../Cards/product';

class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { items, error } = this.props;

		return (
			<div className="block-product">
				<div className="container">
					<div className="row">
							{ (items.length > 0) ?
								items.map( item => 
								<div className="col-lg-3 col-sm-6">
									<CardProduct name={ item.name } largeImage={ item.largeImage }/>
								</div>
							) :
								( error !== null ) ? 
									<div className="flash">
										<FontAwesomeIcon icon={ faTimesCircle } />
										<p>{ error }</p>
									</div>
									: 
									<div className="flash">
										<FontAwesomeIcon icon={ faSmile } />
										<p>Cari aja!</p>
									</div>
							}
					</div>
				</div>
			</div>
		);
	}
}

export default Product;