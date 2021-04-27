/* React */
import React from "react";

/* Styles */
import classes from "./pageChanger.module.css";

/* Svgs */
import { ReactComponent as ArrowIcon } from "../../svg/icons-arrow.svg";

const pageChanger = (props) => {
  const { onClickUp, onClickDown, pageNumber } = props;
  return (
    <span className={classes.stickyPages}>
      <span className={classes.stickyContent}>
        <span className={classes.arrowCircle} onClick={onClickUp}>
          <ArrowIcon className={classes.arrowUp} />
        </span>
        {pageNumber}
        <span className={classes.arrowCircle} onClick={onClickDown}>
          <ArrowIcon className={classes.arrowDown} />
        </span>
      </span>
      <span className={classes.pageChanger}>Page Changer</span>
    </span>
  );
};

export default pageChanger;
