import MatchingUserInfo from "@/components/HomePage/MatchingUserInfo/MatchingUserInfo";
import styles from "./page.module.css";
import Header from "@/components/HomePage/Header/Header";
import Footer from "@/components/HomePage/Footer/Footer";
import FindSpecialSomeOne from "@/components/HomePage/FindSpecialSomeOne/FindSpecialSomeOne";
import Service from "@/components/HomePage/Service/Service";
import Venue from "@/components/Venue/Venue";
import SuccessfulMarriagesCarousel from "@/components/HomePage/SuccessfulMarriagesCarousel/SuccessfulMarriagesCarousel";

export default function Home() {
  return (
    <main>
      <section className={`${styles.home}`} id="home">
        <Header />
        <div className="flex flex-col justify-center items-center h-full">
          <MatchingUserInfo />
        </div>
      </section>

      {/* <Service /> */}
      <Service />

      <div className="container mx-auto my-10 h-auto">
        <Venue />
      </div>
      <SuccessfulMarriagesCarousel />
      <div className="h-full min-h-[400px] bg-gradient-to-r from-[#f8f5e9] to-[#f5f5d1] mt-10 py-3">
        <FindSpecialSomeOne />
      </div>
      <div className="bg-[#ff44cb] p-5 mt-10">
        <Footer />
      </div>
    </main>
  );
}
