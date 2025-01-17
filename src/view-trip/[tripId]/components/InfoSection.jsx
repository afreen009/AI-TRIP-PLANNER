import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import placeholder from "./../../../assets/placeholder.jpg";
import { IoIosSend } from "react-icons/io";
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/Global.Api";
import { Link } from "react-router-dom";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && getPlacePhoto();
  }, [trip]);

  const getPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await getPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          trip?.userSelection?.location?.label
        }
        target="_blank"
      >
        <img
          src={photoUrl ? photoUrl : placeholder}
          alt=""
          className="h-[340px] w-full object-cover rounded-xl hover:scale-105 transition-all cursor-pointer"
        />
      </Link>
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="mb-3 font-bold text-xl ">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-6">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💰 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂 No. Of Traveler: {trip.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
