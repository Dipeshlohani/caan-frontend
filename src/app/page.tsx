'use client';
import Hero from '../components/hero';
import Functions from '../components/functions';
import CallToAction from '../components/cta';
import ImportantLinks from '../components/importantLinks';
import OurMedias from '../components/medias';
import OurActivities from '../components/activities';
import AboutUs from '../components/about';
import Layout from "../components/layout";
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState({
    corousel: [],
    media: [],
    important_link: [],
    about_us: {},
    activities: {}
  });
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    var options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: '',
        Authorization: `bearer ${process.env.API_KEY}`,
      },
    };
    let url = `http://localhost:1337/api/activities?populate=*`;
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        data = data.data.slice(0, 4);
        setActivities(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])
  useEffect(() => {
    var options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: '',
        Authorization: `bearer ${process.env.API_KEY}`,
      },
    };
    let url = `http://localhost:1337/api/dashboards?populate[0]=corousel.img_url&populate[1]=important_link&populate[2]=media.img_url&populate[3]=about_us.img_url`;
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        data = data.data[0].attributes;
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Layout>
      <Hero carousel={data.corousel} />
      <Functions />
      <AboutUs about_us={data.about_us} />
      <OurActivities activities={activities} />
      <OurMedias media={data.media} />
      <ImportantLinks links={data.important_link} />
      <CallToAction />
    </Layout>
  )
}

export default Home;