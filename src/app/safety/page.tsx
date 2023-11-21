import React from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Layout from "@/components/layout";
import CallToAction from '@/components/cta';

const CivilAviationSafetyPage = () => {
  return (
    <Layout>
      <Container>
        {/* Title */}
        <Typography variant="h1" gutterBottom sx={{ marginTop: 4, fontWeight: 500, }}>
          Civil Aviation Safety Authority Planning and Conduct of Surveillance Activities
        </Typography>

        {/* Two Columns */}
        <Grid container spacing={3}>
          {/* Left Column - Image */}
          <Grid item xs={12} md={8}>
            <img src="/plane1.png" alt="Civil Aviation Safety" style={{ width: '100%', height: 'auto', margin: '30px 0' }} />
          </Grid>

          {/* Right Column - Rows with Headings and Descriptions */}
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: 3, height: 'auto', margin: '60px 0' }}>
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Portfolio
                </Typography>
                <Typography variant='body2'>
                  Infrastructure, Transport, Regional Development and Communications
                </Typography>
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Entity
                </Typography>
                <Typography variant='body2'>
                  Civil Aviation Safety Authority
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  Contact
                </Typography>
                <Typography variant='body2'>
                  Please direct enquiries through our contact page
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Line Separator */}
        <Divider sx={{ my: 3 }} />

        {/* Summary and Recommendations */}
        <Grid container spacing={3}>
          {/* Left Column - Content */}
          <Grid item xs={12} md={8} >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, margin: "20px 0" }}>
              Summary and Recommendations
            </Typography>
            {/* Content goes here */}
            <Typography variant="h6" id="background">
              1. Background
            </Typography>
            <Typography sx={{ lineHeight: 2, fontWeight: 'light', marginBottom: 5 }}>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus vitae neque nec hendrerit. Sed ipsum tortor, porttitor ac mattis ac, commodo sit amet eros. Fusce accumsan mollis odio, nec eleifend urna luctus quis. Quisque nibh diam, finibus non ligula id, elementum consequat lacus. Fusce a nunc arcu.
              2. Praesent at est placerat, tincidunt eros aliquam, pharetra sem. Etiam dignissim ante vel arcu vehicula dapibus. Pellentesque consequat ante non aliquam sodales. Pellentesque vitae urna nulla.
              3. Integer gravida massa quis odio auctor laoreet. Curabitur lacinia, urna id ultricies scelerisque, elit quam placerat erat, eu pretium tortor elit sit amet orci. Duis tincidunt bibendum ligula, quis venenatis leo mattis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              4. In pulvinar ultrices sollicitudin. Curabitur placerat pretium purus, et fermentum tortor. Vestibulum at purus id ipsum ultrices feugiat. In congue, diam sit amet malesuada rhoncus, erat dolor volutpat nibh, sit amet consectetur ex risus in nunc. Aenean sollicitudin rhoncus nunc, non consectetur erat tincidunt in.
              5. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec suscipit mi. Phasellus suscipit, turpis vel luctus malesuada, turpis ex aliquet mi, non vehicula urna diam vel odio. Maecenas eget pellentesque leo. Mauris mattis at nisi id finibus. Duis nec fermentum massa. Vivamus lobortis a lectus at facilisis. Integer non sapien ultricies ipsum lacinia tempus at in velit.
            </Typography>

            <Typography variant="h6" id="surveillance">
              2. Surveillance Approach
            </Typography>
            <Typography sx={{ lineHeight: 2, fontWeight: 'light', marginBottom: 5 }}>
              Donec odio nisi, lacinia ullamcorper magna elementum, ornare eleifend turpis. Curabitur eu tincidunt augue, non efficitur mi.
              Curabitur eu tincidunt augue, non efficitur mi. Ut pulvinar risus quis nisi ullamcorper, vel molestie libero
              Sed fringilla velit eget blandit molestie. Mauris nec urna leo. Sed eget viverra leo. Morbi sed nisi a mauris vulputate aliquam ac sit amet orci.
              Nulla ornare quam purus, eu dignissim felis pulvinar nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Vivamus a sapien malesuada, blandit purus commodo, condimentum justo. Pellentesque eget fringilla quam.          </Typography>

            <Typography variant="h6" id="monitor">
              3. Monitor Compliance and Review
            </Typography>
            <Typography sx={{ lineHeight: 2, fontWeight: 'light', marginBottom: 5 }}>
              Donec odio nisi, lacinia ullamcorper magna elementum, ornare eleifend turpis. Curabitur eu tincidunt augue, non efficitur mi.
              Curabitur eu tincidunt augue, non efficitur mi. Ut pulvinar risus quis nisi ullamcorper, vel molestie libero
              Sed fringilla velit eget blandit molestie. Mauris nec urna leo. Sed eget viverra leo. Morbi sed nisi a mauris vulputate aliquam ac sit amet orci.
              Nulla ornare quam purus, eu dignissim felis pulvinar nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.          </Typography>

            <Typography variant="h6" id="reporting">
              4. Reporting to the Board and Government
            </Typography>
            <Typography sx={{ lineHeight: 2, fontWeight: 'light', marginBottom: 5 }}>
              Donec odio nisi, lacinia ullamcorper magna elementum, ornare eleifend turpis. Curabitur eu tincidunt augue, non efficitur mi.
              Curabitur eu tincidunt augue, non efficitur mi. Ut pulvinar risus quis nisi ullamcorper, vel molestie libero
              Sed fringilla velit eget blandit molestie. Mauris nec urna leo. Sed eget viverra leo. Morbi sed nisi a mauris vulputate aliquam ac sit amet orci.             </Typography>

            <Typography variant="h6" id="appendices">
              Appendices
            </Typography>
            <Typography sx={{ lineHeight: 2, fontWeight: 'light', marginBottom: 5 }}>
              1. In sit amet auctor dui, at dictum quam. Cras nisl ligula, dapibus eu lorem vitae, porttitor tincidunt eros. Quisque gravida augue in lacus eleifend, id bibendum enim viverra. Ut vel pharetra arcu, id consectetur quam. Morbi vitae libero non libero scelerisque sollicitudin vel eu eros. Pellentesque lobortis urna sit amet purus laoreet pellentesque. In felis dolor, bibendum eu euismod at, semper id elit. Quisque quis ante tellus. Mauris at augue et odio vulputate pulvinar nec vel justo. Etiam sed eleifend justo. Cras a odio dictum tellus varius gravida sit amet ut urna.

              2. Fusce pretium urna pretium magna scelerisque, eu tristique tellus dignissim. Integer tempor auctor augue vitae finibus. Nam lobortis ullamcorper sapien, eget consequat ligula dictum eget. Quisque pretium, est vitae tempor pharetra, ex mauris aliquet enim, et lacinia enim nisl a urna. Fusce pretium urna pretium magna scelerisque, eu tristique tellus dignissim. Integer tempor auctor augue vitae finibus. Nam lobortis ullamcorper sapien, eget consequat ligula dictum eget. Quisque pretium, est vitae tempor pharetra, ex mauris aliquet enim, et lacinia enim nisl a urna.
            </Typography>

          </Grid>

          {/* Right Column - Navigation Panel */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 4, height: 'auto', background: '#EFEFEF', position: 'sticky', top: '80px' }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
                Contents
              </Typography>
              {/* Dotted Divider */}
              <Box sx={{ borderBottom: '1px dashed #ccc', mb: 2 }} />
              {/* Table of Contents Links */}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                  <span>Summary and Recommendations</span>
                  <IconButton href="#summary" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2, color: 'black' }} />

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                  <span>1. Background</span>
                  <IconButton href="#background" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                  <span>2. Surveillance Approach</span>
                  <IconButton href="#surveillance" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                  <span>3. Monitor Compliance and Review</span>
                  <IconButton href="#monitor" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                  <span>4. Reporting to the Board and Government</span>
                  <IconButton href="#reporting" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                  <span>Appendices</span>
                  <IconButton href="#appendices" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light' }}>
                  <span>Footnotes</span>
                  <IconButton href="#footnotes" color="primary" sx={{ marginLeft: 'auto' }}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <CallToAction />
    </Layout>
  );
};

export default CivilAviationSafetyPage;
