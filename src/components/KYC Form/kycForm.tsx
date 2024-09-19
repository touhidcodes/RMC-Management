import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setKycData } from "@/redux/features/kycSlice";
import TCDatePicker from "../Forms/TCDatePicker";
import TCDropdown from "../Forms/TCDropdown";

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

  const transactionOptions = [
    { value: "Buy", label: "Buy" },
    { value: "Sell", label: "Sell" },
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

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
                Transaction Information:
              </Typography>
              <Divider sx={{ width: "100%", color: "#1A144C" }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TCDropdown
                name="transactionType"
                label="Transaction Type"
                options={transactionOptions}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TCInput
                name="exchangeRate"
                label="Exchange Rate"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TCInput name="amount" label="Amount" required fullWidth />
            </Grid>
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
              <Divider sx={{ width: "100%", color: "#1A144C" }} />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12} sm={4}>
              <TCInput name="passportType" label="Type" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TCInput
                name="countryCode"
                label="Country Code"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TCDropdown
                name="gender"
                label="Gender"
                options={genderOptions}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TCInput
                name="passportNo"
                label="Passport No"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCDatePicker
                name="passportIssueDate"
                label="Date Of Issue"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCDatePicker
                name="passportExpiryDate"
                label="Expiry Date"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCDatePicker
                name="passportIssuePlace"
                label="Place of Issue"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCDatePicker
                name="dateOfBirth"
                label="Date of Birth"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TCInput
                name="bangladeshiNID"
                label="National ID No (For Bangladeshi National)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TCInput name="occupation" label="Occupation" fullWidth />
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
                Address Information:
              </Typography>
              <Divider sx={{ width: "100%", color: "#1A144C" }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCInput name="street" label="Street / Road" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCInput name="post" label="Upazila / Post" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCInput name="city" label="City / District" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TCInput
                name="state"
                label="State / Division"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TCInput
                name="phone"
                label="Telephone No / Mobile No"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TCInput name="email" label="Email" fullWidth />
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
