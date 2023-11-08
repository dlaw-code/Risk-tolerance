import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { BarChart } from "@mui/x-charts";
import NavItem2 from "./NavItem2";
import "./ht.css";
import axios from "axios";

const HeroText = () => {
  const [sliderValue, setSliderValue] = useState(4); // Set a minimum value of 1
  const [chartData, setChartData] = useState([
    18,4,2,7,5,15,7,12,19,25, // Ensure chart data is never zero
  ]);
  const transformData = (data) => {
    // Remove _id and __v from the object
    const { _id, __v, riskTolerance, ...dataWithoutIdAndV } = data;

    // Extract the values of the remaining keys
    const valuesArray = Object.values(dataWithoutIdAndV);

    return valuesArray;
  };
  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/user/portfolio/${sliderValue}`
      );
      const responseData = response.data;
      console.log(responseData);
      // Transform the data and set it as chartData
      const transformedData = transformData(responseData);

      console.log(transformedData);
      setChartData(transformedData);
    };

    fetchData();
  }, [sliderValue]);

  return (
    <div className="w-11/12 md-w-10/12 mx-auto pt-10 flex-dc">
      <div className="flex gap-8 justify-between">
        <div className="flex gap-6 flex-col w-1/2 text-left">
          <h1 className="text-white font-bold text-5xl">
            Your Personalized Investment Journey Starts Here
          </h1>
          <p className="text-sm text-white mine">
            Let RoboAdvisor intelligently manage your investments based on your
            risk level. RoboAdvisor is a cutting-edge online platform dedicated
            to transforming the way you invest. We understand that managing
            investments can be overwhelming and time-consuming. That's why we've
            developed an innovative solution to make your investment journey
            smooth, intelligent, and tailored to your unique financial goals.
          </p>
          <div className="flex items-center gap-8 mt-8">
            <NavItem2 text={"Get Started"} url={"#start"} />
            <NavItem2 text={"Invest Now"} url={"#invest"} />
          </div>
        </div>
        <div className="w-1/2 relative">
          <div
            className="absolute chart-container col span-1-of-2" // Add a class for styling and transformation
            style={{
              top: "15px",
              left: "37px",
              width: "312px",
              height: "143px",
              borderRadius: "12px",
              padding: "2px",
              // Rotate the chart 270 degrees clockwise
              zIndex: "1", // Ensure the chart is above the slider
            }}
          >
            {/* <div className="red">Risk Score : {sliderValue}</div> */}

            <div className="barchart">
              <BarChart
                xAxis={[
                  {
                    id: "barCategories",
                    data: [
                      "NS",
                      "FS",
                      "TS",
                      "ES",
                      "NB",
                      "FB",
                      "CM",
                      "RE",
                      "TB",
                      "A",
                    ],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: chartData,
                  },
                ]}
                width={505}
                height={300}
              />
            </div>
          </div>
          <div className="slider">
            <div className="text">
              Risk Tolerance: <span className="slidervalue">{sliderValue}</span>
            </div>
            <div
              className="absolute slider-container" // Add a class for the slider
              style={{
                top: "15px",
                left: "37px",
                width: "312px",
                height: "183px",
                borderRadius: "12px",
                padding: "2px",

                // Ensure the slider is above the chart
              }}
            >
              <input
                className="ml-20 mt-6"
                type="range"
                min="0" // Set the minimum value of the slider to 1
                max="10"
                step="1"
                value={sliderValue}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="meaningContainer">
        <div className="left">
          <p>
            NS - <span>Nigerian Stocks {" " + chartData[0] + "%"}</span>
          </p>
          <p>
            FS - <span>Foreign Stocks{" " + chartData[1] + "%"}</span>
          </p>
          <p>
            TS - <span>Tech Stocks{" " + chartData[2] + "%"}</span>
          </p>
          <p>
            ES - <span></span>Emerging Stocks{" " + chartData[3] + "%"}
          </p>
        
        </div>
<div className="middle">
<p>
            NB - <span>Nigerian Bonds{" " + chartData[4] + "%"}</span>
          </p>
          <p>
            FB - <span>Foriegn Bonds{" " + chartData[5] + "%"}</span>
          </p>

          <p>
            CM - <span>Commodities{" " + chartData[6] + "%"}</span>
          </p>

</div>
        <div className="right">
        
          <p>
            RE - <span>Real Estate{" " + chartData[7] + "%"}</span>
          </p>
          <p>
            TB - <span>T-bills{" " + chartData[8] + "%"}</span>
          </p>
          <p>
            A - <span>Alternative{" " + chartData[8] + "%"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
