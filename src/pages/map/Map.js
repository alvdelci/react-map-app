import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Bar from "../../componentes/bar";

import './styles.css';

function Map() {

    return (
        <>
            <Bar />
            <MapContainer
                id="map-container"
                center={[-12.673960, -39.102010]}
                zoom={6}
                minZoom={13}
                maxBounds={[
                    //south west
                    [-84.969265, 180.000000],
                    //north east
                    [84.969265, -179.999999]
                ]}
                maxBoundsViscosity={1.0}
            >


                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <Marker position={[-12.673960, -39.102010]}>
                    <Popup>
                        Informações do ponto. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default Map;