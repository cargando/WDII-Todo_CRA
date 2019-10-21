import React from 'react';

function Navigation(props) {

	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a className="nav-link active" href="#">Home</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Tasks</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Statuses</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
			</li>
		</ul>
	);
}

export default React.memo(Navigation);
