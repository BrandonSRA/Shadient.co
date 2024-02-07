import { Container, Stack, Typography } from "@mui/material";

export function LandingPage() {
  return (
    <>
      <Container sx={{ width: "100%" }}>
        <Stack direction="column" textAlign="center">
          <Typography sx={{ fontSize: "50px" }}>Shadient</Typography>
          <Typography>Attract NewLeads like never before </Typography>
        </Stack>
      </Container>
    </>
  );
}
