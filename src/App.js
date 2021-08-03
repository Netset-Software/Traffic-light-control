
import './App.css';
import Header from './Components/common/Header';
import Footer from './Components/common/Footer';
import PrivacyPolicy from './Components/common/PrivacyPolicy';
import Copyright from './Components/common/Copyright';
import Term from './Components/common/Term';

import Home from './Components/Home';
import About from './Components/About';
import Foodoption from './Components/Foodoption';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Redeem from './Components/Redeem';
import Shop from './Components/Shop';
import Product from './Components/Product';
import Product_search from './Components/Product_search';
import My_favorites from './Components/My_favorites';
import Reviews from './Components/Reviews';

import Checkout from './Components/Checkout';
import Blog from './Components/Blog';
import Profile from './Components/Profile';
import Cards from './Components/Cards'
import Offer from './Components/Offer';
import SignIn from './Components/common/Signin';
import Signup from './Components/common//Signup';
import Signup2 from './Components/common//Signup2';
import Forgotpassword from './Components/common/Forgotpassword';
import Packages from './Components/Packages';
import Cart from './Components/Cart'
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product_details from './Components/Product_details';
import Blog_details from './Components/Blog_details';

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
            <Route  path="/shop" component={Shop} />
            <Route  path="/product" component={Product} />
            <Route  path="/product_search" component={Product_search} />
            <Route  path="/my_favorites" component={My_favorites} />
            <Route  path="/Reviews" component={Reviews} />
            <Route  path="/Product_details" component={Product_details} />
            <Route  path="/blog" component={Blog} />
            <Route  path="/packages" component={Packages} />
            <Route  path="/profile" component={Profile} />
            <Route  path="/cards" component={Cards} />
            <Route  path="/cart" component={Cart} />
            <Route  path="/checkout" component={Checkout} />
            <Route  path="/blog_details" component={Blog_details} />
            <Route  path="/privacy-policy" component={PrivacyPolicy} />
            <Route  path="/copyright" component={Copyright} />
            <Route  path="/terms" component={Term} />

      </Switch>
      <Footer />
    </Router>

   </>
  );
}

export default App;
