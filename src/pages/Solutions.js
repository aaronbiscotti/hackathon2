import React from "react";
import Layout from "../components/Layout";

const Solutions = () => {
  return (
    <>
      <div className="h-[250px] w-full flex justify-center items-center border-b-2">
        <Layout>
          <p className="font-Messina">05</p>
          <h1 className="text-[50px] header">Solutions</h1>
        </Layout>
      </div>
      <div className="py-10 h-[900px] ">
        <Layout>
          <h1 className="text-[35px] header mb-5">What you can do to help</h1>
          <p>
            There is no single solution to reversing global warming. The climate
            change crisis is an issue which exceeds the abilities of our current
            technologies... but it's something humans can reverse. The only way
            we can reverse the effects of global warming is if{" "}
            <span className="bold">humans</span> have a clear understanding of
            its implications. Spreading awareness of climate change to your
            friends, family members, and even local politicians may not seem
            like a large contribution to the cause, but it will entail a greater
            wariness of your use of resources. The following suggestions are
            simply a few ways you can help our planet achieve sustainability and
            protect your environment from the comfort of your home.
          </p>
          <ul className="list-disc mt-5 ml-10">
            <li>
              <span className="font-bold">Reduce, reuse, recycle.</span> Whether
              it be an old metal water bottle or a used laptop you don't need
              anymore, try to find a way to reuse it. If you can't figure out a
              way, recycle it! Organize your waste according to material and be
              aware of what you can and can't recycle. If you need to dispose of
              electronic waste, contact your local electronics recycling plants
              or non-profits to see if they accept e-waste donations.
            </li>
            <li>
              <span className="font-bold">Enjoy the cold while it lasts.</span>{" "}
              If it's not that hot or cold, turn off your AC
              unit/furnace/boiler/radiator. Not only do they destroy your
              electricity bill, they also destroy the environment! Almost 10% of
              global electricity consumption is wasted in air conditioners.
              Conserve your resources and don't waste electricity!
            </li>
            <li>
              <span className="font-bold">
                Invest in sustainable technology and energy-efficient
                appliances.
              </span>{" "}
              Energy efficient appliances are the best way to reduce carbon
              emissions without pouring your wallet into a product. When
              purchasing washing machines, refridgerators, and other appliances,
              look for the Energy Star label, which will tell you how energy
              efficient the product is.
            </li>
            <li>
              <span className="font-bold">Drive green.</span> Try to take public
              transportation or bike on commutes as much as possible. Motor
              vehicles release over 1.6 billion tons of carbon emissions into
              the atmosphere every year and contribute to the greenhouse effect.
              Especially with today's gas prices, you may want to think about
              investing in an electric vehicle or a quality bicycle.
            </li>
            <li>
              <span className="font-bold">Lastly, spread the word!</span> One of
              the biggest ways you can make an impact on climate change is by
              letting your voice be heard. Whether it be in-person or through
              social media, educate family and friends and reach out to
              political representatives in your area to help promote climate
              change policies. Remember, you can help make a difference!
            </li>
          </ul>
        </Layout>
      </div>
    </>
  );
};

export default Solutions;
