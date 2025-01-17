import Footer from "@/components/ui/custom/Footer";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import Hotels from "./components/Hotels";
import InfoSection from "./components/InfoSection";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    getTripData();
  }, [tripId]);

  const getTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docsnap = await getDoc(docRef);
    if (docsnap.exists()) {
      console.log(docsnap.data());
      setTrip(docsnap.data());
    } else {
      console.log("No such doc");
      toast("No trip found!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information section */}
      <InfoSection trip={trip} />
      {/* Recommeded Hotels */}
      <Hotels trip={trip} />
      {/* Daily Plan */}
      {/* <PlacesToVisit itinerary={trip?.tripData?.itinerary} /> */}
      <Footer />
    </div>
  );
}

export default ViewTrip;
