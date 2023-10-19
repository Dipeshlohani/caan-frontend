'use client'

import Activity from "../../../components/card/activity/Card"
import Banner from '@/components/banner'
import SubsribeBanner from "@/components/subscribe";
import Image from 'next/image'
import { FiHome } from "react-icons/fi";

async function getData() {
  const res = await fetch('http://localhost:1337/api/activities')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default function AboutActivity({ params }: { params: { activityId: string } }) {
  // let data = await getData();
  //fetch  {params.activityId}
  const paragraph = ` SSL (SANKALPA SHIPPING AND LOGISTICS PVT. LTD.) Specializes in providing
      top- tier airfreight solutions to meet the diverse needs of our clients.
      With our extensive network of global partners and a dedicated team of
      logistics experts, we ensure that your cargo reaches its destination
      swiftly and securely. Whether you require expedited shipping for
      high-value goods, just-in-time inventory management, or customized supply
      chain solutions, SSL has the expertise to deliver on your logistics goals.
      <br />
      <br />
      Our extensive network of global partners and a dedicated team of logistics
      experts, we ensure that your cargo reaches its destination swiftly and
      securely. Whether you require expedited shipping for high-value goods,
      just-in-time inventory management, or customized supply chain solutions,
      SSL has the expertise to deliver on your logistics goals.
      <br/><br/> Whether you require expedited shipping for high-value
goods, just-in-time inventory management, or customized supply chain
solutions, SSL has the expertise to deliver on your logistics goals. `;

  const otherItems = [
    {
      image: '/activity_small_1.png',
      name: 'Lorem ipsum dolar consecut en paradel marco',
    },
    {
      image: '/activity_small_2.png',
      name: 'Lorem ipsum dolar consecut en paradel marco',
    },
    {
      image: '/activity_small_3.png',
      name: 'Lorem ipsum dolar consecut en paradel marco',
    },
    {
      image: '/activity_small_4.png',
      name: 'Lorem ipsum dolar consecut en paradel marco',
    },
    {
      image: '/activity_small_5.png',
      name: 'Lorem ipsum dolar consecut en paradel marco',
    },
    {
      image: '/activity_page.png',
      name: 'Lorem ipsum dolar consecut en paradel marco',
    },
  ];
  return (
    <div>
      {/* {<HomeIcon />} */}
      <Banner name="Activites" title="ANSSD Yearly Conference" icon={<FiHome />} />
      <div className="container">
        <div className="activity__Container">
          <div className="activity__Contents">
            <h1>ANSSD Yearly Conference</h1>
            <div className="">
              <Image src="/activity_page.png" alt="activity banner" width="950" height="550" />
            </div>
            <h4>17 January 2023</h4>
            <div dangerouslySetInnerHTML={{ __html: paragraph }} ></div>
          </div>
          <div className="activity__Lists">
            <h3>Other Latest Activities</h3>
            <div className="activity__Lists__ItemWrapper">
              {otherItems.slice(0, 5).map((item) => (
                <div className="activity__Lists__Item" key={item.name}>
                  <div className="activity__Lists__Image">
                    <Image
                      src={item.image}
                      height={70}
                      width={100}
                      alt="img"
                    />
                  </div>
                  <div className="">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Activity /> */}
      </div>
      <SubsribeBanner />
      <style jsx>
        {`
          .activity__Container {
            width: 100%;
            display: flex;
            color: black;
            padding: 20px;
          }
          .activity__Contents {
            width: 70%;
            height: 100%;
            line-height: 36px;
            text-align: justify;
            padding: 20px;
          }
          .activity__Contents h4 {
            color: #2161CD;
          }

          .activity__Contents h1 {
            margin: 20px;
            padding-top: 30px;
          }
          .activity__Lists {
            width: 30%;
            height: 100%;
            border-radius: 10px;
            border: 1px solid #c8c8c8;
            background: #fff;
            margin: 70px 10px;
            padding: 20px 30px;
          }
          .activity__Lists__ItemWrapper {

          }
          
          .activity__Lists__Item { 
            display: flex;
            gap: 0px 10px;
            align-items: center;
            border-bottom: 1px solid #e3e3e3;
            margin: 10px 0px;
            padding: 20px 0px;
          }
          .activity__Lists__Item:nth-child(5){
            border-bottom:none !important;
          }
        `}
      </style>
    </div>
  );
}
