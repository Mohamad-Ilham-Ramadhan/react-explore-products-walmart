import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

class PaginationProduct extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {
		const { start, totalResults, numItems, page } = this.props;

		return (
			<nav aria-label="pagination nav" className="d-flex justify-content-center">
				<ul className="pagination">
					{ this.paginate(page, totalResults, numItems, 3) }
					{/*{ this.paginate(1, 0, 8, 3) }*/}
				</ul>
			</nav>
		);
	}

	paginate = ( page, totalResults, numItems, margin ) => {
		if ( totalResults === 0 ) {
			return ( <div></div> );
		}
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
				    <li className="page-item"><a className="page-link" href="#">1</a></li>
				);
				res.push(
					<li className="page-item disabled"><div className="page-link">...</div></li>
				);
            }
            if ( i == page ) {
				res.push(
				    <li className="page-item active"><a className="page-link" href="#">{i}</a></li>
				);
            } else {
				res.push(
				    <li className="page-item"><a className="page-link" href="#">{i}</a></li>
				); 	
            }
			if ( i == marginRight && i < lastPage ) {
				res.push(
				    <li className="page-item disabled"><div className="page-link">...</div></li>
				);
				res.push(
				    <li className="page-item"><a className="page-link" href="#">{lastPage}</a></li>
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

export default PaginationProduct ;