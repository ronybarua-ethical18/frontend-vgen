import { Box, Button, Grid, Switch, Typography } from "@material-ui/core";
import { useState } from "react";
import SelectInput from "../../../../Components/Inputs/Select/Select";

const PaymentMethodForm = () => {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    saveInfo: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const saveInfo = () => {
    setState({ ...state, saveInfo: true, checkedA: false });
  };

  return (
    <>
      <Typography variant="h6">Choose Payment Method</Typography>
      <Box className="flex">
        <Typography className="mr-5" variant="body1">
          Bank Account
        </Typography>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Box>
      <Box mb={3} className="flex">
        <Typography className="mr-5" variant="body1">
          Mobile Banking
        </Typography>
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Box>
      {/* account info */}
      {state.checkedA ? (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SelectInput />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput />
            </Grid>
          </Grid>
          <Box mt={2} className="flex-end">
            <Button onClick={saveInfo} variant="contained" color="secondary">
              Save
            </Button>
          </Box>
        </>
      ) : null}
      {state.saveInfo ? (
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Bank Name</Typography>
              <Typography variant="body2">Dutch Bangla Bank</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Account Holder Name</Typography>
              <Typography variant="body2">John Doe</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Account Number</Typography>
            <Typography variant="body2">23124343341</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Branch Name</Typography>
            <Typography variant="body2">Kolabagan Dhaka</Typography>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default PaymentMethodForm;

{
  /* <Grid container spacing={3}>
  <Grid container item xs={12}>
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle1">Bank Name</Typography>
      <Typography variant="body2">Dutch Bangla Bank</Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle1">Account Holder Name</Typography>
      <Typography variant="body2">John Doe</Typography>
    </Grid>
  </Grid>
  <Grid item xs={12}>
    <Typography variant="subtitle1">Account Number</Typography>
    <Typography variant="body2">23124343341</Typography>
  </Grid>
  <Grid item xs={12}>
    <Typography variant="subtitle1">Branch Name</Typography>
    <Typography variant="body2">Kolabagan Dhaka</Typography>
  </Grid>
</Grid>; */
}
