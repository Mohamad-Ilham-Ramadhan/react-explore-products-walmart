import React from 'react';

class Product extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {

		return (
			<nav aria-label="Product Pagination" className="d-flex justify-content-center">
				<ul class="pagination pagination-product">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
							<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li className="page-item"><p className="page-link page-gap">...</p></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							<span class="sr-only">Next</span>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Product;