import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";
import nodata from "../assets/no_data.jpg";

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getUserTrips();
  }, []);

  /**
   * Used to egt all usert trips
   * @returns
   */
  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips?.length > 0 ? (
          userTrips.map((trip, index) => (
            <div key={index} className="hover:scale-105 transition-all ">
              <UserTripCardItem trip={trip} />
            </div>
          ))
        ) : (
          <div>
            <img src={nodata} className="w-500 h-500" alt="" />
            <p className="text-center text-xl">You have no trips yet!!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTrips;
