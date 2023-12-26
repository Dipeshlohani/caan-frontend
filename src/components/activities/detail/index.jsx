import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ReactHtmlParser from 'react-html-parser';

import styles from './activitydetail.module.css';
import Link from 'next/link';

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

const applyStyles = (node) => {
  if (node.name === 'figure' && node.attribs && node.attribs.class) {
    const classNames = node.attribs.class.split(' ');

    // Check for specific class names and apply styles accordingly
    if (classNames.includes('image-style-align-left')) {
      node.attribs.style =
        (node.attribs.style || '') +
        'float: left !important; margin-right: 10px !important;'; // Adjust styles as needed
    } else if (classNames.includes('image-style-align-right')) {
      node.attribs.style =
        (node.attribs.style || '') +
        'float: right !important; margin-left: 10px !important;'; // Adjust styles as needed
    } else if (classNames.includes('image-style-align-center')) {
      node.attribs.style =
        (node.attribs.style || '') +
        'display: block !important; margin: 0 auto !important;'; // Adjust styles as needed
    }
  }
  return undefined; // Return undefined to apply default behavior
};

const ActivityDetail = async ({ activityId }) => {
  let { data } = await getData(activityId);
  if (!data) {
    throw new Error('Activity not found');
  }
  data = data.length > 0 ? data[0]?.attributes : data.attributes;
  let pastActivities = await getPastActivities();
  let img_url = process.env.HOST + data?.img_url?.data.attributes.url;
  let date = data?.date;
  let description = data?.description;
  let title = data?.name;

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
          <div>{ReactHtmlParser(description, { transform: applyStyles })}</div>
        </div>
        <div className={styles.activity__Lists}>
          <h3>Other Latest Activities</h3>
          <div className={styles.activity__Lists__ItemWrapper}>
            {pastActivities.data.map((item) => (
              <Link
                href={`/activities/${item.attributes.slug}`}
                style={{ textDecoration: 'none' }}
              >
                {console.log(item)}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
