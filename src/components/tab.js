import React from 'react';

class Tab extends React.Component {
	render() {
		const val = this.props.data.map(e => (
			<tr>
				<td>{e.Name}</td>
				<td>{e.Age}</td>
				<td>{e.Gender}</td>
			</tr>
		));
		return (
			<div>
				<h2>Tableau perso</h2>
				<table>
					<tr>
						<td>Name</td>
						<td>Age</td>
						<td>Gender</td>
					</tr>
					{val}
				</table>
			</div>
		);
	}
}

export default Tab;
