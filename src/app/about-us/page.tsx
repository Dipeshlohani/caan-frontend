'use client';
import React, { useEffect, useState, FC } from "react";
import styles from "./styles.module.css";
import { NextPage } from "next";

const AboutUs = () => {
  const [topData, setTopData] = useState({ TopTitle: "", TopDesc: "", TopImage: "", CardTitle1: "", });
  
  useEffect(() => {
   fetch("http://localhost:1337/api/about-uses?populate=*")
      .then((response) => response.json())
      .then((data) => {
        const topItem = data.data[0];
        if (topItem) {
          const imageUrl = topItem.attributes.TopImage.data.attributes.formats.small.url;
          setTopData({
            TopTitle: topItem.attributes.TopTitle,
            TopDesc: topItem.attributes.TopDesc,
            TopImage: imageUrl,
            CardTitle1: topItem.attributes.CardTitle1,
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
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
            </div>
          </div>
        </div>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>Your title text goes here</div>
            <div className={styles.textcontent}>
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
            </div>
          </div>
        </div>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>Your title text goes here</div>
            <div className={styles.textcontent}>
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
            </div>
          </div>
        </div>
      </div>
      <ChairmanMsg />
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
  TopImage: string
 }
}

const TopMessage: NextPage<Props> = (props) => {
  const { topData } = props;
  return (
    <div>
      <div className={styles.wholecontainer}>
        <div className={styles.imagecont}>
        <img src={topData.TopImage} alt="image" />
        </div>
        <div className={styles.rightfield}>
          <div className={styles.toptitle}>{topData.TopTitle}</div>
          <div className={styles.topdesc}>{topData.TopDesc}</div>
        </div>
      </div>
    </div>
  );
};

const ChairmanMsg = () => {
  return(
    <div>
      <div className={styles.completecontainer}>
      <div className={styles.msgcontainer}>
      
      
      <div className={styles.msgtitle}>
        title
      </div>
      <div className={styles.msgdesc}>
      Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.  Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
      </div>
      <div className={styles.chairmanname}>
      name
      </div>
      </div>
      <div className={styles.chairmanimage}>
        <img src="/rowwdy.jpg" alt="image" />
      </div>
    </div>
    </div>
  );
  
  };


export default AboutUs;
