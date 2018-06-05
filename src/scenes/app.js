import React from 'react';
import { Route } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import SignInAndRegister from './SignInAndRegister/SignInAndRegister';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import ChangePassword from './ChangePassword/ChangePassword';
import Settings from './Settings/Settings';
import Dashboard from './Dashboard/Dashboard';

const App = () => (
  <Flexbox flexDirection="column" minHeight="100vh">
    <Header />
    <Flexbox flexGrow={1}>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={SignInAndRegister} />
      <Route exact path="/login" component={SignInAndRegister} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/resetpassword" component={ResetPassword} />
      <Route exact path="/changepassword" component={ChangePassword} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Flexbox>
    <Footer />
  </Flexbox>
);

export default App;
