
import './App.css';
import Header from './Components/common/Header';
import Footer from './Components/common/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Foodoption from './Components/Foodoption';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Redeem from './Components/Redeem';

import Offer from './Components/Offer';
import SignIn from './Components/common/Signin';
import Signup from './Components/common//Signup';
import Signup2 from './Components/common//Signup2';
import Forgotpassword from './Components/common/Forgotpassword';

import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <ToastContainer/>
    <Router>
    <Header />
      <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/signin" component={SignIn} />
            <Route  path="/forgotpassword" component={Forgotpassword} />
            <Route  path="/signup" component={Signup} />
            <Route  path="/signup2" component={Signup2} />
            <Route  path="/about" component={About} />
            <Route  path="/foodoption" component={Foodoption} />
            <Route  path="/faq" component={FAQ} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/quiz" component={Quiz} />
            <Route  path="/result" component={Result} />
            <Route  path="/redeem" component={Redeem} />
            <Route  path="/Offer" component={Offer} />
      </Switch>
      <Footer />
    </Router>

   </>
  );
}

export default App;
