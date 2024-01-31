import Home from "./pages/home/index.jsx";
import AnimatedCursor from "react-animated-cursor";


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
<Home />
    </>
  )
}

export default App