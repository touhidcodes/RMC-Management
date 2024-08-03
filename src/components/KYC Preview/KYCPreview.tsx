import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { RootState } from "@/redux/store";

const KYCPreview = () => {
  const kycData = useSelector((state: RootState) => state.kyc);

  return (
    <Box sx={{ p: 2, mt: 4, border: "1px solid #ccc" }}>
      <Typography variant="h6">KYC Preview</Typography>
      <Typography>Name: {kycData.name}</Typography>
      <Typography>Email: {kycData.fathersName}</Typography>
      <Typography>Email: {kycData.mothersName}</Typography>
      <Typography>Phone: {kycData.phone}</Typography>
      <Typography>Address: {kycData.address}</Typography>
      <Typography>Amount: {kycData.amount}</Typography>
    </Box>
  );
};

export default KYCPreview;
