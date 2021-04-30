import React from "react";
import mountain from "../../../images/s1.jpg";
import river from "../../../images/s2.jpg";
import air from "../../../images/s3.jpg";
import Services from "../Services/Services";

const serviceData = [
  {
    serviceName: "Travel On Air",
    img: air,
  },
  {
    serviceName: "Go To Mountain",
    img: river,
  },
  {
    serviceName: "Go To Mountain",
    img: mountain,
  },
];
const ServicesDetails = () => {
  return (
    <div>
      <div className="section-title text-center">
        <h2> our services </h2>
        <p>make your life pleasure</p>
      </div>

      <div>
        {serviceData.map((service) => (
          <Services service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;
