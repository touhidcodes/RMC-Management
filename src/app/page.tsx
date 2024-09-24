import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="lg" className="text-center py-20">
      <Typography variant="h2" className="text-4xl md:text-6xl font-bold mb-6">
        Rahman Money Changer
      </Typography>
      <Typography variant="h5" className="text-lg md:text-xl text-gray-600">
        The easiest way to exchange dollars with transparent rates.
      </Typography>

      {/* Button to Forms Page */}
      <Link href="/forms/kyc">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="rounded-full px-8 py-3 text-lg"
          sx={{ mt: 5 }}
        >
          Get Started
        </Button>
      </Link>
      <Typography variant="body2" className="text-gray-500 py-10">
        © 2024 Rahman Money Changer. All rights reserved.
      </Typography>
    </Container>
  );
}
