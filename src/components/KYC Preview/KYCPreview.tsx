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
      <Typography>Email: {kycData.email}</Typography>
      <Typography>Phone: {kycData.phone}</Typography>
      <Typography>Address: {kycData.address}</Typography>
      <Typography>Amount: {kycData.amount}</Typography>
      <Typography>Date: {kycData.date}</Typography>
      <Typography>From: {kycData.from}</Typography>
    </Box>
  );
};

export default KYCPreview;
