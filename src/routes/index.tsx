import { createFileRoute } from "@tanstack/react-router";

import SmoothScroll from "@/components/site/SmoothScroll";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Values from "@/components/site/Values";
import Membership from "@/components/site/Membership";
import AdvisoryBoard from "@/components/site/AdvisoryBoard";
import Highlights from "@/components/site/Highlights";
import MembersSpeak from "@/components/site/MembersSpeak";
import JourneyTimeline from "@/components/site/JourneyTimeline";
import MediaPartner from "@/components/site/MediaPartner";
import Footer from "@/components/site/Footer";

const TITLE = "Impact Icons — India's Invitation-Only Leadership Council";
const DESCRIPTION =
  "Impact Icons, powered by Grazia and The Times Group, convenes India's most influential leaders for extraordinary experiences, thought leadership and curated networking.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://luxe-recreation-hub.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://luxe-recreation-hub.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Values />
          <Membership />
          <AdvisoryBoard />
          <Highlights />
          <MembersSpeak />
          <JourneyTimeline />
          <MediaPartner />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
