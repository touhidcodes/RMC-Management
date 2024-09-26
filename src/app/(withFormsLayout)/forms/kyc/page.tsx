"use client";

import KYCForm from "@/components/KYC/KYCForm/KYCForm";
import KYCPreview from "@/components/KYC/KYCPreview/KYCPreview";
import { Box, Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

const KYC = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Paper sx={{ borderRadius: 2, backgroundColor: "#F5F7F8" }}>
            <KYCForm />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100vh",
              overflowY: "auto",
              position: "sticky",
              top: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {isBrowser ? (
              <KYCPreview />
            ) : (
              <div className="flex items-center justify-center h-screen">
                <p className="text-[#4A5568]">Loading PDF viewer...</p>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KYC;
