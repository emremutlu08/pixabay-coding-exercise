/* React */
import React from "react";

/* Styles */
import classes from "./ImageDetail.module.css";

/* Icons */
import {
  FaCloudDownloadAlt,
  FaEye,
  FaTag,
  FaSave,
  FaImage,
} from "react-icons/fa";

const ImageDetail = (props) => {
  console.log(props);
  const data = props.location.state;
  return (
    <div className={classes.container}>
      <img
        src={data.webformatURL}
        srcSet={`${data.imageURL} 1x, ${data.largeImageURL} 2x, ${data.fullHDURL} 3x`}
        alt={data.tags}
        className={classes.mainImage}
      />
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
    </div>
  );
};

export default ImageDetail;
