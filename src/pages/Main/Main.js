/* React */
import React, { useEffect, useState } from "react";

/* Styles */
import classes from "./Main.module.css";

/* Imports */
import api from "../../utils/api";
import PageChanger from "../../components/pageChanger/pageChanger";
import GalleryImage from "../../components/galleryImage/galleryImage";

const Main = () => {
  // When we change the page, it helps update our page
  const [pageNumber, setPageNumber] = useState(1);
  // We can carry out our content from apiCall
  const [imageContent, setImageContent] = useState({});

  // Our api call, we can set & manipulate q and page params on it.
  const apiCall = async (q, page) => {
    const res = await api.get("", {
      params: { q, image_type: "image", page },
    });
    return res;
  };

  // Update our content whenever page changes.
  useEffect(() => {
    const content = apiCall("yellow", pageNumber);
    content.then((result) => setImageContent(result));
  }, [pageNumber]);

  /* Pagenation functions */
  const decreasePageNumber = (pageNumber) => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const increasePageNumber = (pageNumber) => {
    if (pageNumber < 500) setPageNumber(pageNumber + 1);
  };

  // If data is not ready yet run below!
  if (!imageContent.data) {
    return <h1 className={classes.main}>Loading...</h1>;
  }

  // If data is ready run below!
  return (
    <div className={classes.main}>
      <PageChanger
        onClickUp={() => increasePageNumber(pageNumber)}
        onClickDown={() => decreasePageNumber(pageNumber)}
        pageNumber={pageNumber}
      />
      <div className={classes.galleryGrid}>
        {imageContent.data.hits.map((data, index) => {
          // Firstly user will see the first 5 images, so others can be loading later.
          // It hepls to save resources.

          return <GalleryImage data={data} index={index} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Main;
