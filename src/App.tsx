import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RegistrationPage from './components/RegistrationPage';



const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="./components/" component={RegistrationPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
