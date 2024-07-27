import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { appButtonsData, geolocationCoords } from "../../config/global";
import { isMobile } from "react-device-detect";
import { buildGpsLink } from "../../utils/helpers";

function NavigationMap() {
  const { lat, lng } = geolocationCoords;
  const target = [lat, lng];
  return (
    <>
      <div className="mb-10 flex items-center justify-center gap-4 rounded-2xl bg-lightGrey py-10 text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
        <img src="icons/map-route-icon.svg" alt="" className="h-14" />
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
      <div className="mb-10 flex flex-wrap justify-center gap-10">
        {appButtonsData.map((btn, i) => (
          <AppButton key={i} name={btn.name} iconUrl={btn.iconUrl} />
        ))}
      </div>
    </>
  );
}

export default NavigationMap;

function AppButton({ iconUrl, name }) {
  const url = buildGpsLink(name, geolocationCoords);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={`Ouvrir l'adresse dans ${name}`}
    >
      <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-2xl border-8 border-white bg-accent shadow-xl transition hover:-translate-y-2 hover:bg-accentDarker">
        <div>
          <img src={iconUrl} alt="" className="py-4" />
        </div>
        <div className="text-3xl font-bold text-white">{name}</div>
      </div>
    </a>
  );
}
