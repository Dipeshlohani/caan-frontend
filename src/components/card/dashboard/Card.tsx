import React, { FC } from 'react';
import styles from "./dashboard.module.css";
// import { TbPlaneTilt } from "react-icons/tb";
import { NextPage } from "next";

interface Props {
  Icon: FC;
  title: string;
}


export const Card: NextPage<Props> = (props) => {
  const { Icon, title } = props;
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <Icon style={{ color: '#2161CD', fontSize: '1.5em', paddingTop: '40px', fontWeight: 'bold' }} />
      </div>
      <div className={styles.text}>
        {title}
      </div>
    </div>
  )
}
