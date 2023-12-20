import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import styles from './activitydetail.module.css';

async function getData(id) {
  var options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '',
      Authorization: `bearer ${process.env.API_KEY}`,
    },
  };
  // let url = `${process.env.HOST}/api/activities/${id}?populate=*`;
  let url = `${process.env.HOST}/api/activities?filters[slug][$eq]=${id}&populate=*`;
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getPastActivities() {
  var options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '',
      Authorization: `bearer ${process.env.API_KEY}`,
    },
  };
  let today_day = new Date().toISOString().split('T')[0];
  let url = encodeURI(
    `${process.env.HOST}/api/activities/populate[0]=Activity&filters[date][$gt]=${today_day}`
  );
  url = `http://localhost:1337/api/activities?populate=*&filters[date][$lt]=${today_day}`;
  const res = await fetch(url, options);
  return res.json();
}

const ActivityDetail = async ({ activityId }) => {
  let { data } = await getData(activityId);
  if (!data) {
    throw new Error('Activity not found');
  }
  data = data[0]?.attributes;
  let pastActivities = await getPastActivities();
  let img_url = process.env.HOST + data.img_url?.data.attributes.url;
  let date = data.date;
  let description = data.description;
  let title = data.name;
  return (
    <div className="container">
      <div className={styles.activity__Container}>
        <div className={styles.activity__Contents}>
          <h1>{title}</h1>
          <div className="">
            <Image
              src={img_url}
              alt="activity banner"
              width="900"
              height="550"
            />
          </div>
          <h4>{date}</h4>
          <div>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
        <div className={styles.activity__Lists}>
          <h3>Other Latest Activities</h3>
          <div className={styles.activity__Lists__ItemWrapper}>
            {pastActivities.data.map((item) => (
              <div
                className={styles.activity__Lists__Item}
                key={item.attributes.name}
              >
                <div className={styles.activity__Lists__Image}>
                  <Image
                    src={
                      process.env.HOST +
                      item.attributes.img_url.data.attributes.url
                    }
                    height={70}
                    width={100}
                    alt="img"
                  />
                </div>
                <div className="">{item.attributes.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;

// asdas