import React from "react";
import { Link } from "react-router-dom"; /* We use <Link to /> instead of <a href /> */

/* Styles */
import classes from "./galleryImage.module.css";

const galleryImage = (props) => {
  const { data, index } = props;
  return (
    <Link to={{ pathname: `/${data.id}`, state: data }}>
      <img
        loading={index > 5 ? "lazy" : "eager"}
        src={data.webformatURL}
        srcSet={`${data.webformatURL} 1x, ${data.imageURL} 2x`}
        alt={data.tags}
        className={classes.galleryImg}
      />
    </Link>
  );
};

export default galleryImage;
