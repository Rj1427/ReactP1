import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from '../src/components/App';
import Question from '../src/components/questions/Question';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Share from './components/resultShare';

const routing = (
    <Router>
        <div className="container-fluid">
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/question" component={Question} />
            <Route path="/share" component={Share} />
            <Footer />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root')); 