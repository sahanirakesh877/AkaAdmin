import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { blue, green, orange, purple, red } from "@mui/material/colors";

const DashboardUI = () => {
  // Sample data for Aksharaa School dashboard
  const stats = {
    students: 1200,
    teachers: 80,
    classes: 50,
    events: 10,
    achievements: 25,
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Dashboard Title */}
      <Typography variant="h4" gutterBottom align="center">
        Aksharaa School Dashboard
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={3}>
        {/* Card for Students */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: blue[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Students
              </Typography>
              <Typography variant="h4">{stats.students}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Teachers */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: green[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Teachers
              </Typography>
              <Typography variant="h4">{stats.teachers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Classes */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: orange[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Classes
              </Typography>
              <Typography variant="h4">{stats.classes}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Events */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: purple[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="h4">{stats.events}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Achievements */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: red[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Achievements
              </Typography>
              <Typography variant="h4">{stats.achievements}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardUI;
