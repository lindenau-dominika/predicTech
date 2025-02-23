import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingCard from "@/lib/components/landingPage/LandingCard";
import TrialPhoto from "../lib/assets/img1.png";
import TrialPhoto1 from "../lib/assets/img2.png";
import LandingNavbar from "@/lib/components/landingPage/LandingNavbar";
import InfoCard from "@/lib/components/landingPage/InfoCard";

interface CardInfo {
  title: string;
  subtitle: string;
  img: string;
}

export default function LandingPage() {
  const cardInfo: CardInfo[] = [
    {
      title: "A powerful Predictive Maintenance Tool For Manufacturing SMEs",
      subtitle:
        "Our technology will transform your existing machinery into smart, energy-saving and highly productive machines.",
      img: TrialPhoto,
    },
    {
      title: "We Can Reduce Downtime & Energy Consumption",
      subtitle:
        "Our affordable technology can prevent downtime to save you time and expensive repair costs.",
      img: TrialPhoto1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardInfo.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1F35EB] to-[#D56FDF] h-screen gap-4">
      <LandingNavbar />
      <div className="pt-24 w-full flex justify-center h-full">
        <div className="w-3/4 flex items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <LandingCard info={cardInfo[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="p-4">
        <InfoCard />
      </div>
    </div>
  );
}
