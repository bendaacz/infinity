import MediaQuery from 'react-responsive';
import AnimatedCursor from "react-animated-cursor";
import Contact from "./pages/contact/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/index";
import SignIn from "./pages/signin/index";
import SignUp from "./pages/signup/index";
import Layout from "./pages/layout/index";

function App() {
    return (
      <>
      <AnimatedCursor
      innerSize={28}
      outerSize={6}
      color='227, 197, 252'
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
            outerScale: 10
          }
        }
      ]}
    />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="log-in" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App