import React from 'react';
import Search from '../Search/index';

class Navbar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { fetchProducts, searchQuery, numItems } = this.props;

		return (
            <nav className="navbar navbar-light bg-white pb-4">
                <div className="container-fluid">
                	<Search 
                		searchQuery={ searchQuery }
                		numItems={ numItems }
                		fetchProducts={ fetchProducts }
                	/>
                </div>
            </nav>
		);
	}
}

export default Navbar;