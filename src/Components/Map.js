import React from "react";
import { VectorMap } from "react-jvectormap";

export default class Map extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", height: 224 }}>
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
          markers={[
            {
              latLng: [37.733795, -122.446747],
              name: "San Francisco",
              value: 20,
            },
            {
              latLng: [11, 12.45],
              name: "WOW",
              value: 30,
            },
            {
              latLng: [-33, 12.45],
              name: "WAZZZA",
              value: 16,
            },
            {
              latLng: [12.848681, 77.677326],
              name: "Siemens",
              value: 24,
            },
            {
              latLng: [15.87, 100.99],
              name: "thailand",
            },
          ]}
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
