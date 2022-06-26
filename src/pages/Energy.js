import React from "react";
import Layout from "../components/Layout";
import NotFound from "../assets/icons/not_found.svg";

const Energy = () => {
  return (
    <>
      <div className="h-[250px] w-full flex justify-center items-center border-b-2">
        <Layout>
          <p className="font-Messina">02</p>
          <h1 className="text-[50px] header">Energy</h1>
        </Layout>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={NotFound} className="h-[25rem] mt-10" />
      </div>
      <div className="h-[150px] flex items-center font-Messina border-b-2 justify-center text-center">
        <Layout>
          <p className="w-[800px] mb-10">
            Sorry, there's nothing here yet! We're currently cooking up more
            articles with more accurate data from the most recent research in
            climate change. In the meantime, try out{" "}
            <a
              href="https://www.carbonfootprint.com/calculator.aspx"
              className="anchors"
            >
              this
            </a>{" "}
            tool to calculate your carbon footprint and start saving energy!
          </p>
        </Layout>
      </div>
    </>
  );
};

export default Energy;
