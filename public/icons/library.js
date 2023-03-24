import React from "react";

import { HiOutlineViewBoards } from "react-icons/hi";
import { BsCollection } from "react-icons/bs";
import { BsZoomOut } from "react-icons/bs";
import { MdOutlineRecentActors } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";

import styles from "./index.module.css";

export class Shelf extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <HiOutlineViewBoards />
      </div>
    );
  }
}
export class Collection extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <BsCollection />
      </div>
    );
  }
}
export class ZoomOut extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <BsZoomOut />
      </div>
    );
  }
}
export class Recent extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <MdOutlineRecentActors />
      </div>
    );
  }
}
export class All extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <GiBookshelf />
      </div>
    );
  }
}
export class Clear extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <AiOutlineClear />
      </div>
    );
  }
}
