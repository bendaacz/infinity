import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import MediaQuery from 'react-responsive';

import "./App.scss"

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

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={28}
        outerSize={6}
        color="227, 197, 252"
        outerAlpha={0.4}
        innerScale={0.4}
        outerScale={8}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 24,
              outerSize: 24,
              color: '227, 197, 252',
              outerAlpha: 0.6,
              innerScale: 1.4,
              outerScale: 10,
            },
          },
        ]}
      />
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
          </Routes>
        </BrowserRouter>
      </MediaQuery>
    </>
  );
}

export default App;
