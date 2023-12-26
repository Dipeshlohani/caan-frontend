import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import styles from "./styles";
import ActivityCard from "./ActivityCard";
import UpcomingActivities from "./UpcomingActivities";
async function getData() {
  let today_date = new Date();
  const res = await fetch('http://localhost:1337/api/activities?populate=*');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
const Activities = () => {
  const [toggle, setToggle] = useState("past");
  const [pastData, setPastData] = React.useState([]);
  const [upcomingData, setUpcomingData] = React.useState([]);
  const handleToggle = (val: any) => {
    setToggle(val);
  };
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await getData();
      const past = data.filter((d) => new Date(d.attributes.date) <= new Date())
      const upcoming = data.filter((d) => new Date(d.attributes.date) >= new Date())
      setPastData(past);
      setUpcomingData(upcoming);
    }
    fetchData();
  }, []);
  return (
    <Box pt={3}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={toggle === "past" ? styles.activeBtn : styles.Btn}
          onClick={() => handleToggle("past")}
        >
          Past Activities
        </Button>
        <Button
          variant="contained"
          sx={toggle === "upcoming" ? styles.activeBtn : styles.Btn}
          onClick={() => handleToggle("upcoming")}
        >
          Upcoming Activities
        </Button>
      </Stack>
      {toggle === "past" ? <ActivityCard data1={pastData} /> : <UpcomingActivities data1={upcomingData} />}
    </Box>
  );
};
export default Activities;
