import React from 'react';

class HomeFrm extends React.Component {
	render() {
		const func = this.props.func;
		return (
			<div>
				<h1>Home page (Super Application :) )</h1>
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						func.setState({ location: 'create' });
					}}
				>
					Create
				</button>
				<br />
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						func.setState({ location: 'contact' });
					}}
				>
					Contact
				</button>
			</div>
		);
	}
}

export default HomeFrm;
