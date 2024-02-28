import { Button, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container
        sx={{
          background: "url(/img/background.png)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: isMobile ? "right" : "center, center",
          backgroundSize: isMobile ? "auto" : "cover, cover",
        }}
      >
        <Stack
          direction="column"
          flexWrap="wrap"
          alignItems="flex-start"
          textAlign="left"
          padding={{ xs: "5rem", md: "5rem" }}
        >
          <Stack justifyContent="flex-start">
            <Typography color="#FFA800">Branding</Typography>
            <Typography
              paddingTop={2}
              paddingBottom={2}
              sx={{
                color: "#ffff",
                fontWeight: "700",
                fontSize: "50px",
                lineHeight: "1",
              }}
            >
              Find your niche
            </Typography>
            <Typography color="#5e5e5e" fontSize="10px">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              <br />
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Risus
              <br />
              commodo id odio turpis pharetra elementum. Pulvinar porta porta
              <br />
              feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: "2rem" }}>
              <Button
                variant="contained"
                sx={{
                  color: "#000",
                  width: { xs: "60%", md: "40%" },
                  backgroundColor: "#FFA800",
                  borderRadius: "100px",
                  p: "0px 24px",
                  ":hover": {
                    backgroundColor: "#FFA800",
                  },
                }}
              >
                Build my brand
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
