import React from 'react';
import Search from '../Forms/search';

class Navbar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { fetchProducts, updateSearchKeyValue, searchQuery, numItems } = this.props;

		return (
            <nav className="navbar navbar-light bg-white pb-4">
                <div className="container-fluid">
                	<Search 
                		searchQuery={ searchQuery }
                		numItems={ numItems }
                		fetchProducts={ fetchProducts }
                        updateSearchKeyValue={ updateSearchKeyValue }
                	/>
                </div>
            </nav>
		);
	}
}

export default Navbar;