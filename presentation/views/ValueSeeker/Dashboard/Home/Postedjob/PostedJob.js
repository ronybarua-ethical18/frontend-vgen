import { Button, Container, Grid, Typography } from "@material-ui/core";
import StatusCard from "../../../../../Components/Cards/StatusCard/StatusCard";
import Layout from "../../../../../Layout/Layout";
import PostedJobcard from "../../../../../parts/PostedJobcard/PostedJobcard";
//icons
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Postedjob = () => {
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
        <Typography gutterBottom variant="h6" align="left">
          Your Job Post
        </Typography>
        {/* postedjobcard */}
        <PostedJobcard />
        {/* job details */}
        <Typography gutterBottom variant="h6" align="left">
          Job Details
        </Typography>
        <Typography gutterBottom variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          voluptatem! Molestiae quisquam possimus non quia laudantium
          blanditiis, corporis eum est esse debitis enim doloribus eaque id
          temporibus corrupti velit nam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo
          ut alias impedit officia quam repellendus veritatis. Quos, quidem,
          quisquam non nesciunt quo amet dolores omnis rerum aliquam velit rem?
        </Typography>
        <Typography gutterBottom variant="h6" align="left">
          You can work from
        </Typography>
        <Typography gutterBottom variant="body2" align="left">
          Anywhere in the world
        </Typography>

        <Typography gutterBottom variant="h6" align="left">
          Required Skills
        </Typography>
        <Grid spacing={3} container>
          {[1, 2, 3].map((item) => (
            <Grid key={item} item md={3} xs={6}>
              <Button fullWidth variant="contained" color="secondary">
                Figma
              </Button>
            </Grid>
          ))}
        </Grid>
        <Typography gutterBottom variant="h6" align="left">
          Other Deatils{" "}
        </Typography>
        <Grid spacing={3} container>
          {[1, 2, 3].map((item) => (
            <Grid key={item} item xs={6} md={3}>
              <div className="flex">
                <LocationOnIcon fontSize="small" />{" "}
                <Typography variant="subtitle2">Remote Job</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Postedjob;
