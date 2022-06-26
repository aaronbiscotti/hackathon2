import React from "react";
import HeatWave from "../../assets/images/heat_wave.jpg";
import Layout from "../../components/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const data = [
  {
    name: "1990",
    China: 1.91454256354691,
    India: 0.644102026461799,
    "Russian Federation": 14.63052427,
  },
  {
    name: "1995",
    China: 2.56036618514261,
    India: 0.768837675103507,
    "Russian Federation": 10.54686908,
  },
  {
    name: "2000",
    China: 2.64847997655715,
    India: 0.88982752,
    "Russian Federation": 10.16051714,
  },
  {
    name: "2005",
    China: 4.46347375203265,
    India: 0.991399583,
    "Russian Federation": 10.66654578,
  },
  {
    name: "2010",
    China: 6.332165911,
    India: 1.349214466,
    "Russian Federation": 11.08271541,
  },
  {
    name: "2015",
    China: 7.124222747,
    India: 1.641198393,
    "Russian Federation": 10.80890931,
  },
  {
    name: "2018",
    China: 7.352262682,
    India: 1.799825446,
    "Russian Federation": 11.12661837,
  },
];

const Atmosphere = () => {
  return (
    <div className="w-full">
      <img src={HeatWave} className="h-[520px] w-full object-cover" />
      <div className="h-[100px] flex items-center font-Messina border-b-2">
        <Layout>
          <p className="w-[800px]">
            "Closed due to Heat Wave." Chalk message in the window of an art
            gallery (image by MTSOfan, July 13, 2013. Open image in new tab to
            see full photo)
          </p>
        </Layout>
      </div>
      <div className="pt-10 w-full flex justify-center items-center">
        <Layout>
          <h1 className="text-[35px] header mb-5">
            Understanding what's happening in our atmosphere
          </h1>
          <p>
            The primary cause of global warming lies in the build up of carbon
            dioxide (CO2) in our atmosphere. This layer of CO2 acts as a
            blanket, absorbing infrared energy from the sun's rays reflected
            from Earth and preventing energy from returning to space. Burning
            fossil fuels such as coal, natural gas, and oil for energy releases
            CO2 into our atmosphere. Human activities in waste management and
            agriculture also release other gases such as methane and nitrous
            oxide, which contribute to the greenhouse effect and gradually heat
            the Earth's surface.
          </p>
          <br />
          <p>
            Because CO2 survives in the atmosphere for centuries, the effects of
            global warming are aggravated over time. A seemingly minute increase
            in temperature of 2 degrees Celsius (3.6 degrees Fahrenheit) can
            prompt devastating tolls to Earth's ecosystems and human health.
            Understanding that we must act fast when some changes are still
            reversible is crucial to our progress toward a healthy, sustainable
            world.
          </p>
          <p className="italic">
            <br />
            Did you know?
          </p>
          <p>
            Farts from animals like cows and pigs are a large contributor to
            global warming. As more livestock are bred to compensate for the
            increasing global population, farts and burps from animals release
            methane into the atmosphere, helping prevent nearly 88% of energy
            from leaving Earth.
          </p>
        </Layout>
      </div>
      <div className="h-[400px] w-full flex justify-center items-center flex-col font-Messina">
        <h1 className="mb-2">
          CO2 Emissions (metric tons per capita) from Prominent Countries,
          1990-2018
        </h1>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 0 }}
          className="font-Messina"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="China" stroke="#f7bc00" />
          <Line type="monotone" dataKey="India" stroke="#2493ef" />
          <Line type="monotone" dataKey="Russian Federation" stroke="#f84c1a" />
        </LineChart>
        <p className="text-[10px]">
          Data from Climate Watch 2020. GHG Emissions. Washington, DC: World
          Resources Institute. Available{" "}
          <a
            href="https://www.climatewatchdata.org/ghg-emissions"
            className="anchors"
          >
            here
          </a>
        </p>
      </div>
      <div className="pb-10">
        <Layout>
          <p>
            This graph above depicts CO2 emissions in metric tons per capita
            from China, India, and Russia, which are countries that have been
            active contributors to carbon dioxide emissions for the past 20
            years. Note that the statistical definition of{" "}
            <span className="italic">per capita</span> in this graph is the
            measurement of how much carbon dioxide is emitted from each person
            in the population on a one-year basis. For instance, India, with a
            population of around 1.35 billion people in 2018, emitted 1.8 metric
            tons per capita of CO2 in the same year. Therefore, India as a whole
            emitted roughly around 2.43 billion tons of CO2 in 2018.
          </p>
          <br />
          <p>
            If these trends continue to increase for all countries, we will see
            increasing numbers of days with extreme weather throughout the year,
            mass extinctions in animal and human species, and droughts that
            devastate food supplies, which cause increased levels of poverty.
          </p>
        </Layout>
      </div>
      <div className="h-[120px] flex justify-center items-center text-[30px] underline font-Messina">
        <Layout>
          <Link to="/temperature/ocean">Next section</Link>
        </Layout>
      </div>
    </div>
  );
};

export default Atmosphere;
