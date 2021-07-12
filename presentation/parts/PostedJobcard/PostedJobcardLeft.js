import { Box, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import styles from "./PostedJobcard.module.css";

const PostedJobcardLeft = () => {
  return (
    <div className={styles.postedJobcardLeft}>
      <div
        style={{
          height: "40px",
          maxWidth: "40px",
          objectFit: "contain",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0px auto",
        }}
      >
        <img
          src="/assets/images/Images/client.jpg"
          height="100%"
          width="100%"
        />
      </div>
      {/* star rating */}
      <Box component="fieldset" mb={1} borderColor="transparent">
        <Typography align="center" component="legend">
          John Doe
        </Typography>
        <Rating size="small" name="read-only" value={5} readOnly />
      </Box>
      <Typography align="center" variant="body2">
        Projects
      </Typography>
      <Typography gutterBottom align="center" variant="subtitle1">
        106
      </Typography>
      <Box mt={3}>
        <Typography align="center" variant="body2">
          Country
        </Typography>
        <Typography align="center" variant="body1">
          America
        </Typography>
      </Box>
    </div>
  );
};

export default PostedJobcardLeft;
