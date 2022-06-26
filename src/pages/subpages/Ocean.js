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
      style: "mapbox://styles/mapbox/light-v10",
      center: [138.043, 35.201],
      zoom: zoom,
    });
    map.on("load", () => {
      map.addSource("coral-reefs", {
        type: "geojson",
        // Use a URL for the value for the `data` property.
        data: "https://wildfiredata2.s3.us-east-1.amazonaws.com/coral_bleaching.geoJson?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAEplVBSfQAYu3hf%2FinRK6s6UQjI1EP1JXJjAwwYxA0MAiBxFnNSurOt%2Bedc0gB1VNZxe2vb6%2FECJqah%2FoukIu53GyrtAgiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDEwMjU3MTQzODg2MyIMpekTO%2FwRnCERJLk6KsEC9y%2B9DXhMFpU1cQyunUpY80YaaBOOVsrwWqS5Jm3qUgLDZ%2B9zfKD4%2Bi3J7ui4Yj2ZbS%2F1cE3FXyzk2cIlsbOExvJKDzOazZKY5K0%2BnlFVUcnAK9dZ6jDExZEToGzNZeN7Or03ue2XqAeu02Uw3IGVAyj0sxnSjNuKpaOKfzDv9mgJGCtY8QqJKJVy9Nny6ZBXp0Mp0mySx3Xux8VnLJDnWFEjogua1QEgFFTorXbCNtWebYhZcZBN2TaHAsJMWYS7t8n1L8hEOiR%2BV%2FODtFFPjJMqyFm9q1zFamK6cc%2B7hjirWp0EU5yi65e4xN1Au9PXP6aHy3IKq9FOiKjb6jKYWiYGzOgaYhcoB2pvmLdUroK5I8rme2Fqgppszx88PM0ydpvExhLmJWyQ%2FOUK4TowZeebKZHDA4mnMbJtz%2BBpQdc1MPjj3pUGOrQCrfDSQC2wvcAHi3k7tBsdIj6H5%2F0dPXvvnZ3SOnTPT4jk%2FxWdKLRabsJX5E9WRQ0d9A1Squ2W%2BCxSMbnuo6CBM5x19zJcBTeefBnGN1%2FQ2suVB39%2BNbWNlvkGhTzrmOTLE7pC2sFrH1kHv9tYHQqEKfX3Cy5fYakMNAKsoE4PBmoBjonOzlfQa3MNmU96Il6n%2FqLBgSIeGCpuEJSKrZC%2BqpZ4IhgEx9J2EM6Yl0BG%2FXGEJyMZrzFTMMybktxEZHfzdoMgTLPWyW7lnaOx8RaeN6FZvOYjztM7iHDsiMC8TCMp4YThXNukgN%2FJ3ChlGylfVaHdHu4%2BDgWgvZdBk9%2Bo%2FdgoWTvZzkoy99RhhSSMUCIdtdTOhY2BqIocbEaYh4qur5l2Nr63Onry4%2F%2FuBt79gLAxeHY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220626T015123Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIARPYN36MH4XULSANX%2F20220626%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb39e908509320a4fffd447b796ddfeb01837b89841c4deee876fd4d1e994774",
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
