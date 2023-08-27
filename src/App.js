import logo from './logo.svg';
import './App.css';
import Validation from './react-validation1/validation-pratice';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './react-validation1/routing/home';
import About from './react-validation1/routing/about';
import Contact from './react-validation1/routing/contact';
import Validation1 from './validation-pratice1/vaildation-pratice1';
import { Provider } from 'react-redux';
import Counter from './redux/counter';
import store from './redux/store';


function App() {
  return (
    <div>
      {/* <Validation/> */}
    
    {/* <Validation1/> */}
      {/* <BrowserRouter>
      <Link to="/home"> home</Link >
        <Link to="/about">about</Link >
          <Link to="/contact">contact</Link >

              <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
              </Routes>
            </BrowserRouter> */}

            <Provider store={store}>
              <Counter/>
              
            </Provider>
    </div>
  );
}

export default App;
