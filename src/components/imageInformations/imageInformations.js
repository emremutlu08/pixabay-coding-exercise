/* React */
import React from "react";

/* Styles */
import classes from "./imageInformations.module.css";

/* Icons */
import {
  FaCloudDownloadAlt,
  FaEye,
  FaTag,
  FaSave,
  FaImage,
} from "react-icons/fa";

/* This is the information card */

const imageInformations = (props) => {
  const { data } = props;
  return (
    <div className={classes.informations}>
      <div className={classes.centeralized}>
        <img
          src={data.userImageURL}
          alt={data.user}
          className={classes.userImage}
        />{" "}
        {data.user}
      </div>
      <div className={classes.centeralized}>
        <FaTag />
        {data.tags}
      </div>
      <div className={classes.centeralized}>
        <FaEye /> {data.views}
      </div>
      <div className={classes.centeralized}>
        {" "}
        <FaCloudDownloadAlt /> {data.downloads}
      </div>
      <div className={classes.centeralized}>
        <FaImage /> {data.imageHeight} x {data.imageWidth}
      </div>
      <div className={classes.centeralized}>
        <FaSave /> {Number(data.imageSize / 1000000).toFixed(2)} MB
      </div>
    </div>
  );
};

export default imageInformations;
