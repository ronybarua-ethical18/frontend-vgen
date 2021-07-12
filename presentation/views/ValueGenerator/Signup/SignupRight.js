import Link from "next/link";
import EmailIcon from "@material-ui/icons/Email";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FormButton from "../../../Components/Buttons/FormButton/FormButton";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./Signup.module.css";
import FormTop from "../../../parts/FormTop/FormTop";
import SignupInput from "../../../Components/Inputs/Input/Input";
import { Grid, Container } from "@material-ui/core";

const SignupRight = () => {
  return (
    <div className={styles.signupRight}>
      <Container maxWidth="sm">
        <FormTop text="Create Account As Value Generator" />
        <form className={styles.signupform}>
          <Grid
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            container
          >
            <Grid item xs={12} sm={6}>
              <SignupInput
                icon={<CheckCircleIcon fontSize="small" />}
                type="text"
                placeholder="First name"
                label="First name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SignupInput
                icon={<CheckCircleIcon fontSize="small" />}
                type="text"
                placeholder="Last name"
                label="Last name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SignupInput
                icon={<CheckCircleIcon fontSize="small" />}
                type="text"
                placeholder="Username"
                label="Username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SignupInput
                icon={<EmailIcon fontSize="small" />}
                type="text"
                placeholder="Email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SignupInput
                icon={<LockIcon fontSize="small" />}
                type="text"
                placeholder="Password"
                label="Password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SignupInput
                icon={<LockIcon fontSize="small" />}
                type="text"
                placeholder="Confirm Password"
                label="Confirm Password"
              />
            </Grid>
          </Grid>
        </form>
        <FormButton text="sign up" />
        <div className={styles.formBottom}>
          Already Have an account? <br />
          <Link href="/valuegenerator/login">Login</Link>
        </div>
      </Container>
    </div>
  );
};

export default SignupRight;
