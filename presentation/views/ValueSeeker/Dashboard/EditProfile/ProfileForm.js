import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./EditProfile.module.css";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import SelectInput from "../../../../Components/Inputs/Select/Select";

const ProfileForm = () => {
  return (
    <Box mt={2} mb={2}>
      {/* avatar */}
      <Box className={styles.profileImgWrapper}>
        <Avatar
          sizes="2rem"
          className={styles.profileImg}
          alt="Remy Sharp"
          src="/assets/images/Images/client.jpg"
        />
        <EditIcon className={styles.editIcon} color="secondary" />
      </Box>
      {/* forms */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
            {/* first row */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormInput
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  bgc="#f2f2f2"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormInput
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  bgc="#f2f2f2"
                />
              </Grid>
            </Grid>
            <FormInput type="date" label="Date Of Birth" bgc="#f2f2f2" />
            <Typography variant="subtitle1">Nationality</Typography>
            <SelectInput />
            <Typography variant="subtitle1">Mobile Number</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <SelectInput />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormInput
                  type="number"
                  placeholder="Mobile number"
                  bgc="#f2f2f2"
                />
              </Grid>
            </Grid>

            <FormInput
              type="text"
              placeholder="NID Number"
              label="NID Number"
              bgc="#f2f2f2"
            />
            <FormInput
              type="text"
              label="Add Another Email"
              placeholder="username@gmail.com"
              bgc="#f2f2f2"
            />
            <Box mb={1} className="flex-between">
              <Typography variant="subtitle1">Language</Typography>
              <Button color="primary">Add New</Button>
            </Box>
            <Typography gutterBottom variant="subtitle2">
              English
            </Typography>
            <FormInput
              type="text"
              placeholder="Select Language"
              bgc="#f2f2f2"
            />
            <SelectInput />
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      {/* button */}
      <Box mt={5} className="flex-end">
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;
