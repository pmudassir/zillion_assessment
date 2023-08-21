import Banner from "@/components/Banner";
import BodySlider from "@/components/BodySlider";
import Footer from "@/components/Footer";
import MainMenu from "@/components/MainMenu";
import WelcomeContent from "@/components/WelcomeContent";

export default function Home() {
  return (
    <div>
      <MainMenu />
      <Banner />
      <WelcomeContent />
      <BodySlider />
      <Footer />
    </div>
  )
}
