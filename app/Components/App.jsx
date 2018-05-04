import React from 'react';
import Navbar from './Navbars/main';
import axios from 'axios';

const path = require('path');

const hn = 'http://hn.algolia.com/api/v1/search?query=';
const APIURI = 'http://api.walmartlabs.com/v1/search?';
const APIKey = 'kdj65hdseuktgqcq4rbvjjqf';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			results: null,
			products: [],
			searchQuery: 'laptop',
			numItems: 6
		}
	}

	render() {
		const { results, products, searchQuery, numItems } = this.state;

		return (
			<Navbar
				results={results}
				products={products}
				searchQuery={searchQuery}
				numItems={ numItems }

				fetchProducts={this.fetchProducts}
			/>
		)
	}

	fetchProducts = ( searchQuery, numItems, event ) => {
		const endPoint = `${APIURI}apikey=${APIKey}&query=${searchQuery}`;
		const hnEndPoint = `${hn}${searchQuery}`;

		if ( document.location.port != "" ) {
			axios.get( 'http://localhost/react_projects/react-explore-products-walmart/proxy.php?search='+encodeURIComponent(endPoint))
			.then( res => { console.log( res.data ) })
			.catch( err => { console.log( err) })

			return;
		}
		
		axios.get( document.location.href+'proxy.php?search='+encodeURIComponent(endPoint))
		.then( res => { console.log( res ) })
		.catch( err => { console.log( err) })
	}
}

export default App;