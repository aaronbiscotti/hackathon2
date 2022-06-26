import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import ForestFire from "../../assets/images/forest_fire.jpg";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const data = [
  {
    name: 1990,
    "Number of Fires": 66481,
    "Number of Acres Affected (millions)": 4.6,
  },
  {
    name: 1995,
    "Number of Fires": 82234,
    "Number of Acres Affected (millions)": 1.8,
  },
  {
    name: 2000,
    "Number of Fires": 92250,
    "Number of Acres Affected (millions)": 7.39,
  },
  {
    name: 2005,
    "Number of Fires": 66753,
    "Number of Acres Affected (millions)": 8.68,
  },
  {
    name: 2010,
    "Number of Fires": 71971,
    "Number of Acres Affected (millions)": 3.4,
  },
  {
    name: 2015,
    "Number of Fires": 68151,
    "Number of Acres Affected (millions)": 1.01,
  },
  {
    name: 2020,
    "Number of Fires": 58950,
    "Number of Acres Affected (millions)": 1.01,
  },
];

const Land = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWFyb25iaXNjb3R0aSIsImEiOiJjbDRzeDQzbGUwZngwM2x1YTAyZjU4ZGwzIn0.nsQbB2LoVbnAp03N4X7NbA";

  const mapContainer = useRef(null);
  useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [-118.243683, 34.052235],
      zoom: 6,
    });
    map.on("load", () => {
      map.addSource("wildfires", {
        type: "geojson",
        // Use a URL for the value for the `data` property.
        data: "https://wildfiredata2.s3.us-east-1.amazonaws.com/wildfire_data.geojson?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAEplVBSfQAYu3hf%2FinRK6s6UQjI1EP1JXJjAwwYxA0MAiBxFnNSurOt%2Bedc0gB1VNZxe2vb6%2FECJqah%2FoukIu53GyrtAgiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDEwMjU3MTQzODg2MyIMpekTO%2FwRnCERJLk6KsEC9y%2B9DXhMFpU1cQyunUpY80YaaBOOVsrwWqS5Jm3qUgLDZ%2B9zfKD4%2Bi3J7ui4Yj2ZbS%2F1cE3FXyzk2cIlsbOExvJKDzOazZKY5K0%2BnlFVUcnAK9dZ6jDExZEToGzNZeN7Or03ue2XqAeu02Uw3IGVAyj0sxnSjNuKpaOKfzDv9mgJGCtY8QqJKJVy9Nny6ZBXp0Mp0mySx3Xux8VnLJDnWFEjogua1QEgFFTorXbCNtWebYhZcZBN2TaHAsJMWYS7t8n1L8hEOiR%2BV%2FODtFFPjJMqyFm9q1zFamK6cc%2B7hjirWp0EU5yi65e4xN1Au9PXP6aHy3IKq9FOiKjb6jKYWiYGzOgaYhcoB2pvmLdUroK5I8rme2Fqgppszx88PM0ydpvExhLmJWyQ%2FOUK4TowZeebKZHDA4mnMbJtz%2BBpQdc1MPjj3pUGOrQCrfDSQC2wvcAHi3k7tBsdIj6H5%2F0dPXvvnZ3SOnTPT4jk%2FxWdKLRabsJX5E9WRQ0d9A1Squ2W%2BCxSMbnuo6CBM5x19zJcBTeefBnGN1%2FQ2suVB39%2BNbWNlvkGhTzrmOTLE7pC2sFrH1kHv9tYHQqEKfX3Cy5fYakMNAKsoE4PBmoBjonOzlfQa3MNmU96Il6n%2FqLBgSIeGCpuEJSKrZC%2BqpZ4IhgEx9J2EM6Yl0BG%2FXGEJyMZrzFTMMybktxEZHfzdoMgTLPWyW7lnaOx8RaeN6FZvOYjztM7iHDsiMC8TCMp4YThXNukgN%2FJ3ChlGylfVaHdHu4%2BDgWgvZdBk9%2Bo%2FdgoWTvZzkoy99RhhSSMUCIdtdTOhY2BqIocbEaYh4qur5l2Nr63Onry4%2F%2FuBt79gLAxeHY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220626T014923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIARPYN36MH4XULSANX%2F20220626%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7e98cfb72aff85d2d46bdc5c847823906d71e8140bd7f46237a3891cdb0259b",
      });

      map.addLayer({
        id: "wildfire-layer",
        type: "fill",
        source: "wildfires",
        paint: {
          "fill-color": "red",
        },
      });
    });
  }, []);

  return (
    <div className="w-full">
      <img src={ForestFire} className="h-[520px] w-full object-cover" />
      <div className="h-[100px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">
            A forest fire in Palangkaraya, Central Kalimantan, Indonesia, caused
            by human activity. (image by Rini Sulaiman/Norwegian Embassy,
            September 29, 2011)
          </p>
        </Layout>
      </div>
      <div className="pt-10 w-full flex justify-center items-center">
        <Layout>
          <h1 className="text-[35px] header mb-5">
            Global warming and wildfires
          </h1>
          <p>
            Research shows that climate change creates warmer and drier
            conditions, which produce droughts and increased wildfires. Even
            though humans are mainly to blame for the devastation of forest
            communities from fire, climate change has worsened the annual cycle
            of wildfires. It all comes back to the CO2: the main perpetrator of
            global warming. As more forests burn every year, dramatic levels of
            CO2 are released into the atmosphere and compounds our warming
            crisis at an alarming rate.
          </p>
          <div className="w-full flex justify-center items-center mt-10">
            <ComposedChart width={830} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar
                dataKey="Number of Acres Affected (millions)"
                barSize={20}
                fill="#413ea0"
              />
              <Bar dataKey="Number of Fires" barSize={20} fill="#ff7300" />
            </ComposedChart>
          </div>
          <br />
          <p>
            The following interactive map displays historic wildfire records
            across the United States. You are welcome to explore the map and
            take note of any patterns and correlations you see between region
            and wildfire rates. Please allow 10 seconds-1 minute for the map to
            load, depending on your computer specifications.
          </p>
        </Layout>
      </div>
      <div className="flex justify-center items-center flex-col mt-10 pb-10">
        <div
          ref={mapContainer}
          className="h-[500px] w-[60%] font-Messina"
        ></div>
      </div>
      <div className="h-[200px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">Data Citation</p>
          <p className="w-[800px]">
            Chart data from Bankrate, U.S. wildfire statistics 2022. Map data
            from The Wildland Fire Interagency Geospatial Services (WFIGS)
            Group. Criteria were determined by an NWCG Geospatial Subcommittee
            task group.
          </p>
        </Layout>
      </div>
      <div className="h-[120px] flex justify-center items-center text-[30px] underline font-Messina border-b-2">
        <Layout>
          <Link to="/energy">Next section</Link>
        </Layout>
      </div>
    </div>
  );
};

export default Land;
