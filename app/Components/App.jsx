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
			totalResults: 0,
			items: [],
			searchKey: '',
			numItems: 16,
			start: 1,
			page: 1,
			isLoading: false,
			error: null,
			foo: 'foo',
		}
	}

	render() {
		const { totalResults, items, searchKey, numItems, error, isLoading, start, page } = this.state;

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
				<PaginationProduct 
					start={ start }
					totalResults={ totalResults }
					numItems={ numItems }
					page={ page }
					onChangePage = { this.onChangePage }
				/>
			</div>
		)
	}

	fetchProducts = ( ) => {
		this.setState( { isLoading: true } );

		const endPoint = `${APIURI}apikey=${APIKey}&query=${this.state.searchKey}&numItems=${this.state.numItems}&start=${this.state.start}`;

		( document.location.port != "" ) ?
			axios.get( 'http://localhost/react_projects/react-explore-products-walmart/proxy.php?search='+encodeURIComponent(endPoint))
			.then( res => { 
				console.log( res.data );
				if ( res.data == 0 ) {
					this.setState( { 
						items: [],
						error: 'Check your internet connection!',
						isLoading: false,
						totalResults: 0,
					} )
					return;
				} 
				if ( res.data.errors ) {
					this.setState({
						items: [],
						error: res.data.errors[0].message,
						isLoading: false,
						totalResults: 0,
					})
					return;
				}
				if ( res.data.message ) {
					this.setState({
						items: [],
						error: res.data.message,
						isLoading: false,
						totalResults: 0,
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
						error: 'Check your internet connection!',
						isLoading: false,
						totalResults: 0,
					} )
					return;
				} 
				if ( res.data.errors ) {
					this.setState({
						items: [],
						error: res.data.errors[0].message,
						isLoading: false,
						totalResults: 0,
					})
					return;
				}
				if ( res.data.message ) {
					this.setState({
						items: [],
						error: res.data.message,
						isLoading: false,
						totalResults: 0,
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
	};

	updateSearchKeyValue = ( event ) => {
		this.setState({
			searchKey: event.target.value
		})
	};

	onChangePage = ( page, numItems, event ) => {
		event.preventDefault();

		console.log( page );

		const start = (( page * numItems ) - numItems ) + 1;

		this.setState({
			page: page,
			start: start,
		},
			() => { 
				this.fetchProducts();
			}
		)
	};

	
}

export default App;