import React from 'react';
import * as PropTypes from 'prop-types';

function Card(props) {
	return (
		<div className="card">
			<div className="card-body">
				<h3>{ props.header }</h3>
				{
					props.children
				}
			</div>
		</div>
	);
}

export default React.memo(Card);

Card.propTypes = {
	header: PropTypes.string,
};

Card.defaultProps = {
	header: '!!! EMPTY HEADER !!!',
};
