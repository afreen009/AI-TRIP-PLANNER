import { getPlaceDetails, PHOTO_REF_URL } from "@/service/Global.Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    hotel && getPlacePhoto();
  }, [hotel]);

  const getPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotel_name,
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
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotel_name +
        "," +
        hotel?.hotel_address
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl ? photoUrl : placeholder}
          alt=""
          className="rounded-xl h-[180px] w-full object-cover"
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.hotel_name}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotel_address}</h2>
          <h2 className="text-sm">💰 ${hotel?.price}</h2>
          <h2 className="text-sm">⭐ ${hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
