import { Paper, Typography } from "@material-ui/core";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "./FormTop.module.css";

const FormTop = ({ text }) => {
  return (
    <div className={styles.formTop}>
      <Typography
        style={{ marginBottom: "10px", fontWeight: "500" }}
        variant="h4"
      >
        {text}
      </Typography>
      <div className={`${styles.formtopwrapper}`}>
        <Paper elevation={0} className={`${styles.externallogin} mr-5`}>
          <GTranslateIcon
            fontSize="small"
            style={{ marginRight: "5px" }}
            color="secondary"
          />
          Login With Google
        </Paper>
        <Paper elevation={0} className={styles.externallogin}>
          <FacebookIcon
            fontSize="small"
            style={{ marginRight: "5px" }}
            color="primary"
          />
          Login With Facebook
        </Paper>
      </div>
    </div>
  );
};

export default FormTop;
