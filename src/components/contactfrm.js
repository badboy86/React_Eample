import React from 'react';
import Button from '@material-ui/core/Button';
import './app.scss';

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
				<Button
					variant="contained"
					color="primary"
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						func.setState({ location: 'home' });
					}}
				>
					retour
				</Button>
			</div>
		);
	}
}

export default ContactFrm;
