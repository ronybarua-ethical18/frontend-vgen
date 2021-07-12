import { Typography, Grid, Container } from "@material-ui/core";
import Layout from "../../../../Layout/Layout";
import OngoingTaskCard from "../../../../parts/OngoingTaskCard/OngoingTaskCard";
import TaskStatusCardsRow from "../../../../parts/TaskStatusCardsRow/TaskStatusCardsRow";

const PendingSelection = () => {
  return (
    <Layout>
      <Container>
        {/* task status row */}
        <TaskStatusCardsRow />
        {/* ongoing task  */}
        <Typography gutterBottom variant="h6" align="left">
          Pending Selections
        </Typography>
        <Grid spacing={4} container>
          {[1, 2, 3, 4].map((item) => (
            <Grid key={item} item xs={12} md={6}>
              <OngoingTaskCard type="pending" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default PendingSelection;
