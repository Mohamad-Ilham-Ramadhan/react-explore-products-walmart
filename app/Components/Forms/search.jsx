import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class Search extends React.Component {
	constructor(props) {
		super(props) 
	}

	render() {
		const { fetchProducts, searchQuery, numItems } = this.props;

		return (
			<form className="form-search mx-auto" onSubmit={this.preventSubmit}>
				<div className="form-group form-group-search mb-0">
					<input type="text" className="form-control input-search" placeholder="Search products..."/>
					<button className="btn btn-primary btn-search" onClick={() => fetchProducts(searchQuery, numItems) }><FontAwesomeIcon icon="search"/></button>
				</div>
			</form>
		);
	}

	preventSubmit = (e) => {
		e.preventDefault();
	}
}

export default Search;