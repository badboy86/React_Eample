import React from 'react';
import CreateFrm from './createfrm';
import ContactFrm from './contactfrm';
import HomeFrm from './homefrm';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import loadingGif from './loading.gif';

class GlobalApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { index: 0, location: 'home', data: undefined };
	}
	componentDidMount() {
		fetch('https://demo.levitt.fr/designations')
			.then(res => res.json())
			.then(json => this.setState({ data: json }));
	}
	render() {
		/*if (this.state.location === 'home') return <HomeFrm func={this} />;
		else if (this.state.location === 'create') return <CreateFrm func={this} />;
		else if (this.state.location === 'contact')
            return <ContactFrm func={this} />;*/
		const message = 'Chargement en cours...';

		if (this.state.data) {
			const firstElem = this.state.data[this.state.index];
			return (
				<div>
					<h2>Datasource : https://demo.levitt.fr/designations</h2>
					<Card>
						<CardHeader
							avatar={
								<Avatar aria-label="recipe">{firstElem.phoneNumber}</Avatar>
							}
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title={firstElem.designation}
							subheader={() => firstElem.attribution}
						/>
						<CardMedia
							image="/static/images/cards/paella.jpg"
							title="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								{firstElem.observation}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton
								disabled={this.state.index === 0}
								onClick={e => {
									e.stopPropagation();
									this.setState({ index: this.state.index - 1 });
								}}
								aria-label="Prev"
							>
								<ArrowBackIosIcon />
							</IconButton>
							<IconButton
								disabled={this.state.index === this.state.data.length - 1}
								onClick={e => {
									e.stopPropagation();
									this.setState({ index: this.state.index + 1 });
								}}
								aria-label="Next"
							>
								<ArrowForwardIosIcon />
							</IconButton>
						</CardActions>
					</Card>
					{/*<ul>
						{this.state.data.map(e => (
							<li key={e.phoneNumber}>
								({e.phoneNumber}) {e.designation}
							</li>
						))}
					</ul>
                        */}
				</div>
			);
		} else return <img src={loadingGif} alt="loading..." />;
	}
}

export default GlobalApp;
