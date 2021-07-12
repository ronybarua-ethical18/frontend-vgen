import styles from "./LandingPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Container, Grid, Typography } from "@material-ui/core";

const LandingPageHeader = () => {
  return (
    <div className={styles.landingpage_header}>
      <div className={styles.navbar}>
        <img
          src="/assets/images/Icons/vgenlogo.png"
          className={styles.logo}
          alt="vgen"
        />
        <div className={styles.navbarRight}>
          <p className="mr-5">Login As</p>
          <div className={styles.navbarRight_login}>
            <Link href="/valueseeker/login">Value Seeker</Link>
            <Link href="/valuegenerator/login">Value Generator</Link>
          </div>
        </div>
      </div>
      <div className={styles.headerMidContent}>
        <Typography variant="h3">A Proper Workplace</Typography>
        <Typography variant="subtitle1">
          Find Job with your prefferable skill
        </Typography>
      </div>
      <Container maxWidth="sm">
   
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Card
                style={{
                  maxWidth: "200px",
                  backgroundColor: "#c1c1c1",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="h4">
                    30700
                  </Typography>
                  <Image
                    src="/assets/images/Icons/Icon awesome-user-alt.svg"
                    height="30px"
                    width="30px"
                    alt="user"
                  />
                </div>
                <Typography variant="subtitle2"> Registerd Users</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                style={{
                  maxWidth: "200px",
                  backgroundColor: "#c1c1c1",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="h4">
                    2500+
                  </Typography>
                  <Image
                    src="/assets/images/Icons/Icon awesome-project-diagram.svg"
                    height="30px"
                    width="30px"
                    alt="user"
                  />
                </div>
                <Typography variant="subtitle2"> Running Projects</Typography>
              </Card>
            </Grid>
          </Grid>
       
      </Container>
      <div style={{ marginTop: "5rem", textAlign: "center" }}>
        <Link href="/valuegenerator/signup">
          <Button variant="contained" color="primary">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageHeader;
