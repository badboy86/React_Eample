import React from 'react';
import MaListe from './list';
import Tab from './tab';
import './app.css';
import data from '../data/data.json';
import Info from './info';

const personnes1 = [
	{ Name: 'HAMID', Age: '40', Gender: 'M' },
	{ Name: 'MOHAMMED', Age: '20', Gender: 'M' },
	{ Name: 'KHADIJA', Age: '40', Gender: 'F' },
];
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { index: 0 };
	}
	render() {
		return (
			<div>
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						this.setState({
							index: this.state.index > 0 ? this.state.index - 1 : 0,
						});
					}}
				>
					Prev
				</button>

				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						this.setState({
							index:
								this.state.index < personnes1.length - 1
									? this.state.index + 1
									: this.state.index,
						});
					}}
				>
					Next
				</button>

				<h1>Creation des composants</h1>
				<Info personne={personnes1[this.state.index]} />
				<Tab data={personnes1} />
			</div>
		);
	}
}

export default App;
