import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Bar from "../../componentes/bar/Bar";

import "./styles.css";

//chatbot imports
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../componentes/chatbot/config";
import messageParser from "../../componentes/chatbot/MessageParser";
import actionProvider from "../../componentes/chatbot/ActionProvider";

function Map() {
  return (
    <>
      <Bar />
      <div
        style={{
          position: "absolute",
          top: "52px",
          left: "4px",
          height: "100px",
          zIndex: 1001,
        }}
      >
        <Chatbot
          disableScrollToBottom
          config={config}
          messageParser={messageParser}
          actionProvider={actionProvider}
        />
      </div>
      <MapContainer
        id="map-container"
        center={[-12.67396, -39.10201]}
        zoom={13}
        minZoom={3}
        maxBounds={[
          //south west
          [-180.0, 180.0],
          //north east
          [180.0, -180.0],
        ]}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-12.67396, -39.10201]}>
          <Popup>
            Informações do ponto. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
