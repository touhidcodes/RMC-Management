import { NextResponse } from "next/server";
import {
  Page,
  Text,
  StyleSheet,
  Document,
  renderToStream,
} from "@react-pdf/renderer";

// Define the types for KYC data
interface KycData {
  transactionType: string;
  currency: string;
  exchangeRate: string;
  amount: string;
  name: string;
  address: string;
  // Add other necessary fields
}

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  field: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Define the KYC PDF document
const KycPdfDocument = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>KYC Preview Form</Text>
    </Page>
  </Document>
);

export async function GET(request: Request) {
  //   const url = new URL(request.url);
  //   const kycDataString = url.searchParams.get("kycData");

  //   if (!kycDataString) {
  //     return NextResponse.json(
  //       { message: "No KYC data provided" },
  //       { status: 400 }
  //     );
  //   }

  // Parse the KYC data from the URL query string
  //   const kycData: KycData = JSON.parse(kycDataString);

  // Render the PDF to a stream
  const pdfStream = await renderToStream(<KycPdfDocument />);

  // Return the PDF stream as a response with appropriate headers
  return new NextResponse(
    pdfStream as unknown as ReadableStream
    //     {
    //     headers: {
    //       "Content-Type": "application/pdf",
    //       "Content-Disposition": 'inline; filename="kyc-preview.pdf"',
    //     },
    //   }
  );
}
