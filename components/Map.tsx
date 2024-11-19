"use client";

import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { scaleLinear } from "d3-scale";
import { RANDOM_COUNTRY_MARKERS, ALL_COUNTRIES_DATA } from "@/constants/app";

const colorScale = scaleLinear<string>()
  .domain([0, 200])
  .range(["#FBBF24", "#92400E"]);

const Map = () => {
  const countryColors = Object.fromEntries(
    Object.entries(ALL_COUNTRIES_DATA).map(([key, value]) => [
      key,
      colorScale(value),
    ])
  );

  return (
    <div className="w-full h-full bg-[#78350F] py-[42px] relative mt-[-2px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 space-y-2">
        <div className="font-extrabold lg:text-[96px] text-[48px] text-white leading-[52.8px] lg:leading-[105.6px] text-center">
          11,658,467
        </div>
        <div className="lg:font-extrabold font-bold lg:text-[56px] text-[32px] text-white leading-[35.2px] lg:leading-[61.6px] text-center">
          Shoes Collected
        </div>
      </div>
      <div className="mx-auto h-[400px] lg:h-[663px] w-full lg:w-[75%] relative">
        <VectorMap
          map={worldMill}
          zoomOnScroll={false}
          zoomButtons={false}
          backgroundColor="none"
          regionStyle={{
            initial: {
              fill: "#B45309",
            },
            hover: {
              fill: "none",
            },
            selected: {
              fill: "none",
            },
          }}
          series={{
            regions: [
              {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                values: countryColors,
                attribute: "fill",
              },
            ],
          }}
          markers={RANDOM_COUNTRY_MARKERS}
          markerStyle={{
            initial: {
              fill: "none",
              stroke: "#A3E635",
              strokeWidth: 3,
            },
            hover: {
              fill: "#D9F99D",
              stroke: "#A3E635",
              strokeWidth: 3,
            },
          }}
          onMarkerTipShow={(e, el, markerIndex) => {
            const markerData = RANDOM_COUNTRY_MARKERS[Number(markerIndex || 0)];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            el.html(
              `<div>
              <div style="display: inline-block; text-align: center; position: relative;">
                <img
                  src=${markerData.imageUrl}
                  alt="marker-image"
                  style="
                    border: 5px solid white;
                    border-radius: 10px;
                    width: 256px;
                    height: 200px;
                    position: relative;
                    z-index: 10;
                  "
                />
                <div
                  style="
                    padding: 18px;
                    background-color: #E2E8F0;
                    width: 250px;
                    position: relative;
                    z-index: 0;
                    top: -12px;
                    left:3px;
                    border-radius: 5px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #0F172A;
                    line-height: 19.6px;
                  "
                >
                  Emma Simpson collected one pair of
                  <span style="font-weight: 600;">Cool Shoes.</span>
                </div>
              </div>
              </div>`
            );
          }}
        />
      </div>
    </div>
  );
};

export default Map;
