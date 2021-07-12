import { Button, Grid, TextField, Typography } from "@material-ui/core";
import FormInput from "../../../../../Components/Inputs/FormInput/FormInput";

const FormLeft = () => {
  return (
    <div>
      {/* input1 */}
      <Typography variant="h6" align="left">
        Job Title
      </Typography>
      <Typography style={{ color: "#9c9c9c" }} variant="body2" align="left">
        Looking For a
      </Typography>
      <FormInput bgc="#f2f2f2" type="text" placeholder="Graphics Designer" />
      {/* input2 */}
      <Typography gutterBottom variant="h6" align="left">
        Add Job Description
      </Typography>
      <TextField
        multiline
        fullWidth
        id="filled-basic"
        label="Write Description"
        variant="filled"
        rows={5}
        margin="dense"
      />
      <Typography variant="h6" align="left">
        Required Skill
      </Typography>
      <FormInput bgc="#f2f2f2" type="text" placeholder="Type Keywords" />
      <Grid spacing={3} container>
        {[1, 2, 3].map((item) => (
          <Grid key={item} item xs={6}>
            <Button fullWidth variant="contained" color="secondary">
              Figma
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FormLeft;
