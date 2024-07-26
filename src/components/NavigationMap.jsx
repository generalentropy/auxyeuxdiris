import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { geolocationCoords } from "../../config/global";
import { isMobile } from "react-device-detect";

function NavigationMap() {
  const { lat, lng } = geolocationCoords;
  const target = [lat, lng];

  return (
    <>
      <div className="mb-10 flex items-center justify-center gap-4 rounded-2xl bg-lightGrey py-10 text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
        <img src="icons/map-route-icon.svg" alt="" />
        Nous situer
      </div>
      <div className="mb-10 h-[600px] w-full overflow-hidden rounded-2xl">
        <MapContainer
          center={target}
          zoom={13}
          scrollWheelZoom={false}
          className="z-10 h-full w-full"
          dragging={isMobile ? false : true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={target}>
            <Popup>
              Aux Yeux d&lsquo;Iris
              <br /> 47 La Plaie - 44160 Pontchâteau.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default NavigationMap;

// function AppButton({ icon, name }) {
//   return <div className="h-[200px] w-[200px] bg-accent">Button</div>;
// }
