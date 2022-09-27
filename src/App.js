import "./App.css";
import Card from "./components/card";
import Home from "./conditional_redering/Home";
import Conditional_rendering from "./conditional_redering/index";
import DynamicStyling from "./dynamic_styling";
import Event_Handler from "./event_handler";
import Faqs from "./faq/Faqs";
import Fetching1 from "./fetch/Fetching1";
import Axios from "./fetch/Axios";
import Form from "./form_control";
import Hooks from "./hooks";
import HomeTodos from "./todo/Home.js";
import Toggle from "./toggle/Toggle";
import UseRef from "./useRef";

const football = [
  {
    CupName: "World Cup 2022",
    Location: "Qatar",
    Team: "32",
    FevoriteTeam: "Argentina",
    FevoritePlayer: "Messi",
  },
  {
    CupName: "World Cup 2026",
    Location: "USA/Mexico/Canada",
    Team: "36",
    FevoriteTeam: "Brazil",
    FevoritePlayer: "D maria",
  },
  {
    CupName: "World Cup 2028",
    Location: "Bangladesh",
    Team: "40",
    FevoriteTeam: "Argentina",
    FevoritePlayer: "Lionel",
  },
  {
    CupName: "World Cup 2027",
    Location: "EAU",
    Team: "32",
    FevoriteTeam: "Spain",
    FevoritePlayer: "Aguero",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Card football={football}/> */}
      <Conditional_rendering />
      <Event_Handler />
      <Hooks />
      <DynamicStyling />
      <Form />
      <HomeTodos />
      <Toggle />
      <Faqs />
      {/* <Fetching1 /> */}
      <Axios />
      <UseRef />
    </div>
  );
}

export default App;
