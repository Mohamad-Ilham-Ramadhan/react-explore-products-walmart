import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faStarHalf from '@fortawesome/fontawesome-free-solid/faStarHalf';

class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { name, largeImage, msrp, salePrice, customerRating, numReviews } = this.props;

		return (
			<div className="card card-product">
				<img src={ largeImage } alt="" className="card-img-top"/>
				<div className="card-body">
					<div className="card-text">
						{ this.shortenCardText(name, 60) }
					</div>
					<div className="rating">
						<span>{ this.generateStarsRating( customerRating ) }</span>
						<span>{ numReviews }</span>
					</div>
					<div className="sale-price">
						<span>{ this.priceFormat( salePrice ) }</span>
						<span className="msrp">{ this.priceFormat( msrp ) }</span>
					</div>
				</div>
			</div>
		);
	}

	shortenCardText( text, limit ) {
		if ( text.length > limit ) {
			return text.substr(0, limit) + ' ...';
		}
		return text;
	}

	generateStarsRating( customerRating ) {
		var rating = parseFloat( customerRating );
		rating = rating.toFixed(1);
		var res = [];
		
		for ( var i = 0; i < 5; i++ ) {
			if ( rating >= 1 ) {
				res.push(<FontAwesomeIcon icon={ faStar } className="star star-full"/>);
				
	        } else if( rating < 1 ) {
				if ( rating < 0.3 ) {
					res.push(<FontAwesomeIcon icon={ faStar} className="star star-empty" />);
					
	            } else if ( rating >= 0.3 && rating < 0.8 ) {
					res.push(
						<span className="fa-layers layers-star fa-fw">
							<FontAwesomeIcon icon={ faStar } className="star star-empty" />
							<FontAwesomeIcon icon={ faStarHalf } className="star star-half" />
						</span>
					);
					
	            } else if ( rating >= 0.8 ) {
					res.push( <FontAwesomeIcon icon={ faStar } lassName="star star-full"/> );
	            }
	        }
			rating--;	
	    }
		return res;
	}

	priceFormat( price ) {
		var res = '.00';
		if ( Number.isInteger( price ) ) {
			res = price.toString() + res;
			res = '$' + res;
			return res;
		}
		if ( price == undefined ) {
			price = '';
			return price
		}
		return '$' + price.toString();
	}

}

export default Product;