import React from 'react';

class Info extends React.Component {
	render() {
		const pers = this.props.personne;
		return (
			<div className="personne">
				<h1>Infos personne</h1>
				<label>Nom : </label>
				<input type="text" value={pers.Name} />
				<label>Age : </label>
				<input type="text" value={pers.Age} />
				<label>Sexe : </label>
				<input type="text" value={pers.Gender} />
			</div>
		);
	}
}
export default Info;
