import { Box, Button, Container, Stack, Typography } from "@mui/material";

export function ChoseUsSection() {
  return (
    <>
      <Container sx={{ backgroundColor: "#000" }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          textAlign="start"
          justifyContent="center"
          alignItems="center"
          padding={{ xs: "2rem", lg: "4rem" }}
          sx={{ color: "#ffff", gap: "4rem" }}
        >
          <Box display="flex" alignSelf="center">
            {" "}
            <img
              src="/img/PersonIcon.svg"
              width="100%"
              style={{
                backgroundSize: "cover, cover",
              }}
            />
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            sx={{ gap: "1rem", maxWidth: "400px" }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "700", fontSize: "1.5rem" }}
            >
              Why choose us
            </Typography>
            <Typography sx={{ color: "#e5e5e5e5", fontSize: "12px" }}>
              Commodo diam vulputate dui proin quis enim nibh. Non integer ac
              libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at
              eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
              blandit.{" "}
            </Typography>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#FFA800",
                  border: "1px solid #FFA800",
                  borderRadius: "100px",
                  p: "5px 24px",
                }}
              >
                Let’s connect
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
