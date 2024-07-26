import GoogleMapReact from "google-map-react";

function NavigationMap() {
  //   const openInWaze = () => {
  //     window.open(
  //       `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes`,
  //       "_blank",
  //     );
  //   };

  //   const openInGoogleMaps = () => {
  //     window.open(
  //       `https://www.google.com/maps?q=${location.lat},${location.lng}`,
  //       "_blank",
  //     );
  //   };

  //   const openInPlans = () => {
  //     window.open(
  //       `http://maps.apple.com/?ll=${location.lat},${location.lng}`,
  //       "_blank",
  //     );
  //   };

  const centerPosition = {
    lat: 47.43574258887739,
    lng: -2.0886956017077667,
  };

  return (
    <div className="h-[600px] w-full overflow-hidden rounded-2xl">
      <GoogleMapReact
        defaultCenter={centerPosition}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
}

export default NavigationMap;
