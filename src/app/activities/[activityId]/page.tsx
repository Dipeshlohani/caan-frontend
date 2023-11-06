import SubsribeBanner from "@/components/subscribe";
import Image from 'next/image'
import styles from './activitydetail.module.css';
import CallToAction from "@/components/cta";

async function getData(id: string) {
  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'Authorization': `bearer ${process.env.API_KEY}`
    }
  }
  let url = `${process.env.HOST}/api/activities/${id}?populate=*`
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getPastActivities() {
  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'Authorization': `bearer ${process.env.API_KEY}`
    }
  }
  let today_day = new Date().toISOString().split('T')[0];
  let url = encodeURI(`${process.env.HOST}/api/activities/populate[0]=Activity&filters[date][$gt]=${today_day}`)
  url = `http://localhost:1337/api/activities?populate=*&filters[date][$lt]=${today_day}`;
  const res = await fetch(url, options);
  return res.json()
}

export default async function AboutActivity({ params }: { params: { activityId: string } }) {
  let { data } = await getData(params.activityId);
  let pastActivities = await getPastActivities();
  let img_url = process.env.HOST + data.attributes.img_url.data.attributes.url;
  let date = data.attributes.date;
  let description = data.attributes.description;
  let title = data.attributes.name;

  return (
    <div>
      <div className="container">
        <div className={styles.activity__Container}>
          <div className={styles.activity__Contents}>
            <h1>{title}</h1>
            <div className="">
              <Image src={img_url} alt="activity banner" width="950" height="550" />
            </div>
            <h4>{date}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }} ></div>
          </div>
          <div className={styles.activity__Lists}>
            <h3>Other Latest Activities</h3>
            <div className={styles.activity__Lists__ItemWrapper}>
              {pastActivities.data.map((item) => (
                <div className={styles.activity__Lists__Item} key={item.attributes.name}>
                  <div className={styles.activity__Lists__Image}>
                    <Image
                      src={process.env.HOST + item.attributes.img_url.data.attributes.url}
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
      <SubsribeBanner />

      {/* <CallToAction /> */}
    </div >
  );
}
