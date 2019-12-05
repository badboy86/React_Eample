import React from 'react';
import CreateFrm from './createfrm';
import ContactFrm from './contactfrm';
import HomeFrm from './homefrm';

class GlobalApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { location: 'home' };
	}

	render() {
		if (this.state.location === 'home') return <HomeFrm func={this} />;
		else if (this.state.location === 'create') return <CreateFrm func={this} />;
		else if (this.state.location === 'contact')
			return <ContactFrm func={this} />;
	}
}

export default GlobalApp;
