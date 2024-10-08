import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { isMobile } from "react-device-detect";
import { buildGpsLink } from "../../utils/helpers";
import { geolocationCoords } from "../../config/global";
import { appButtonsData } from "../../data/data";
import Anchor from "./Anchor";

function NavigationMap() {
  const { lat, lng } = geolocationCoords;
  const target = [lat, lng];

  return (
    <>
      <Anchor divId="nous-situer" />
      <div className="my-5 flex items-center justify-center gap-2 rounded-2xl bg-lightGrey py-10 text-2xl font-bold text-primary sm:text-3xl lg:gap-4 lg:text-5xl">
        <img src="icons/map-route-icon.svg" alt="" className="h-10 lg:h-14" />
        Nous situer
      </div>
      <div className="mb-5 h-[600px] w-full overflow-hidden rounded-2xl lg:mb-10">
        <MapContainer
          center={target}
          zoom={12}
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
      <div className="text-md mb-3 flex justify-center rounded-2xl bg-lightGrey px-2 py-10 text-center font-bold text-primary md:text-xl lg:mb-10">
        Cliquez sur l&lsquo;icone pour charger l’adresse dans votre application
        GPS préférée
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-4 md:gap-10 lg:mt-10">
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
      <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-2xl border-8 border-white bg-accent shadow-xl transition hover:-translate-y-2 hover:bg-accentDarker sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]">
        <div>
          <img
            src={iconUrl}
            alt=""
            className="mt-1 h-10 sm:h-16 md:h-auto md:py-4"
          />
        </div>
        <div className="font-bold text-white sm:text-xl md:text-3xl">
          {name}
        </div>
      </div>
    </a>
  );
}
