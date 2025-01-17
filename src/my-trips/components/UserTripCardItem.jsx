import { getPlaceDetails, PHOTO_REF_URL } from "@/service/Global.Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";

function UserTripCardItem({ trip }) {
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
    <Link to={"/view-trip/" + trip?.id}>
      <img
        className="rounded-xl h-[180px] w-full object-cover"
        src={photoUrl ? photoUrl : placeholder}
        alt=""
      />
      <div>
        <h2 className="text-bold text-lg text-black">
          {trip?.userSelection?.location?.label}
        </h2>
        <h3 className="text-sm text-gray-500">
          {trip?.userSelection?.noOfDays} Days trips with{" "}
          {trip?.userSelection?.buget} Budget{" "}
        </h3>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
