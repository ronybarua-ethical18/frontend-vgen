import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import SelectInput from "../../../../Components/Inputs/Select/Select";
import Layout from "../../../../Layout/Layout";
import PostedJobcard from "../../../../parts/PostedJobcard/PostedJobcard";
import TaskStatusCardsRow from "../../../../parts/TaskStatusCardsRow/TaskStatusCardsRow";
import SearchIcon from "@material-ui/icons/Search";

const DashboardHome = () => {
  return (
    <Layout>
      <Container>
        <Box style={{ maxWidth: "200px !important" }}>
          <FormInput
            type="text"
            bgc="#f2f2f2"
            placeholder="Search For Jobs"
            icon={<SearchIcon fontSize="small" />}
          />
        </Box>
        <TaskStatusCardsRow />
        <Box className="flex-between">
          <Box>
            <Typography variant="h6">New Jobs</Typography>
            <Typography variant="body2">Showing 1015 Jobs</Typography>
          </Box>
          <Box style={{ maxWidth: "300px" }}>
            <SelectInput />
          </Box>
        </Box>
        {/* cards */}
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5].map((card) => (
            <Grid key={card} item xs={12}>
              <PostedJobcard vscard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default DashboardHome;
