import { AboutUs } from "@/components/sides/aboutUs/AboutUs";
import { Central } from "@/components/sides/central/Central";
import Facilities from "@/components/sides/facilities/Facilities";
import { Header } from "@/components/sides/header/Header";
import { Especialities } from "@/components/sides/especialities/Especialities";
import { Localization } from "@/components/sides/localization/Localization";
import { Footer } from "@/components/sides/footer/Footer";

export default function Home() {
  return (
    <div className="m-auto bg-topBanner bg-no-repeat bg-cover" >
      <div className="w-1440 m-auto">
        <Header />
        <Central />
        <AboutUs />
        <Facilities />
        <Especialities />
        <Localization />
        <Footer />
      </div>
    </div>
  );
}
