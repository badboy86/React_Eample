import React from 'react';

class CreateFrm extends React.Component {
	render() {
		const func = this.props.func;
		return (
			<div>
				<h1>Create page</h1>
				<input type="text"></input>
				<input type="text"></input>
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

export default CreateFrm;
