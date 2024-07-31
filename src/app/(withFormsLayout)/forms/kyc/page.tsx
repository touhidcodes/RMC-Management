"use client";

import KYCForm from "@/components/KYC Form/kycForm";
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
        <div>
          Hi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          earum saepe ducimus reiciendis, vero, voluptatum eum sapiente
          cupiditate laudantium nulla eveniet deleniti ex commodi provident
          rerum magnam officia praesentium ipsum magni ab voluptates quos!
        </div>
      </div>
    </Container>
  );
};

export default KYCBuilderPage;
