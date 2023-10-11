import React from 'react'
import styles from "./dashboard.module.css";
import { Card } from "./Card";
import { TbPlaneTilt } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { CiServer } from "react-icons/ci";

const DashboardCard = () => {
  return (
    <div className={styles.wrapper}>
      <Card Icon={TbPlaneTilt} title="Air Traffic System" />
      <Card Icon={RiComputerLine} title="Airport Info System" />
      <Card Icon={CiServer} title="Central Navigation System" />
      <Card Icon={FaPlaneDeparture} title="Search And Rescue" />
    </div>
  )
}
1
export default DashboardCard;
