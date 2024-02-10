import { Container, DialogTitle, Stack, Typography } from "@mui/material";

export function WelcomeSection() {
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          background:
            "url(/img/boxes.png), radial-gradient(circle at 100% 0%, rgba(139, 123, 207, 1) 0%, rgba(0, 0, 0, 1) 22%, rgba(0, 0, 0, 1) 49%, rgba(0, 0, 0, 1) 92%, rgba(239, 147, 100, 1) 100%)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "center, center",
          backgroundSize: "cover, cover",
        }}
      >
        <Stack
          direction="column"
          flexWrap="wrap"
          alignItems="center"
          textAlign="left"
          sx={{ p: "10rem" }}
        >
          <DialogTitle
            sx={{
              color: "#ffff",
              fontWeight: "700",
              fontSize: "50px",
              lineHeight: "1",
            }}
          >
            Attract <br />
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "50px",
                lineHeight: "1",
                background:
                  "linear-gradient(45deg, #9f8ced 0%, #fa7c0b 32%, #9de8ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NewLeads
            </Typography>{" "}
            <br />
            like never <br /> before
          </DialogTitle>
          <Typography color="#5e5e5e" fontSize="10px">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            <br />
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros{" "}
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
