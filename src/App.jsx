import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import "./index.css";

import Layout from './pages/layout/index';
import Contact from './pages/contact/index';
import About from './pages/about/index';
import LogIn from './pages/login/index';
import SignUp from './pages/signup/index';
import GetStarted from "./pages/getstarted/index";

import MobileLayout from "./mobile-pages/layout/index";
import MobileContact from "./mobile-pages/contact/index";
import MobileAbout from "./mobile-pages/about/index";
import MobileLogIn from "./mobile-pages/login/index";
import MobileSignUp from "./mobile-pages/signup/index";
import MobileGetStarted from "./mobile-pages/getstarted/index"
import MobileMenu from "./mobile-pages/menu/index"

function App() {
  return (
      <>
      <MediaQuery minWidth={1060}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="get-started" element={<GetStarted />} />
          </Routes>
        </BrowserRouter>
      </MediaQuery>

      <MediaQuery maxWidth={1060}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MobileLayout />} />
            <Route path="/mobile/contact" element={<MobileContact />} />
            <Route path="/mobile/about" element={<MobileAbout />} />
            <Route path="/mobile/log-in" element={<MobileLogIn />} />
            <Route path="/mobile/sign-up" element={<MobileSignUp />} />
            <Route path="/mobile/get-started" element={<MobileGetStarted />} />
            <Route path="/mobile/menu" element={<MobileMenu />} />
          </Routes>
        </BrowserRouter>
      </MediaQuery>
    </>
  );
}

export default App;
