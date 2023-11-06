import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


const ActivityCard = ({ data1 }: any) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const orig = 'http://localhost:1337'

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data1.slice(startIndex, endIndex);

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Grid container mt={4} spacing={3}>
        {itemsToDisplay.map((d, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} >

            <Card elevation={0}>
              <CardMedia
                component="img"
                image={orig + d.attributes.img_url.data.attributes.url}
                alt="activity image"
                style={{ borderRadius: "15px", height: "250px" }}
              />
              <CardContent
                sx={{
                  padding: "0px",
                }}
              >
                <Typography
                  variant="body1"
                  color="#2161cd"
                  fontWeight="700"
                  py={1.5}
                >
                  {d.attributes.date}
                </Typography>
                <Typography variant="body1" fontWeight="700" pb={2}>
                  {d.attributes.name}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  padding: "0px",
                }}
              >
                <Link href="activities/[slug]" as={`activities/${d.id}`}>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      padding: "0px",
                      textTransform: "capitalize",
                      fontWeight: "700",
                    }}
                  >
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} alignItems="center" pt={8}>
        <Pagination
          count={Math.ceil(data1.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>

    </>
  );
};
export default ActivityCard;
