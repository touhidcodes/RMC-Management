import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { formatDate, formatStandardDate } from "@/utils/formatDate";
import { KYCParams } from "@/redux/features/kycSlice";

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
  //  global styling
  page: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
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
    marginTop: 5,
  },
  detailsMargin: {
    marginLeft: 20,
  },
  //  text styling
  textView: {
    display: "flex",
    flexDirection: "row",
    fontSize: 13,
    marginBottom: 5,
  },
  textParagraph: {
    fontWeight: "bold",
    color: "#4A5568",
    textAlign: "justify",
    fontSize: 13,
  },
  textTerms: {
    fontWeight: "bold",
    color: "#4A5568",
    fontSize: 13,
    marginBottom: 3,
  },
  textLabel: {
    fontWeight: "bold",
    color: "#4A5568",
  },
  textValue: {
    color: "#222831",
  },
  textRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  // multiple column text
  textFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  doubleColumn: {
    width: "48%",
  },
  threeColumn: {
    width: "32%",
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
  //  signature
  signature: {
    fontSize: 14,
    color: "#4A5568",
    marginTop: 5,
    marginBottom: 10,
  },
  textSignature: {
    textDecoration: "underline",
    fontSize: 13,
    marginTop: 45,
  },
  //  annexure
  annexure: {
    marginTop: 5,
  },
  annexureHeader: {
    fontSize: 13,
    textDecoration: "underline",
    marginBottom: 5,
    color: "#4A5568",
  },
  annexureItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },
  checkBox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10,
  },
  annexureText: {
    fontSize: 11,
    color: "#4A5568",
  },
  //  footer
  footer: {
    fontSize: 8,
    color: "#4A5568",
    textAlign: "center",
  },
});

const KYCDocument: React.FC<{ kycData: KYCParams }> = ({ kycData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        {/* Header */}
        <Image src="/assets/images/Header.png" />
        {/* Date and Serial No */}
        <View style={styles.textRow}>
          <View style={styles.textView}>
            <Text style={styles.textLabel}>Date : </Text>
            <Text style={styles.textValue}>{formatDate(kycData?.date)}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textLabel}>Serial No : </Text>
            <Text style={styles.textValue}>{kycData?.serial}</Text>
          </View>
        </View>
        {/* Terms of Agreement */}
        <View style={styles.marginTop}>
          <Text style={styles.textTerms}>Dear Sir,</Text>
          <Text style={styles.textParagraph}>
            I Want To {kycData.transactionType || "Sell"} Foreign Currency Form
            Your Money Changer As Per Money Laundering Prevention Act, 2012
            Detailed Information Is Furnished Below:
          </Text>
        </View>
        {/* Personal Information */}
        <View style={styles.section}>
          <View style={styles.personalRow}>
            <View style={styles.personalColumn1}>
              {/* Name of Customer */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>1. Name of Customer : </Text>
                <Text style={styles.textValue}>{kycData?.name}</Text>
              </View>
              {/* Father's Name */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>2. Father&apos;s Name : </Text>
                <Text style={styles.textValue}>{kycData?.fathersName}</Text>
              </View>
              {/* Mother's Name */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>3. Mother&apos;s Name : </Text>
                <Text style={styles.textValue}>{kycData?.mothersName}</Text>
              </View>
              {/* Spouse's Name */}
              <View style={styles.textView}>
                <Text style={styles.textLabel}>4. Spouse&apos;s Name : </Text>
                <Text style={styles.textValue}>
                  {kycData?.spouseName || "N/A"}
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
                    <Text style={styles.textLabel}>Type Of Transaction : </Text>
                    <Text style={styles.textValue}>
                      {kycData.transactionType || "Sell"}
                    </Text>
                  </View>
                  {/* Foreign Currency */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>Foreign Currency : </Text>
                    <Text style={styles.textValue}>USD Dollars</Text>
                  </View>
                  {/* Exchange Rate */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>Exchange Rate : </Text>
                    <Text style={styles.textValue}>
                      $ {kycData?.exchangeRate}
                    </Text>
                  </View>
                  {/* Amount */}
                  <View style={styles.textView}>
                    <Text style={styles.textLabel}>Amount : </Text>
                    <Text style={styles.textValue}>$ {kycData?.amount}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Passport Information */}
        <View style={styles.section}>
          <View style={styles.textView}>
            <Text style={styles.textLabel}>6. Passport Details : </Text>
          </View>
          <View style={styles.detailsMargin}>
            {/* Horizontal layout for 3 fields */}
            <View style={styles.textFlex}>
              <View style={styles.threeColumn}>
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(A). Type : </Text>
                  <Text style={styles.textValue}>{kycData?.passportType}</Text>
                </View>
              </View>
              <View style={styles.threeColumn}>
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(B). Country Code : </Text>
                  <Text style={styles.textValue}>{kycData?.countryCode}</Text>
                </View>
              </View>
              <View style={styles.threeColumn}>
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(C). Gender : </Text>
                  <Text style={styles.textValue}>{kycData?.gender}</Text>
                </View>
              </View>
            </View>
            {/* Passport No */}
            <View style={styles.textView}>
              <Text style={styles.textLabel}>(D). Passport No : </Text>
              <Text style={styles.textValue}>{kycData?.passportNo}</Text>
            </View>
            {/* Horizontal layout for 2 fields */}
            <View style={styles.textFlex}>
              <View style={styles.doubleColumn}>
                {/* Date of Issue */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(E). Date Of Issue : </Text>
                  <Text style={styles.textValue}>
                    {formatStandardDate(kycData?.passportIssueDate)}
                  </Text>
                </View>
              </View>
              <View style={styles.doubleColumn}>
                {/* Expiry Date */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(F). Expiry Date : </Text>
                  <Text style={styles.textValue}>
                    {formatStandardDate(kycData?.passportExpiryDate)}
                  </Text>
                </View>
              </View>
            </View>
            {/* Horizontal layout for 2 fields */}
            <View style={styles.textFlex}>
              <View style={styles.doubleColumn}>
                {/* Place of Issue */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(G). Place Of Issue : </Text>
                  <Text style={styles.textValue}>
                    {kycData?.passportIssuePlace}
                  </Text>
                </View>
              </View>
              <View style={styles.doubleColumn}>
                {/* Date of Birth */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(H). Date Of Birth : </Text>
                  <Text style={styles.textValue}>
                    {formatStandardDate(kycData?.dateOfBirth)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* National ID */}
          <View style={styles.textView}>
            <Text style={styles.textLabel}>
              7. National ID (For Bangladeshi National) :{" "}
            </Text>
            <Text style={styles.textValue}>
              {kycData?.bangladeshiNID || "N/A"}
            </Text>
          </View>
          {/* Occupation */}
          <View style={styles.textView}>
            <Text style={styles.textLabel}>8. Occupation : </Text>
            <Text style={styles.textValue}>{kycData?.occupation || "N/A"}</Text>
          </View>
        </View>
        {/* Address Information */}
        <View style={styles.section}>
          <View style={styles.textView}>
            <Text style={styles.textLabel}>9. Address Information : </Text>
          </View>
          <View style={styles.detailsMargin}>
            {/* Horizontal layout for 2 fields */}
            <View style={styles.textFlex}>
              <View style={styles.doubleColumn}>
                {/* Street or Road Name */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(A). Street / Road : </Text>
                  <Text style={styles.textValue}>
                    {kycData?.street || "N/A"}
                  </Text>
                </View>
              </View>
              <View style={styles.doubleColumn}>
                {/* Upazila or Post */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(B). Upazila / Post : </Text>
                  <Text style={styles.textValue}>{kycData?.post || "N/A"}</Text>
                </View>
              </View>
            </View>
            {/* Horizontal layout for 2 fields */}
            <View style={styles.textFlex}>
              <View style={styles.doubleColumn}>
                {/* City or District */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(C). City / District : </Text>
                  <Text style={styles.textValue}>{kycData?.city}</Text>
                </View>
              </View>
              <View style={styles.doubleColumn}>
                {/* State or Division */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(D). State / Division : </Text>
                  <Text style={styles.textValue}>{kycData?.state}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Telephone or Mobile */}
          <View style={styles.textView}>
            <Text style={styles.textLabel}>10. Telephone / Mobile No : </Text>
            <Text style={styles.textValue}>{kycData?.phone}</Text>
          </View>
          {/* Email */}
          <View style={styles.textView}>
            <Text style={styles.textLabel}>11. Email : </Text>
            <Text style={styles.textValue}>{kycData?.email || "N/A"}</Text>
          </View>
        </View>
        {/* Travel Information */}
        <View style={styles.section}>
          <View style={styles.textView}>
            <Text style={styles.textLabel}>12. Travel Information : </Text>
          </View>
          <View style={styles.detailsMargin}>
            {/* Horizontal layout for 2 fields */}
            <View style={styles.textFlex}>
              <View style={styles.doubleColumn}>
                {/* Country of Visit */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>(A). Country Of Visit : </Text>
                  <Text style={styles.textValue}>
                    {kycData?.countryVisit || "N/A"}
                  </Text>
                </View>
              </View>
              <View style={styles.doubleColumn}>
                {/* Date of Arrival / Departure */}
                <View style={styles.textView}>
                  <Text style={styles.textLabel}>
                    (B). Date Of {kycData?.travelType || "Departure"} :{" "}
                  </Text>
                  <Text style={styles.textValue}>
                    {formatStandardDate(kycData?.travelDate)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Purpose of Travel */}
          <View style={styles.textView}>
            <Text style={styles.textLabel}>13. Purpose Of Travel : </Text>
            <Text style={styles.textValue}>
              {kycData?.travelPurpose || "N/A"}
            </Text>
          </View>
          {/* Source of Fund */}
          <View style={styles.textView}>
            <Text style={styles.textLabel}>14. Source of Fund: </Text>
            <Text style={styles.textValue}>{kycData?.fundSource || "N/A"}</Text>
          </View>
        </View>

        {/* Signature Section*/}
        <View style={styles.marginTop}>
          {/* Horizontal layout for 3 fields */}
          <View style={styles.textFlex}>
            {/* Sincerely Yours and Signature */}
            <View style={styles.threeColumn}>
              <View style={styles.signature}>
                <Text style={styles.textLabel}>Sincerely Yours,</Text>
                <Text style={styles.textSignature}>
                  (Signature Of Customer)
                </Text>
              </View>
            </View>
            {/*  Signature of Officer */}
            <View style={styles.threeColumn}>
              <View style={styles.signature}>
                <Text style={styles.textLabel}>Signature & Seal</Text>
                <Text style={styles.textSignature}>(Officer / Manager)</Text>
              </View>
            </View>
            <View style={styles.threeColumn}>
              {/* Annexure Section */}
              <View style={styles.annexure}>
                <Text style={styles.annexureHeader}>
                  Annexure (Please Tick Mark):
                </Text>
                {/* Annexure Items */}
                <View style={styles.annexureItem}>
                  <View style={styles.checkBox} />
                  <Text style={styles.annexureText}>Copy of Passport</Text>
                </View>
                <View style={styles.annexureItem}>
                  <View style={styles.checkBox} />
                  <Text style={styles.annexureText}>Copy of Visa</Text>
                </View>
                <View style={styles.annexureItem}>
                  <View style={styles.checkBox} />
                  <Text style={styles.annexureText}>Copy of Air Ticket</Text>
                </View>
                <View style={styles.annexureItem}>
                  <View style={styles.checkBox} />
                  <Text style={styles.annexureText}>
                    FMJ Form (Where Applicable)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Footer Section */}
        <View style={styles.footer}>
          <Text>
            Rahman Money Changer, Benapole Road Checkpost, Sharsha, Jashore |
            Phone: +88-01776-525552 | Email: rahmanmoneychanger98@gmail.com
          </Text>
          <Text>&copy; 2024 Rahman Money Changer. All rights reserved.</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default KYCDocument;
