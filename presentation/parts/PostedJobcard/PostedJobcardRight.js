import styles from "./PostedJobcard.module.css";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { Box, Button, Typography } from "@material-ui/core";
import Link from "next/link";

const PostedJobcardRight = ({ vscard }) => {
  return (
    <div className={styles.postedJobcardRight}>
      <div className="flex-between">
        <Box className="flex">
          <Typography gutterBottom variant="h6">
            Searching For A
          </Typography>
          <Typography
            className="ml-5"
            color="primary"
            gutterBottom
            variant="h6"
          >
            Graphics Designer
          </Typography>
        </Box>
        <Typography style={{ color: "#3cb1e8" }} variant="subtitle1">
          10128349364
        </Typography>
      </div>
      <Box mb={2}>
        <Button variant="outlined">Contractual</Button>
      </Box>
      <Typography gutterBottom variant="h6">
        I am looking for a graphics designer who can work for me
      </Typography>
      <div className="flex">
        <AccountBalanceWalletIcon className="mr-5" fontSize="small" />{" "}
        <Typography variant="body1">Budget:</Typography>{" "}
        <Typography variant="body1">260$</Typography>
      </div>
      <div className="flex">
        <WatchLaterIcon className="mr-5" fontSize="small" />{" "}
        <Typography variant="body1">Duration:</Typography>{" "}
        <Typography variant="body1">7 days</Typography>
      </div>
      {vscard ? (
        <Typography color="textSecondary" variant="body1">
          Job posted 5hr ago
        </Typography>
      ) : null}
      <div className="flex-end">
        {vscard ? (
          <Link href="/valuegenerator/dashboard/bid">
            <Button size="small" variant="contained" color="primary">
              Bid for it
            </Button>
          </Link>
        ) : (
          <Link href="/valueseeker/dashboard/create-job-post">
            <Button size="small" color="secondary">
              Edit post
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostedJobcardRight;
