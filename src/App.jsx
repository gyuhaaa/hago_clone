import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="font-suit">
      <TopBanner />
      <Header />
      <MainBanner />
    </div>
  );
};

export default App;
