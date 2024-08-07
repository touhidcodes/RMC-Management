import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { RootState } from "@/redux/store";

const KYCPreview = () => {
  const kycData = useSelector((state: RootState) => state.kyc);

  return (
    <Box className="bg-white p-6 shadow-md rounded-md">
      <Typography variant="h6" className="font-bold mb-4">
        RAHMAN MONEY CHANGER
      </Typography>
      <Typography variant="subtitle1" className="mb-2">
        Benapole Road Checkpost, Sharsha, Jessore
      </Typography>
      <Typography variant="subtitle2" className="mb-6">
        Application For Foreign Currency Exchange (KYC Profile Form)
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            1. Name of Customer:{" "}
            <span className="font-medium">{kycData.name}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            2. Father's Name:{" "}
            <span className="font-medium">{kycData.fathersName}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            3. Mother's Name:{" "}
            <span className="font-medium">{kycData.mothersName}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            4. Spouse's Name:{" "}
            <span className="font-medium">{kycData.spouseName}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            5. Nationality:{" "}
            <span className="font-medium">{kycData.nationality}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            6. Passport Details:
            <Typography variant="body2" component="span">
              {" "}
              <br />
              (A) Passport No:{" "}
              <span className="font-medium">{kycData.passportNo}</span> <br />
              (B) Date of Issue:{" "}
              <span className="font-medium">
                {kycData.passportIssueDate}
              </span>{" "}
              <br />
              (C) Place of Issue:{" "}
              <span className="font-medium">
                {kycData.passportPlaceOfIssue}
              </span>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            7. National ID No (For Bangladeshi National):{" "}
            <span className="font-medium">{kycData.nid}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            8. Date of Birth: <span className="font-medium">{kycData.dob}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            9. Occupation:{" "}
            <span className="font-medium">{kycData.occupation}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            10. Address:
            <Typography variant="body2" component="span">
              {" "}
              <br />
              (A) Contact Details:{" "}
              <span className="font-medium">{kycData.address}</span> <br />
              (B) Telephone No / Mobile No:{" "}
              <span className="font-medium">{kycData.phone}</span>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            11. Country of Visit:{" "}
            <span className="font-medium">{kycData.countryOfVisit}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            12. Purpose of Travel:{" "}
            <span className="font-medium">{kycData.purposeOfTravel}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {kycData.dateOfArrival && (
            <Typography variant="body1">
              13. Date of Arrival (Approx):{" "}
              <span className="font-medium">{kycData.dateOfArrival}</span>
            </Typography>
          )}
          {kycData.dateOfDeparture && (
            <Typography variant="body1">
              13. Date of Departure (Approx):{" "}
              <span className="font-medium">{kycData.dateOfDeparture}</span>
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            14. Source of Fund:{" "}
            <span className="font-medium">{kycData.sourceOfFund}</span>
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" className="mt-4">
        Sincerely Yours,
      </Typography>
      <Typography variant="body2" className="mt-2">
        (Signature of Customer)
      </Typography>

      <Typography variant="body2" className="mt-4">
        Annexure (Please Put Tick Mark)
      </Typography>
      <Typography variant="body2" component="div">
        1. Copy of Passport <br />
        2. Copy of Visa <br />
        3. Copy of Air Ticket <br />
        4. FMJ Form (Where Applicable)
      </Typography>

      <Typography variant="body2" className="mt-4">
        (Name Signature & Seal of the Officer / Manager)
      </Typography>
    </Box>
  );
};

export default KYCPreview;
