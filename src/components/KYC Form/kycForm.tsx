import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setKycData } from "@/redux/features/kycSlice";
import TCDatePicker from "../Forms/TCDatePicker";

const KYCForm = () => {
  const dispatch = useDispatch();
  const kycData = useSelector((state: RootState) => state.kyc);

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch(setKycData(data));
  };

  useEffect(() => {
    // Handle any side effects if necessary when kycData changes
  }, [kycData]);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textAlign: "center",
          fontWeight: "bold",
          backgroundColor: "#1A144C",
          color: "#fff",
          fontFamily: "var(--font-Bahnschrift)",
          height: "58px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        KYC Profile Form
      </Typography>
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: 2,
        }}
      >
        <TCForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#1A144C",
                  fontFamily: "var(--font-Bahnschrift)",
                }}
              >
                Personal Information:
              </Typography>
              <Divider sx={{ width: "100%", mb: 2, color: "#1A144C" }} />
              <TCInput
                name="name"
                label="Name of Customer"
                required
                fullWidth
              />
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
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#1A144C",
                  fontFamily: "var(--font-Bahnschrift)",
                  mt: 2,
                }}
              >
                Passport Information:
              </Typography>
              <Divider sx={{ width: "100%", color: "#1A144C" }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCInput
                name="passportNo"
                label="Passport No"
                required
                fullWidth
              />
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
              <TCInput
                name="countryOfVisit"
                label="Country of Visit"
                fullWidth
              />
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
            {/* Additional Fields can be added as necessary */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </TCForm>
      </Box>
    </Box>
  );
};

export default KYCForm;
