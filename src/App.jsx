import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Nav from './pages/navbar/index';
import Layout from './pages/layout/index';
import Contact from './pages/contact/index';
import About from './pages/about/index';
import SignIn from './pages/signin/index';
import SignUp from './pages/signup/index';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
