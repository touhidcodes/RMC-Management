"use client";

import KYCForm from "@/components/KYC Form/KYCForm";
import KYCPreview from "@/components/KYC Preview/KYCPreview";
import { Container } from "@mui/material";

const KYCBuilderPage = () => {
  return (
    <Container maxWidth="xl">
      <div className="grid grid-cols-2 gap-10">
        {/* Input Form */}
        <div>
          <KYCForm />
        </div>
        {/*  Preview */}
        <KYCPreview />
      </div>
    </Container>
  );
};

export default KYCBuilderPage;
