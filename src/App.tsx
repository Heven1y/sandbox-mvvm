import { SearchCountryView } from "./views/SearchCountryView";
import { TextControlViewOne } from "./views/TextControlViewOne";
import { TextControlViewTwo } from "./views/TextControlViewTwo";

function App() {
  return (
    <div>
      <TextControlViewOne />
      <TextControlViewTwo />
      <SearchCountryView />
      <SearchCountryView maxSuggestions={10} />
    </div>
  );
}

export default App;
