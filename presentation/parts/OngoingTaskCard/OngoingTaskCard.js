import { Button, Card, Typography, withStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import styles from "./OngoingTaskCard.module.css";
import Link from "next/link";

const OngoingTaskCard = ({ type }) => {
  return (
    <Card className={styles.ongoingTaskCard}>
      <Typography gutterBottom align="center" variant="h6">
        Project Graphics Design
      </Typography>
      <Typography gutterBottom align="center" variant="body2">
        796126189
      </Typography>

      <Button size="small" variant="outlined" color="secondary">
        Contract Job
      </Button>

      {/* BODY: progress and apply num  */}
      {type === "pending" ? (
        <>
          <div className="p-1"></div>
          <Typography variant="subtitle2" align="center">
            Total Apply
          </Typography>
          <Typography gutterBottom variant="h5" align="center">
            21
          </Typography>
        </>
      ) : (
        <>
          <span className="flex-between w-100 p-1">
            <Typography align="left" variant="body2">
              Progress
            </Typography>
            <Typography align="right" variant="body2">
              4 days left
            </Typography>
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={80}
          />
          <span className="w-100 p-1">
            <Typography align="right" variant="body2">
              80%
            </Typography>
          </span>
        </>
      )}

      {/* Details Button */}
      {type === "pending" ? (
        <Link href="/valueseeker/dashboard/pending-selection/job-proposals">
          <Button
            className="m-1"
            size="small"
            variant="contained"
            color="primary"
          >
            View Details
          </Button>
        </Link>
      ) : (
        <Link href="/valueseeker/dashboard/task-details-page">
          <Button
            className="m-1"
            size="small"
            variant="contained"
            color="primary"
          >
            View Details
          </Button>
        </Link>
      )}

      {/* view post button */}
      {type === "pending" ? (
        <Link href="/valueseeker/dashboard/postedjob">
          <Button
            className="m-1"
            size="small"
            variant="contained"
            color="secondary"
          >
            View Post
          </Button>
        </Link>
      ) : null}
    </Card>
  );
};

export default OngoingTaskCard;

const PrettoSlider = withStyles({
  root: {
    color: "#ff8800",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
