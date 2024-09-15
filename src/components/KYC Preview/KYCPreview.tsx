import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// A4 paper size dimensions in mm for layout purposes
const A4_WIDTH = "210mm";
const A4_HEIGHT = "297mm";

// Register the custom font
Font.register({
  family: "Bahnschrift",
  src: "/fonts/Bahnschrift.ttf",
});

// Styles for the PDF layout
const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  field: {
    marginBottom: 5,
    fontSize: 12,
  },
  label: { fontWeight: "bold", color: "#4A5568" },
  value: {
    color: "#4A5568",
  },
  //  global styling
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
    width: A4_WIDTH,
    height: A4_HEIGHT,
    fontFamily: "Bahnschrift",
    fontSize: 12,
  },
  section: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 4,
  },
  marginTop: {
    marginTop: 10,
  },
  detailsMargin: {
    marginLeft: 30,
  },
  //  text styling
  textView: {
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    marginBottom: 5,
  },
  textParagraph: {
    fontWeight: "bold",
    color: "#4A5568",
    fontSize: 14,
  },
  textTerms: {
    fontWeight: "bold",
    color: "#4A5568",
    fontSize: 14,
    marginBottom: 4,
  },
  textLabel: {
    fontWeight: "bold",
    color: "#4A5568",
  },
  textValue: {
    color: "#4A5568",
  },
  textRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  //  personal info styling
  personalRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  personalColumn1: {
    flexShrink: 1,
  },
  personalColumn2: {
    flexShrink: 4,
    alignContent: "space-around",
  },
  infoBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 10,
    width: "100%",
  },
  boxContent: {
    marginTop: 1,
  },
});

const KYCPreview = () => {
  const kycData = useSelector((state: RootState) => state.kyc);

  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            {/* Header */}
            <Image src="/assets/images/Header.png" />
            {/* Date and Serial No */}
            <View style={styles.textRow}>
              <View style={styles.textView}>
                <Text style={styles.textLabel}>Date : </Text>
                <Text style={styles.textValue}>12 Sep 2024</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.textLabel}>Serial No : </Text>
                <Text style={styles.textValue}>12</Text>
              </View>
            </View>
            {/* Terms of Agreement */}
            <View style={styles.marginTop}>
              <Text style={styles.textTerms}>Dear Sir,</Text>
              <Text style={styles.textParagraph}>
                I want to Buy / Sell Foreign Currency Form / Your Money Changer
                As Per Money Laundering Prevention Act, 2012 Detailed
                Information Is Furnished Below:
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.personalRow}>
                <View style={styles.personalColumn1}>
                  {/* Name of Customer */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>1. Name of Customer : </Text>
                    <Text style={styles.textValue}>
                      {kycData.name || "N/A"}
                    </Text>
                  </View>
                  {/* Father's Name */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>2. Father's Name : </Text>
                    <Text style={styles.textValue}>
                      {kycData.fathersName || "N/A"}
                    </Text>
                  </View>
                  {/* Mother's Name */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>3. Mother's Name : </Text>
                    <Text style={styles.textValue}>
                      {kycData.mothersName || "N/A"}
                    </Text>
                  </View>
                  {/* Spouse's Name */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>4. Spouse's Name : </Text>
                    <Text style={styles.textValue}>
                      {kycData.spouseName || "N/A"}
                    </Text>
                  </View>
                  {/* Nationality */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>5. Nationality : </Text>
                    <Text style={styles.textValue}>
                      {kycData.nationality || "N/A"}
                    </Text>
                  </View>
                </View>
                <View style={styles.personalColumn2}>
                  {/* Exchange Information Box */}
                  <View style={styles.infoBox}>
                    <View style={styles.boxContent}>
                      {/* Type of Transaction */}
                      <View style={styles.textView}>
                        <Text style={styles.textLabel}>
                          Type Of Transaction :{" "}
                        </Text>
                        <Text style={styles.textValue}>Buy</Text>
                      </View>
                      {/* Foreign Currency */}
                      <View style={styles.textView}>
                        <Text style={styles.textLabel}>
                          Foreign Currency :{" "}
                        </Text>
                        <Text style={styles.textValue}>USD Dollars</Text>
                      </View>
                      {/* Exchange Rate */}
                      <View style={styles.textView}>
                        <Text style={styles.textLabel}>Exchange Rate : </Text>
                        <Text style={styles.textValue}>100.22</Text>
                      </View>
                      {/* Amount */}
                      <View style={styles.textView}>
                        <Text style={styles.textLabel}>Amount : </Text>
                        <Text style={styles.textValue}>100.22</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              {/* Passport Information */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>6. Passport Details : </Text>
              </View>
              <View style={styles.detailsMargin}>
                {/* Passport No */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(A). Passport No : </Text>
                  <Text style={styles.textValue}>
                    {kycData.passportNo || "N/A"}
                  </Text>
                </View>
                {/* Date of Issue */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(B). Date Of Issue : </Text>
                  <Text style={styles.textValue}>
                    {kycData.passportIssueDate || "N/A"}
                  </Text>
                </View>
                {/* Place of Issue */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(C). Place Of Issue : </Text>
                  <Text style={styles.textValue}>
                    {kycData.passportPlaceOfIssue || "N/A"}
                  </Text>
                </View>
              </View>
              {/* National ID */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>
                  7. National ID (For Bangladeshi National) :{" "}
                </Text>
                <Text style={styles.textValue}>{kycData.nid || "N/A"}</Text>
              </View>
              {/* Date of Birth */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>8. Date Of Birth : </Text>
                <Text style={styles.textValue}>{kycData.dob || "N/A"}</Text>
              </View>
              {/* Occupation */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>9. Occupation : </Text>
                <Text style={styles.textValue}>
                  {kycData.occupation || "N/A"}
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              {/* Address Information */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>10. Address : </Text>
              </View>
              <View style={styles.detailsMargin}>
                {/* Passport No */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(A). Contact Details : </Text>
                  <Text style={styles.textValue}>
                    {kycData.address || "N/A"}
                  </Text>
                </View>
                {/* Date of Issue */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>
                    (B). Telephone / Mobile No :{" "}
                  </Text>
                  <Text style={styles.textValue}>{kycData.phone || "N/A"}</Text>
                </View>
              </View>
              {/* National ID */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>
                  7. National ID (For Bangladeshi National) :{" "}
                </Text>
                <Text style={styles.textValue}>{kycData.nid || "N/A"}</Text>
              </View>
              {/* Date of Birth */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>8. Date Of Birth : </Text>
                <Text style={styles.textValue}>{kycData.dob || "N/A"}</Text>
              </View>
              {/* Occupation */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>9. Occupation : </Text>
                <Text style={styles.textValue}>
                  {kycData.occupation || "N/A"}
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>7. Date Of Issue:</Text>
              <Text style={styles.value}>
                {kycData.passportIssueDate || "N/A"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>8. Place Of Issue:</Text>
              <Text style={styles.value}>
                {kycData.passportPlaceOfIssue || "N/A"}
              </Text>
            </View>

            {/* Contact and Address Information */}
            <View style={styles.section}>
              <Text style={styles.label}>9. National ID (NID):</Text>
              <Text style={styles.value}>{kycData.nid || "N/A"}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>10. Date of Birth:</Text>
              <Text style={styles.value}>{kycData.dob || "N/A"}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>11. Occupation:</Text>
              <Text style={styles.value}>{kycData.occupation || "N/A"}</Text>
            </View>

            {/* Address Details */}
            <View style={styles.section}>
              <Text style={styles.label}>12. Address:</Text>
              <Text style={styles.value}>{kycData.address || "N/A"}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>13. Phone:</Text>
              <Text style={styles.value}>{kycData.phone || "N/A"}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default KYCPreview;

//               <p>
//                 Rahman Money Changer, Benapole Road Checkpost, Sharsha, Jessore
//                 <br />
//                 Phone: +88-01716-255522 | Email: info@rahmanmoneychanger.com
//               </p>
//               <p className="mt-2">
//                 © 2024 Rahman Money Changer. All rights reserved.
//               </p>
