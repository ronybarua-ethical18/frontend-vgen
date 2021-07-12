import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import FormInput from "../../../../../Components/Inputs/FormInput/FormInput";
import Link from "next/link";

const FormRight = () => {
  return (
    <div>
      {/* input1 */}
      <div className="flex">
        <Typography gutterBottom variant="h6" align="left">
          Work From
        </Typography>
        <div className="flex">
          <Checkbox fontSize="small" />
          Anywhere in the world
        </div>
      </div>
      <FormControl style={{ width: "50%" }}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          variant="filled"
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      {/* input2 */}
      <Typography gutterBottom variant="h6" align="left">
        Job Type
      </Typography>
      <FormControl style={{ width: "50%" }}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          variant="filled"
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      {/* input3 */}
      <Typography variant="h6" align="left">
        Budget
      </Typography>
      <Grid spacing={3} container>
        <Grid item xs={6}>
          <div className="flex">
            <Typography gutterBottom variant="subtitle1" align="left">
              From
            </Typography>
            <FormInput bgc="#f2f2f2" type="number" placeholder="0" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="flex">
            <Typography gutterBottom variant="subtitle1" align="left">
              To
            </Typography>
            <FormInput bgc="#f2f2f2" type="number" placeholder="220" />
          </div>
        </Grid>
      </Grid>
      {/* input4 */}
      <Typography variant="h6" align="left">
        Project Duration
      </Typography>
      <div className="flex">
        <div className="flex">
          <Checkbox fontSize="small" />
          Day
        </div>
        <div className="flex">
          <Checkbox fontSize="small" />
          Month
        </div>
        <div className="flex">
          <Checkbox fontSize="small" />
          Year
        </div>
      </div>
      <FormControl style={{ width: "50%" }}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          variant="filled"
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <Typography gutterBottom variant="h6" align="left">
        Apply Deadline
      </Typography>
      <FormInput type="date" />
      {/* //button */}
      <Link href="/valueseeker/dashboard/postedjob">
        <Button variant="contained" color="primary">
          Post Job
        </Button>
      </Link>
    </div>
  );
};

export default FormRight;
