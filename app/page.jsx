import GreyFooter from "@/components/modules/GreyFooter/GreyFooter";
import Header from "@/components/modules/Header/Header";
import Hero from "@/components/modules/Hero/Hero";
import HowItWorks from "@/components/modules/HowItWorks/HowItWorks";
import ParamsInfo from "@/components/modules/ParamsInfo/ParamsInfo";
import QuestAnswers from "@/components/modules/QuestAnswers/QuestAnswers";
import Rieltors from "@/components/modules/Rieltors/Rieltors";
import RieltorsSlides from "@/components/modules/RieltorsSlides/RieltorsSlides";



export default function Home() {

  return (
    <>
      <Header />
      <main className="main__page">
        <Hero />
        <ParamsInfo />
        <Rieltors />
        <div className="bg-wrap">
          <HowItWorks />
          <RieltorsSlides />
          <QuestAnswers />
        </div>
      </main>
      {/* <GreyFooter /> */}
    </>

  );
}
