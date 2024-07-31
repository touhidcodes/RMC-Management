import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";

// KYCForm component
const KYCForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log("Form Data:", data);
    // You can process the form data here, e.g., send it to a server
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", p: 2 }}>
      <TCForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TCInput name="name" label="Name" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="email"
              label="Email"
              type="email"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="phone" label="Phone" type="tel" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="address" label="Address" required fullWidth />
          </Grid>
          {/* Add more fields as necessary */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </TCForm>
    </Box>
  );
};

export default KYCForm;
