import { Grid } from "@material-ui/core";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import SelectInput from "../../../../Components/Inputs/Select/Select";

const AddressForm = () => {
  return (
    <Grid spacing={3} container>
      <Grid item xs={12} md={6}>
        <SelectInput />
      </Grid>
      <Grid item xs={12} md={6}>
        <SelectInput />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormInput bgc="#f2f2f2" placeholder="Post Code" />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormInput bgc="#f2f2f2" placeholder="Village" />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormInput bgc="#f2f2f2" placeholder="Holding No" />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormInput bgc="#f2f2f2" placeholder="Road No" />
      </Grid>
    </Grid>
  );
};

export default AddressForm;
