import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return <div className="text-3xl font-bold text-red-500">Hello</div>;
}
export default App;
