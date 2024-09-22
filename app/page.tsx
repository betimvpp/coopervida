import { Central } from "@/components/central/Central";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <div className="h-screen m-auto bg-topBanner bg-no-repeat bg-cover" >
      <div className="w-1440 m-auto">
        <Header />
        <Central />
      </div>
    </div>
  );
}
