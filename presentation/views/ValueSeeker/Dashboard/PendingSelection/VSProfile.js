import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Layout from "../../../../Layout/Layout";
import TaskStatusCardsRow from "../../../../parts/TaskStatusCardsRow/TaskStatusCardsRow";

const VSProfile = () => {
  return (
    <Layout>
      <Container>
        {/* task status row */}
        <TaskStatusCardsRow />
        <Typography gutterBottom variant="h6" align="left">
          Viewing Profile
        </Typography>
        {/* images */}
        <Box mb={2} className="flex">
          <Avatar
            style={{
              maxHeight: "2rem",
              height: "3rem !important",
              objectFit: "contain",
            }}
            variant="rounded"
            alt="Remy Sharp"
            src="/assets/images/Images/client.jpg"
          />
          <Box ml={2} borderColor="transparent">
            <Typography gutterBottom variant="h6">
              John Doe
            </Typography>
            <Typography variant="subtitle1">Graphic Designer</Typography>
            <Typography variant="subtitle1">170 Projects</Typography>
          </Box>
        </Box>
        {/* content */}
        <Typography gutterBottom variant="h6" align="left">
          About Me
        </Typography>
        <Typography gutterBottom variant="body2" align="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad
          numquam nostrum fugit fuga? Assumenda doloremque veniam quaerat, ad
          excepturi explicabo necessitatibus ea nobis optio odio sunt numquam.
          Distinctio, deleniti?
        </Typography>
        <Typography gutterBottom variant="h6" align="left">
          Educations
        </Typography>
        <Typography gutterBottom variant="body2" align="left">
          ABC University, Florida
        </Typography>
        <Typography gutterBottom variant="h6" align="left">
          Certificates
        </Typography>
        <Typography gutterBottom variant="body2" align="left">
          Basics of graphics design, Coursera
        </Typography>
        <Typography gutterBottom variant="h6" align="left">
          Language
        </Typography>
        <Typography gutterBottom variant="body2" align="left">
          English
        </Typography>
        {/* review */}
        <Typography gutterBottom variant="h6" align="left">
          Clients Feedback
        </Typography>
        <Grid container>
          {[1, 2, 3].map((item) => (
            <Grid key={item} item xs={12} md={4}>
              <Box mb={2} className="flex">
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/Images/client.jpg"
                />
                <Box ml={2} borderColor="transparent">
                  <Typography variant="subtitle2">Steven Smith</Typography>
                  <Typography variant="body2">
                    It was a plesure to work
                  </Typography>
                  <Rating size="small" name="read-only" value={5} readOnly />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* button */}
        <Button variant="contained" color="secondary">
          Start Conversation
        </Button>
      </Container>
    </Layout>
  );
};

export default VSProfile;
