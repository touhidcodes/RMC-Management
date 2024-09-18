"use client";

import KYCForm from "@/components/KYC Form/KYCForm";
import KYCPreview from "@/components/KYC Preview/KYCPreview";
import { Box, Container, Grid, Paper } from "@mui/material";

const KYCBuilderPage = () => {
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
            <KYCPreview />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KYCBuilderPage;
