import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import CakeList from './Components/CakeList';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
      <main className="main">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/shop" component={CakeList} />
            <Route exact path="**" component={PageNotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </main>
  );
}

export default App;
