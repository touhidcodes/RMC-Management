"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { PDFViewer } from "@react-pdf/renderer";
import KYCDocument from "@/components/Document/KYCDocument/KYCDocument";

const KYCPreview = () => {
  const kycData = useSelector((state: RootState) => state.kyc);

  return (
    <PDFViewer className="w-full h-screen hidden md:block">
      <KYCDocument kycData={kycData} />
    </PDFViewer>
  );
};

export default KYCPreview;
