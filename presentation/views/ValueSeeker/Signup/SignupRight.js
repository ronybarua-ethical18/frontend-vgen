import Link from "next/link";
import EmailIcon from "@material-ui/icons/Email";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FormButton from "../../../Components/Buttons/FormButton/FormButton";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./Signup.module.css";
import FormTop from "../../../parts/FormTop/FormTop";
import SignupInput from "../../../Components/Inputs/Input/Input";
import { useForm } from 'react-hook-form';
import { Grid, Container } from "@material-ui/core";

const SignupRight = () => {
  const { handleSubmit, register, formState } = useForm({mode: "onChange"});
  const inputValue = str =>{
    return {...register(str)}
  }

  const onSubmit = data => {
    const signupData = {
      first_name: data.first_name,
      last_name: data.last_name,
      user_email: data.user_email,
      password: data.password,
      password_confirmation: data.password_confirmation
    }
    console.log(signupData)
    const url = 'http://127.0.0.1:8000/api/seeker/register';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupData)
    })
      .then(res => {
        if (res) {
          setDisableState(false);
      } 
        console.log('server side response', res)
      })
      .then(data => {
        alert('New user registered successfully');
      })
};

return (
  <div className={styles.signupRight}>
    <Container maxWidth="sm">
      <FormTop text="Create Account As Value Seeker" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signupform}>
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
              name="first_name"
              {...register("first_name")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupInput
              icon={<CheckCircleIcon fontSize="small" />}
              type="text"
              placeholder="Last name"
              label="Last name"
              name="last_name"
              {...register("last_name")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupInput
              icon={<CheckCircleIcon fontSize="small" />}
              type="text"
              placeholder="Username"
              label="Username"
              name="user_name"
              {...register("user_name")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupInput
              icon={<EmailIcon fontSize="small" />}
              type="text"
              placeholder="Email"
              label="Email"
              name="email"
              {...register("email")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupInput
              icon={<LockIcon fontSize="small" />}
              type="text"
              placeholder="Password"
              label="Password"
              name="password"
              {...register("password")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupInput
              icon={<LockIcon fontSize="small" />}
              type="text"
              placeholder="Confirm Password"
              label="Confirm Password"
              name="password_confirmation"
              {...register("password_confirmation")}
              required
            />
          </Grid>
        </Grid>
      </form>
      <FormButton disabled={!formState.isValid} text="sign up" />
      <div
        className={styles.formBottom}
      >
        Already Have an account? <br />
        <Link href="/valueseeker/login">Login</Link>
      </div>
    </Container>
  </div>
);
};

export default SignupRight;
