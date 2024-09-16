import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setKycData } from "@/redux/features/kycSlice";
import TCDatePicker from "../Forms/TCDatePicker";
import TCDropdownPicker from "../Forms/TCDropdownPricker";
import TCCheckbox from "../Forms/TCCheckbox";

const KYCForm = () => {
  const dispatch = useDispatch();
  const kycData = useSelector((state: RootState) => state.kyc);

  const handleSubmit = (data: FieldValues) => {
    dispatch(setKycData(data));
  };

  useEffect(() => {
    // Handle any side effects if necessary when kycData changes
  }, [kycData]);

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
        mt: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
      >
        KYC Profile Form
      </Typography>
      <TCForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TCInput name="name" label="Name of Customer" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="fathersName"
              label="Father's Name"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="mothersName"
              label="Mother's Name"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="spouseName" label="Spouse's Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="nationality"
              label="Nationality"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TCInput name="passportNo" label="Passport No" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TCInput
              name="passportIssueDate"
              label=""
              type="date"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="passportPlaceOfIssue"
              label="Place of Issue"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="nid"
              label="National ID No (For Bangladeshi National)"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="dob" label="" type="date" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="occupation" label="Occupation" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="address" label="Address" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="phone"
              label="Telephone No / Mobile No"
              type="tel"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="countryOfVisit" label="Country of Visit" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCInput
              name="purposeOfTravel"
              label="Purpose of Travel"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TCDatePicker
              name="dateOfArrival"
              label="Date of Arrival (Approx)"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TCInput
              name="dateOfDeparture"
              label="Date of Departure (Approx)"
              type="date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TCInput name="sourceOfFund" label="Source of Fund" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TCDropdownPicker
              name="selectedOption"
              label="Select Option"
              fullWidth
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
            <TCCheckbox
              name="acceptTerms"
              label="Accept Terms and Conditions"
              required
            />
          </Grid>
          {/* Additional Fields can be added as necessary */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </TCForm>

      {/* Preview Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Preview
        </Typography>
        <Grid container spacing={2}>
          {kycData.dateOfArrival && (
            <Grid item xs={12}>
              <Typography variant="body1">
                13. Date of Arrival (Approx):{" "}
                <span className="font-medium">{kycData.dateOfArrival}</span>
              </Typography>
            </Grid>
          )}
          {kycData.dateOfDeparture && (
            <Grid item xs={12}>
              <Typography variant="body1">
                13. Date of Departure (Approx):{" "}
                <span className="font-medium">{kycData.dateOfDeparture}</span>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default KYCForm;
