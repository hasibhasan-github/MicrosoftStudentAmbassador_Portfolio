/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mlsaportfolio.3a8a8307.jpg";

const imageAltText = "Hasib is recieveing Vice Chancellor Merit Award from the Vice Chancellor of IUB";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Simulating Operations of a DOHS Management Sytstem Software",
    description:
      "This project serves as a comprehensive showcase of a sophisticated management system software developed in Java, utilizing the Model-View-Controller (MVC) architecture and JavaFX technology. The software is designed to simulate and efficiently manage the operations of a fictitious organization called 'DOHS' (Defence Officers' Housing Scheme).",
    url: "https://github.com/hasibhasan-github/SimulatingOperationsOfADOHS_Management_System_Software/tree/SimulatingOperationsOfDOHS_Management_System_Software",
  },
  {
    title: "Web Application To Help Farmers Find And Buy Supplies At The Best Prices",
    description:
      "In this project for the Database Management System course at IUB, we aim to develop a web application facilitating farmers in efficiently finding and purchasing agricultural supplies at the most competitive prices.",
    url: "https://github.com/hasibhasan-github/IUB_CSE303_DatabaseManagementSystem_WebApplicationTo_helpFarmers_FindandBuySuppliesAtTheBestPrices/tree/WebApplicationToHelpFarmersFindAndBuySuppliesAtTheBestPrices",
  },
  {
    title: "IoT-based Hemoglobin Level Detection system for Anemia Patients with image processing",
    description:
      "This research project offers an IoT-powered solution for non-invasive hemoglobin level estimation in anemia patients. Leveraging image processing techniques and CNN, our system delivers real-time results via IoT, enhancing healthcare accessibility and patient care.",
    url: "https://github.com/hasibhasan-github/IoT-based-Hemoglobin-Level-Detection-system-for-Anemia-Patients-with-image-processing",
  },
  {
    title: "Data deduplication using dynamic perfect hash techniques",
    description:
      "In Computer Science hashing is use for storing data retrieving data in constant time.On the other hand, with a huge use and collection of data, cloud storage has gained popularity among the users. In cloud storage most of the data is redundant. We are showing a mechanism for data deduplication counting using dynamic perfect hash techniques.",
    url: "https://github.com/hasibhasan-github/Data_deduplication_using_dynamic_perfect_hash_techniques.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
