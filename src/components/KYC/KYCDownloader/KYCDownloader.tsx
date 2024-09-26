"use client";

import dynamic from "next/dynamic";
import KYCDocument from "@/components/Document/KYCDocument/KYCDocument";
import { RootState } from "@/redux/store";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const BlobProvider = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.BlobProvider),
  { ssr: false }
);

const KYCDownloader = ({ disabled }: { disabled?: boolean }) => {
  const kycData = useSelector((state: RootState) => state.kyc);
  const router = useRouter();

  const downloadPDF = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "KYC_Document.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveAndExit = (blob: Blob | null) => {
    if (blob) {
      downloadPDF(blob);
      router.push("/");
    } else {
      console.error("Blob is null. Unable to download.");
    }
  };

  return (
    <BlobProvider document={<KYCDocument kycData={kycData} />}>
      {({ blob }) => (
        <Button
          onClick={() => {
            handleSaveAndExit(blob);
          }}
          variant="contained"
          color="primary"
          fullWidth
          disabled={disabled}
        >
          Save and Exit
        </Button>
      )}
    </BlobProvider>
  );
};

export default KYCDownloader;
