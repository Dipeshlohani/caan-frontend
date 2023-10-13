'use client';
import React, { useEffect, useState, FC } from "react";
import styles from "./styles.module.css";
import { NextPage } from "next";

const AboutUs = () => {
  const [topData, setTopData] = useState({ TopTitle: "", TopDesc: "", TopImage: "", CardTitle1: "", CardDesc1: "",CardTitle2: "", CardDesc2: "",CardTitle3: "", CardDesc3: "", HeadMsgTitle: "", HeadMsgDesc: "", HeadName: "", HeadImage: "", });
  
  useEffect(() => {
   fetch("http://localhost:1337/api/about-uses?populate=*")
      .then((response) => response.json())
      .then((data) => {
        const topItem = data.data[0];
        if (topItem) {
          const imageUrl = topItem.attributes.TopImage.data.attributes.url;
          const headimage = topItem.attributes.HeadImage.data.attributes.url;
          setTopData({
            TopTitle: topItem.attributes.TopTitle,
            TopDesc: topItem.attributes.TopDesc,
            TopImage: imageUrl,
            CardTitle1: topItem.attributes.CardTitle1,
            CardTitle2: topItem.attributes.CardTitle2,
            CardTitle3: topItem.attributes.CardTitle3,
            CardDesc1: topItem.attributes.CardDesc1,
            CardDesc2: topItem.attributes.CardDesc2,
            CardDesc3: topItem.attributes.CardDesc3,
            HeadMsgTitle: topItem.attributes.HeadMsgTitle,
            HeadMsgDesc: topItem.attributes.HeadMsgDesc,
            HeadName: topItem.attributes.HeadName,
            HeadImage: headimage,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
    <TopMessage topData={topData} />
      <div className={styles.gridcontainer}>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>{topData.CardTitle1}</div>
            <div className={styles.textcontent}>
             {topData.CardDesc1}
            </div>
          </div>
        </div>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>{topData.CardTitle2}</div>
            <div className={styles.textcontent}>
            {topData.CardDesc2}
            </div>
          </div>
        </div>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>{topData.CardTitle3}</div>
            <div className={styles.textcontent}>
            {topData.CardDesc3}
            </div>
          </div>
        </div>
      </div>
      <ChairmanMsg topData={topData} />
      <TeamField />
    </>
  );
};

const TeamField = () => {
  const teamMembers = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <>
    <div className={styles.App}>Our Team</div>
    <div className={styles.teamcontainer}>
      {teamMembers.map((member) => (
        <div className={styles.teamfieldcontainer} key={member}>
          <div className={styles.teamfield}>
            <div className={styles.teamimage}>
              <img src={`/rowwdy.jpg`} alt={`Team Member ${member}`} />
            </div>
            <div className={styles.textname}>Your</div>
            <div className={styles.textpost}>CEO</div>
          </div>
        </div>
      ))}
      </div>
    
    </>
  );
};

interface Props{
 topData: {
  TopTitle: string,
  TopDesc: string,
  TopImage: string,
  HeadMsgTitle: string,
  HeadMsgDesc: string,
  HeadName:string,
  HeadImage:string,
 }
}

const TopMessage: NextPage<Props> = (props) => {
  const { topData } = props;
  // console.log(topData.TopImage);
  let img_url = `http://localhost:1337${topData.TopImage}`
  return (
    <div>
      <div className={styles.wholecontainer}>
        <div className={styles.imagecont}>
        <img src={img_url} alt="image" />
        </div>
        <div className={styles.rightfield}>
          <div className={styles.toptitle}>{topData.TopTitle}</div>
          <div className={styles.topdesc}>{topData.TopDesc}</div>
        </div>
      </div>
    </div>
  );
};

const ChairmanMsg: NextPage<Props> = (props) => {
  const { topData } = props;
  let img_url = `http://localhost:1337${topData.HeadImage}`
  return(
    <div>
      <div className={styles.completecontainer}>
      <div className={styles.msgcontainer}>
      
      
      <div className={styles.msgtitle}>
        {topData.HeadMsgTitle}
      </div>
      <div className={styles.msgdesc}>
    {topData.HeadMsgDesc}
      </div>
      <div className={styles.chairmanname}>
      {topData.HeadName}
      </div>
      </div>
      <div className={styles.chairmanimage}>
        <img src={img_url} alt="image" />
      </div>
    </div>
    </div>
  );
  
  };


export default AboutUs;
