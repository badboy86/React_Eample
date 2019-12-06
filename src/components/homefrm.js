import React from 'react';
import Button from '@material-ui/core/Button';
import './app.scss';

class HomeFrm extends React.Component {
	render() {
		const func = this.props.func;
		return (
			<div>
				<h1>Home page (Super Application :) )</h1>
				<span className="buttonMargin">
					<Button
						variant="contained"
						color="primary"
						onClick={e => {
							e.preventDefault();
							e.stopPropagation();
							func.setState({ location: 'create' });
						}}
					>
						Create
					</Button>
				</span>
				<Button
					variant="contained"
					color="primary"
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						func.setState({ location: 'contact' });
					}}
				>
					Contact
				</Button>
			</div>
		);
	}
}

export default HomeFrm;
