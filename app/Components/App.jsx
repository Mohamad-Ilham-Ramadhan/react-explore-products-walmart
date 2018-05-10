import React from 'react';
import Navbar from './Navbars/main';
import BlockProduct from './Blocks/product';
import PaginationProduct from './Paginations/product';

import axios from 'axios';

const path = require('path');

const hn = 'http://hn.algolia.com/api/v1/search?query=';
const APIURI = 'http://api.walmartlabs.com/v1/search?';
const APIKey = 'kdj65hdseuktgqcq4rbvjjqf';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			totalResults: null,
			items: [],
			searchKey: '',
			numItems: 8,
			isLoading: false,
			error: null,
		}
	}

	render() {
		const { totalResults, items, searchKey, numItems, error, isLoading } = this.state;

		return (
			<div>
				<Navbar
					totalResults={ totalResults }
					searchKey={ searchKey }
					numItems={ numItems }

					fetchProducts={ this.fetchProducts }
					updateSearchKeyValue={ this.updateSearchKeyValue }
				/>
				<BlockProduct 
					items={ items }
					error={ error }
					isLoading={ isLoading }
				/>
				<PaginationProduct />
			</div>
		)
	}

	fetchProducts = ( ) => {
		this.setState( { isLoading: true } );

		const endPoint = `${APIURI}apikey=${APIKey}&query=${this.state.searchKey}&numItems=${this.state.numItems}`;

		( document.location.port != "" ) ?
			axios.get( 'http://localhost/react_projects/react-explore-products-walmart/proxy.php?search='+encodeURIComponent(endPoint))
			.then( res => { 
				console.log( res.data );
				if ( res.data == 0 ) {
					this.setState( { 
						items: [],
						error: 'Check your internet connection!',
						isLoading: false,
					} )
					return;
				} 
				if ( res.data.errors ) {
					this.setState({
						items: [],
						error: res.data.errors[0].message,
						isLoading: false,
					})
					return;
				}
				if ( res.data.message ) {
					this.setState({
						items: [],
						error: res.data.message,
						isLoading: false,
					})

					return;
				}
				this.setState( { 
					items: res.data.items,
					totalResults: res.data.totalResults,
					error: null,
					isLoading: false,
				} )
			})
			.catch( err => { console.log( err) })
			:
			axios.get( document.location.href+'proxy.php?search='+encodeURIComponent(endPoint))
			.then( res => { 
				console.log( res.data );
				if ( res.data == 0 ) {
					this.setState( { 
						items: [],
						error: 'Check your internet connection!'
					} )
					return;
				} 
				if ( res.data.errors ) {
					this.setState({
						items: [],
						error: res.data.errors[0].message
					})
					return;
				}
				if ( res.data.message ) {
					this.setState({
						items: [],
						error: res.data.message
					})

					return;
				}
				this.setState( { 
					items: res.data.items,
					totalResults: res.data.totalResults,
					error: null
				} )
			})
			.catch( err => { console.log( err) })
				
		// .then( res => { 
		// 	if ( res.data == 0 ) {
		// 		this.setState( { 
		// 			items: [],
		// 			error: 'There is something wrong!'
		// 		} )
		// 		return;
		// 	}
		// 	this.setState( { 
		// 		totalResults: res.data.totalResults,
		// 		items: res.data.items,
		// 		error: null
		// 	} )
		// })
		// .catch( err => { console.log( err) })
	};

	updateSearchKeyValue = ( event ) => {
		this.setState({
			searchKey: event.target.value
		})
	}

	
}

export default App;