import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

class Product extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {

		return (
			<nav aria-label="Page navigation example" className="d-flex justify-content-center">
				<ul className="pagination">
					{ this.paginate(2, 211, 6, 2) }
				</ul>
			</nav>
		);
	}

	paginate = ( page, totalResults, numItems, margin ) => {
		var lastPage = Math.ceil(totalResults / numItems);
		var marginRight = page + margin;
		var marginLeft = page - margin;
		var res = [];

		if ( page > 1 ) {
			res.push( 	
				<li className="page-item">
					<a className="page-link" href="#" aria-label="Previous">
						<span aria-hidden="true"><FontAwesomeIcon icon={faAngleLeft} /></span>
						<span className="sr-only"></span>
					</a>
				</li>
			);
        }
		for (var i = marginLeft; i <= marginRight ; i++) {
			if ( i < 1 ) {
				continue;
			}
			if ( i == marginLeft && i > 1 ) {
				res.push(
				    <li class="page-item"><a class="page-link" href="#">1</a></li>
				);
				res.push(
					<li class="page-item disabled"><div className="page-link">...</div></li>
				);
            }
            if ( i == page ) {
				res.push(
				    <li class="page-item active"><a class="page-link" href="#">{i}</a></li>
				);
				continue;
            }
			res.push(
			    <li class="page-item"><a class="page-link" href="#">{i}</a></li>
			);
			if ( i == marginRight && i < lastPage ) {
				res.push(
				    <li class="page-item disabled"><div className="page-link">...</div></li>
				);
				res.push(
				    <li class="page-item"><a class="page-link" href="#">{lastPage}</a></li>
				);
            } 
			if ( i >= lastPage ) {
				break;
			}
		}
		if ( page < lastPage ) {
			res.push( 	
				<li className="page-item">
					<a className="page-link" href="#" aria-label="Previous">
						<span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span>
						<span className="sr-only"></span>
					</a>
				</li>
			);
        }
		return res;
	}
	
}

export default Product;