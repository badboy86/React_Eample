import React from 'react';
import { Button, TextField, Avatar } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './app.scss';

class CreateFrm extends React.Component {
	render() {
		const func = this.props.func;
		return (
			<div>
				<h1>Create form</h1>
				<form noValidate autoComplete="off">
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					<TextField id="txtField1" label="First Name" variant="outlined" />
					<TextField id="txtField2" label="Last Name" variant="outlined" />
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
				</form>
			</div>
		);
	}
}

export default CreateFrm;
