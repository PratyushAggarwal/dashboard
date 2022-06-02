import React from "react";
import { VectorMap } from "react-jvectormap";
import data from "./data/mapdata.json";
import Geocode from "react-geocode";

function Check123() {
  console.log("abcd");
  Geocode.fromAddress("Taj Mahal").then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log("true",lat,lng);
  },
  (error) => {
    console.error(error);
  }
);
}


export default class Map extends React.Component {
  
  render() {
    return (
      <div style={{ width: "100%", height: 224 }}>
        {Check123()}
        <VectorMap
          map={"world_mill"}
          backgroundColor="#FFFF"
          markerStyle={{
            initial: {
              fill: "#727cf5",
              stroke: "#fff",
              "stroke-width": 7,
              "fill-opacity": 0.9,
              "stroke-opacity": 0.4,
              r: 9,
            },
            hover: {
              stroke: "#fff",
              "stroke-width": 1.5,
              "fill-opacity": 1,
            },
          }}
          series={{
            markers: [
              {
                attribute: "r",
                scale: [5, 20],
                normalizeFunction: "polynomial",
              },
            ],
          }}
          regionStyle={{
            initial: {
              fill: "#e3eaef",
              stroke: "none",
              "stroke-width": 0,
            },
            hover: {
              "fill-opacity": 0.8,
            },
          }}
          markers={data}
          ref="map"
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          containerClassName="map"
        />
      </div>
    );
  }
}
