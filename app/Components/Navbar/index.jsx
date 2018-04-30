import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class Navbar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
            <nav className="navbar navbar-light bg-white pb-4">
                <div className="container-fluid">
                    <form className="form-search mx-auto">
                        <div className="form-group form-group-search mb-0">
                            <input type="text" className="form-control input-search" placeholder="Search products..."/>
                            <button className="btn btn-primary btn-search"><FontAwesomeIcon icon="search"/></button>
                        </div>
                    </form>
                </div>
            </nav>
		);
	}
}

export default Navbar;