import { Card, Grid } from "@material-ui/core";
import PostedJobcardLeft from "./PostedJobcardLeft";
import PostedJobcardRight from "./PostedJobcardRight";

const PostedJobcard = ({ vscard }) => {
  return (
    <Card style={{ margin: "2rem 0rem" }}>
      <Grid container>
        <Grid item xs={2}>
          <PostedJobcardLeft />
        </Grid>
        <Grid item xs={10}>
          <PostedJobcardRight vscard={vscard} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default PostedJobcard;
