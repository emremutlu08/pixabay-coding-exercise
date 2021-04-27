/* React */
import React from "react";

/* Styles */
import classes from "./ImageDetail.module.css";

/* Imports */
import ImageInformations from "../../components/imageInformations/imageInformations";

/* This is the image detail page */

const ImageDetail = (props) => {
  const data = props.location.state;
  return (
    <div className={classes.container}>
      <img
        src={data.webformatURL}
        srcSet={`${data.imageURL} 1x, ${data.largeImageURL} 2x, ${data.fullHDURL} 3x`}
        alt={data.tags}
        className={classes.mainImage}
      />
      <ImageInformations data={data} />
    </div>
  );
};

export default ImageDetail;
