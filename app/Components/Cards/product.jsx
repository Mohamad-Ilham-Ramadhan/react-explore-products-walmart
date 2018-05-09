import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { name, largeImage } = this.props;

		return (
			<div className="card card-product">
				<img src={ largeImage } alt="" className="card-img-top"/>
				<div className="card-body">
					<div className="card-text">
						{ name }
					</div>
				</div>
			</div>
		);
	}
}

export default Product;