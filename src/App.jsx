import DeepFocus from "./components/DeepFocus";
import Footer from "./components/Footer";
import HagoLive from "./components/HagoLive";
import Header from "./components/Header";
import JustChoice from "./components/JustChoice";
import LineBanner from "./components/LineBanner";
import MainBanner from "./components/MainBanner";
import MyHago from "./components/MyHago";
import PostIt from "./components/PostIt";
import SelectHago from "./components/SelectHago";
import Spotlight from "./components/Spotlight";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="font-suit">
      <TopBanner />
      <Header />
      <MainBanner />
      <PostIt />
      <Spotlight />
      <LineBanner />
      <HagoLive />
      <JustChoice />
      <SelectHago />
      <DeepFocus />
      <MyHago />
      <Footer />
    </div>
  );
};

export default App;
