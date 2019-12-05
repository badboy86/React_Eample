import React from 'react';

class ContactFrm extends React.Component {
	render() {
		const func = this.props.func;
		return (
			<div>
				<h1>Contact page</h1>
				<input type="text"></input>
				<br />
				<input type="text"></input>
				<br />
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						func.setState({ location: 'home' });
					}}
				>
					retour
				</button>
			</div>
		);
	}
}

export default ContactFrm;
