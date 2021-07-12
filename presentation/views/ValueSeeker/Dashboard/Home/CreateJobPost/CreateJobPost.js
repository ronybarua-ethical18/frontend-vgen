import Layout from "../../../../../Layout/Layout";
import { Typography, Container, Grid } from "@material-ui/core";
import StatusCard from "../../../../../Components/Cards/StatusCard/StatusCard";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";

const CreateJobPost = () => {
  return (
    <Layout>
      <Container>
        {/* task status row */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <span className="flex">
            {[1, 2, 3].map((item) => (
              <StatusCard text="Total Task" number={86} key={item} />
            ))}
          </span>
        </div>
        <div style={{ padding: "2rem" }}></div>
        <Typography
          style={{ color: "#0c88e9" }}
          gutterBottom
          variant="h6"
          align="left"
        >
          Create Job Post
        </Typography>
        <Grid spacing={4} container>
          {/* Form Left */}
          <Grid item xs={12} md={6}>
            <FormLeft />
          </Grid>
          {/* Form Right */}
          <Grid item xs={12} md={6}>
            <FormRight />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default CreateJobPost;
