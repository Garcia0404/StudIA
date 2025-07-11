import dynamic from "next/dynamic";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { ScrollAnimation } from "@/components/scroll-animation";

const LandingFeatures = dynamic(
  () =>
    import("@/components/landing/LandingFeatures").then((mod) => ({
      default: mod.LandingFeatures,
    })),
  {
    loading: () => <div className="py-20" />,
  }
);

const LandingHowItWorks = dynamic(
  () =>
    import("@/components/landing/LandingHowItWorks").then((mod) => ({
      default: mod.LandingHowItWorks,
    })),
  {
    loading: () => <div className="py-20" />,
  }
);

const LandingCTA = dynamic(
  () =>
    import("@/components/landing/LandingCTA").then((mod) => ({
      default: mod.LandingCTA,
    })),
  {
    loading: () => <div className="py-20" />,
  }
);

const LandingFooter = dynamic(
  () =>
    import("@/components/landing/LandingFooter").then((mod) => ({
      default: mod.LandingFooter,
    })),
  {
    loading: () => <div className="py-12" />,
  }
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <ScrollAnimation animation="zoomIn">
        <LandingCTA />
      </ScrollAnimation>
      <LandingFooter />
    </div>
  );
}
