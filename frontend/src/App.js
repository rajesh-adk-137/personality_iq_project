
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import  {AboutUs} from './components/AboutUs';
import  {NavbarComp} from './components/NavbarComp';
import {IqTest} from './components/IqTest';
import {Home} from './components/Home';
import PersonalityTestQuestions from './components/PersonalityTestQuestions';
import {PersonalityTestIntro} from './components/PersonalityTestIntro';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import PersonalityTestResult from './components/PersonalityTestResult';
import Error from './components/Error';
import LoginRequest from './components/LoginRequest';
import TraitsDescription from './components/TraitsDescription';
import TermsAndConditions from './components/TermsAndConditions';


 





function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/personality-test-intro" component={PersonalityTestIntro} />
        <Route path="/personality-test-questions" component={PersonalityTestQuestions} />
        <Route path="/iq-test" component={IqTest} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/log-in" component={LogIn} />
        <Route path="/traits" component={TraitsDescription} />
        <Route path="/log-out" component={LogOut} />
        <Route path="/terms-conditons" component={TermsAndConditions} />
        <Route path="/log-in-request" component={LoginRequest} />
        <Route path="/personality-test-result" component={PersonalityTestResult} />
        <Route component={Error} />


        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
