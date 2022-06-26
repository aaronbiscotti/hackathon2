import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Coral from "../../assets/images/coral.jpg";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
const Ocean = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWFyb25iaXNjb3R0aSIsImEiOiJjbDRzeDQzbGUwZngwM2x1YTAyZjU4ZGwzIn0.nsQbB2LoVbnAp03N4X7NbA";

  const mapContainer = useRef(null);
  const [zoom, setZoom] = useState(4.5);
  const [bleachIndex, setBleachIndex] = useState("None selected");
  const [ecoregion, setEcoregion] = useState("None selected");
  const [date, setDate] = useState("N/A");
  useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [138.043, 35.201],
      zoom: zoom,
    });
    map.on("load", () => {
      map.addSource("coral-reefs", {
        type: "geojson",
        data: "https://wildfiredata2.s3.amazonaws.com/coral_bleaching.geoJson",
      });

      map.addLayer({
        id: "bleaching-layer",
        type: "circle",
        source: "coral-reefs",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });
    });

    map.on("click", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["bleaching-layer"],
      });
      if (features.length > 0) {
        const feature = features[0];
        console.log(feature?.properties?.Average_Bleaching);
        setBleachIndex(feature?.properties?.Average_Bleaching);
        setEcoregion(feature?.properties?.Ecoregion);
        setDate(feature?.properties?.Date);
      }
    });

    return () => map.remove();
  }, []);

  return (
    <div className="w-full">
      <img src={Coral} className="h-[520px] w-full object-cover" />
      <div className="h-[100px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">
            Dead coral at Lisianski overgrown with algae after the severe coral
            bleaching event in 2015. Almost 100% of the corals in this site died
            from bleaching (image by John Burns/NOAA, September 14, 2017)
          </p>
        </Layout>
      </div>
      <div className="pt-10 w-full flex justify-center items-center">
        <Layout>
          <h1 className="text-[35px] header mb-5">
            Global warming in our oceans
          </h1>
          <p>
            As our planet's temperature increases from human activity, not only
            do we feel the change on land- marine life feels it too. Warmer
            oceans threaten coastal communities and endager species that we may
            rely on for food. Rising temperatures, in addition to human behavior
            such as careless tourism and water pollution, have been causing
            coral communities on coasts to{" "}
            <span className="italic">bleach.</span> Coral bleaching is a
            phenomenon which occurs when warm water temperatures causecoral to
            drive out algae, a significant source of protection and
            photosynthesis. Bleaching events can make corals more susceptible to
            mortality and even kill an entire coral reef if the changes are
            large enough.
          </p>
          <br />
          <p>
            In the following interactive map, you are welcome to explore the
            many coastal communities around the world. Take note of how each
            coastal community may have an{" "}
            <span className="italic">average bleach level</span> measured in
            percent, signaling the average bleach percent of four transect
            segment samples taken in that ecoregion. The information will be
            shown below the map for your reference as you explore.
          </p>
        </Layout>
      </div>
      <div className="flex justify-center items-center flex-col mt-10 border-b-2 pb-10">
        <div
          ref={mapContainer}
          className="h-[500px] w-[60%] font-Messina"
        ></div>
        <Layout>
          <p className="mt-20 font-Messina text-center max-w-[700px]">
            Click on a coral colony on the map to see its bleach percentage.
            Notice how warmer regions such as areas around Madagascar or
            Australia have higher percentages of bleaching. <br /> Current
            selected coral reef: {ecoregion}. <br />
            Average bleaching: {bleachIndex}% <br /> Data recorded on {date}
          </p>
        </Layout>
      </div>
      <div className="h-[200px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">Data Citation</p>
          <p className="w-[800px]">
            van Woesik, R., Burkepile, D. (2019) Bleaching and environmental
            data for global coral reef sites from 1998-2017. Biological and
            Chemical Oceanography Data Management Office (BCO-DMO). (Version 1)
            Version Date 2019-07-18. doi:10.1575/1912/bco-dmo.773466.1 Accessed
            6/25/2022
          </p>
        </Layout>
      </div>
      <div className="h-[120px] flex justify-center items-center text-[30px] underline font-Messina border-b-2">
        <Layout>
          <Link to="/temperature/land">Next section</Link>
        </Layout>
      </div>
    </div>
  );
};

export default Ocean;
