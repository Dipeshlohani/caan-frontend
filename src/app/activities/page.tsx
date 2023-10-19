'use client';
import CardSlider from "../../components/slider";
import { Card } from "@/components/card/dashboard/Card";
import { TbPlaneTilt } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { CiServer } from "react-icons/ci";


const sampleData = [
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
  { Icon: RiComputerLine, title: "Airport Info System" },
  { Icon: CiServer, title: "Central Navigation System" },
  { Icon: FaPlaneDeparture, title: "Search And Rescue" },
  { Icon: TbPlaneTilt, title: "Something Traffic System" },
  { Icon: TbPlaneTilt, title: "Next Traffic System" },
]
export default function Activities() {
  return (
    <>
      <CardSlider>
        {
          sampleData.map(item => (
            <Card key={item.title} Icon={item.Icon} title={item.title} />
          ))
        }
      </CardSlider>
      <style jsx global>{`
        @import "~slick-carousel/slick/slick.css"; 
        @import "~slick-carousel/slick/slick-theme.css";
       
         `}
      </style>
    </>
  )
}
