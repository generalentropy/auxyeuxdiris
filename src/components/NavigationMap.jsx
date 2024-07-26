import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function NavigationMap() {
  const target = [47.430238723421134, -2.125832854067893];

  return (
    <div className="mb-10 h-[600px] w-full overflow-hidden rounded-2xl">
      <MapContainer
        center={target}
        zoom={13}
        scrollWheelZoom={false}
        className="z-10 h-full w-full"
        dragging={false}
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
  );
}

export default NavigationMap;
