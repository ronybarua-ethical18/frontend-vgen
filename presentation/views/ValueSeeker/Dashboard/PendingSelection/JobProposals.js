import { Typography, Container, Button, Grid } from "@material-ui/core";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import Layout from "../../../../Layout/Layout";
import TaskStatusCardsRow from "../../../../parts/TaskStatusCardsRow/TaskStatusCardsRow";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import JobProposalTable from "./JobProposalTable";
import Link from "next/link";

const JobProposals = () => {
  return (
    <Layout>
      <Container>
        {/* task status row */}
        <TaskStatusCardsRow />
        <Typography gutterBottom variant="h6" align="left">
          Pending Selections
        </Typography>
        <Grid justify="space-between" alignItems="center" container>
          <Grid item xs={12} md={8}>
            <div className="flex">
              <Typography gutterBottom variant="h5" align="left">
                Project Graphics Design
              </Typography>
              <Button
                className="ml-5"
                size="small"
                color="secondary"
                variant="outlined"
              >
                Contract Job
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              icon={<FindInPageIcon fontSize="small" />}
              type="text"
              bgc="#f8f8f8"
            />
          </Grid>
        </Grid>
        {/* submitted proposal list */}
        <JobProposalTable />
      </Container>
    </Layout>
  );
};

export default JobProposals;
