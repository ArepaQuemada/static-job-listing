import { FilterContextProvider } from "./context/context-filter";
import Header from "./components/Header";
import View from "./components/View";

function App() {
  return (
    <>
      <FilterContextProvider>
        <Header />
        <View />
      </FilterContextProvider>
    </>
  );
}

export default App;
