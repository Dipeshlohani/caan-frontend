import React from 'react'
import styles from "./dashboard.module.css";
import { Card } from "./Card";
import { TbPlaneTilt } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import CardSlider from "../../slider/index";

const sampleData = [
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
  { Icon: RiComputerLine, title: "Airport Info System" },
  { Icon: CiServer, title: "Central Navigation System" },
  { Icon: FaPlaneDeparture, title: "Search And Rescue" },
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
]

const DashboardCard = () => {
  return (
<<<<<<< HEAD
    <CardSlider>
      <div className={styles.container}>
=======
    <div className={styles.container}>
      <CardSlider>
>>>>>>> 292b7c6a680a79919be369d91b7ff94baae2cfe2
        {
          sampleData.map(item => (
            <Card key={item.title} Icon={item.Icon} title={item.title} />
          ))
        }
<<<<<<< HEAD
      </div>
    </CardSlider>
=======
      </CardSlider>
    </div>
>>>>>>> 292b7c6a680a79919be369d91b7ff94baae2cfe2
  )
}
1
export default DashboardCard;
