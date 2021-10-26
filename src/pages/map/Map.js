import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Bar from "../../componentes/bar/Bar";

import './styles.css';

function Map() {

    return (
        <>
            <Bar />
            <MapContainer
                id="map-container"
                center={[-12.673960, -39.102010]}
                zoom={13}
                minZoom={3}
                maxBounds={[
                    //south west
                    [-180.000000, 180.000000],
                    //north east
                    [180.000000, -180.000000]
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