import React from "react";

import { BsChatQuote } from "react-icons/bs";
import { MdHistoryEdu } from "react-icons/md";
import { MdOutlineSummarize } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { TbArrowBigRightLines } from "react-icons/tb";

import styles from "./index.module.css";

export class Quote extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <BsChatQuote />
      </div>
    );
  }
}
export class Story extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <MdHistoryEdu />
      </div>
    );
  }
}
export class Summary extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <MdOutlineSummarize />
      </div>
    );
  }
}
export class NewBook extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <GiBookshelf />
      </div>
    );
  }
}
export class CurrentBook extends React.Component {
  render() {
    return (
      <div className={styles.height}>
        <GiSpellBook />
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
export class LinkTo extends React.Component {
  render() {
    return (
      <div className={styles.link}>
        <TbArrowBigRightLines />
      </div>
    );
  }
}
