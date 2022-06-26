import React from "react";
import Layout from "../components/Layout";
import CoverImage from "../assets/images/home_cover.jpg";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import LeftMap from "../assets/images/climate_map_left.png";
import RightMap from "../assets/images/climate_map_right.png";
import Key from "../assets/images/key.png";
import BottomCoverImage from "../assets/images/home_bottom_cover.jpg";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src={CoverImage}
          className="object-cover object-top h-[600px] w-full"
        />
        <div className="w-full flex justify-center items-center h-[550px] text-[50px] text-white text-center absolute top-[100px] header">
          <h1 className="header font-bold">
            Our climate is changing,
            <br />
            so we should too.
          </h1>
        </div>
      </div>
      <div className="h-[100px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">
            The Aral Sea, located between Kazakhstan and Uzbekistan, has been
            shrinking since the 1960’s due to agricultural activity (image from
            NASA’s Johnson Space Center, March 31, 2021)
          </p>
        </Layout>
      </div>
      <div className="h-[300px] flex items-center text-center text-lg border-b-2">
        <Layout>
          <h3>
            Scientific research on our earth's climate is often diluted by tools
            which are difficult to access and large amounts of data unavailable
            to the public. Our project, Atmos, seeks to focus on the four
            primary areas of our planet that are influencing climate change :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF8330]">
              temperature
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001AFF] to-[#00A3FF]">
              energy
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007443] to-[#28CA00]">
              ecosystem
            </span>
            , and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#790FFF] to-[#1556D6]">
              people
            </span>
            . Through translating raw historical data into interactive graphs
            depicting the past, present, and future effects of global warming,
            you will gain a greater insight into the severity of human and
            natural activity from the past 100 years on a global scale. We hope
            to communicate through this gallery-like experience the urgency of
            our global predicament and what you can do to help reverse the
            effects of climate change before it's too late.
          </h3>
        </Layout>
      </div>
      <div className="h-[120px] border-b-2 flex justify-center font-Messina">
        <Link to="/temperature">
          <div className="border-l-2 w-[200px] h-[120px] flex justify-center items-center font-bold box-hover ease-in-out duration-200 relative">
            Temperature
          </div>
        </Link>
        <Link to="/energy">
          <div className="border-l-2 w-[200px] h-[120px] flex justify-center items-center font-bold box-hover ease-in-out duration-200">
            Energy
          </div>
        </Link>
        <Link to="/ecosystem">
          <div className="border-l-2 w-[200px] h-[120px] flex justify-center items-center font-bold box-hover ease-in-out duration-200">
            Ecosystem
          </div>
        </Link>
        <Link to="/people">
          <div className="border-x-2 w-[200px] h-[120px] flex justify-center items-center font-bold box-hover ease-in-out duration-200">
            People
          </div>
        </Link>
      </div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={LeftMap} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={RightMap} alt="Image two" />}
      />
      <div className="h-[250px] flex items-center font-Messina border-b-2">
        <Layout>
          <img src={Key} className="object-cover h-20 mb-10" />
          <p className="w-[1200px]">
            This map depicts a projected average increase in days with maximum
            temperatures above 90° Fahrenheit in the United States from
            1961-1990 (left) compared to the 2020s-2050s (right). If greenhouse
            gas emissions continue to affect our climate at their current rate,
            some states may see as much as a 4x increase in the number of days
            with maximum temperatures above 90° Fahrenheit over a 30 year
            period.
          </p>
        </Layout>
      </div>
      <div className="w-full h-[400px] border-b-2 flex">
        <div className="w-[50%] h-full border-r-2 flex justify-center items-center text-[30px] font-Messina">
          What does this mean?
        </div>
        <div className="w-[50%] h-full  flex justify-center items-center text-center">
          <p className="max-w-[650px]">
            Changing temperatures isn't a phenomenon exclusive to the United
            States. In other parts of the world, land surface temperatures have
            been increasing at different rates, most notably in the Arctic. A
            few degrees of temperature in Earth's surface temperatures may seem
            like a small change, but such changes pose risks of extreme
            heatwaves to millions of people worldwide, an accelerated Arctic
            meltdown, and the destruction of global ecosystems.
          </p>
        </div>
      </div>
      <div className="h-[120px] flex justify-center items-center text-[30px] underline font-Messina">
        <Layout>
          <Link to="/temperature">Next section</Link>
        </Layout>
      </div>
      <img
        src={BottomCoverImage}
        className="h-[500px] object-cover w-full object-center"
      />
      <div className="h-[100px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">
            The Athabasca Glacier in Banff/Jasper National Parks in Canada.
            Since the mid-1800s, the Athabasca Glacier has been melting at a
            rate of more than five meters a year (image from Sheila Sund, June
            28, 2014)
          </p>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
