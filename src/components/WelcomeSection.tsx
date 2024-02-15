import {
  Button,
  Container,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function WelcomeSection() {
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
          alignItems={{ sm: "center", xs: "center", xl: "center" }}
          textAlign="left"
          padding={{ xs: "3rem", md: "5rem" }}
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
          <Stack direction="row" spacing={2} sx={{ mt: "2rem" }}>
            <TextField
              type="email"
              placeholder="Email"
              sx={{
                width: "100%",
                borderRadius: "100px",
                border: "1px solid #ffff",
                backgroundColor: "#0F0F0F",
                mt: "1rem",
                [`& fieldset`]: {
                  borderRadius: "100px",
                  border: "none",
                },
              }}
              InputProps={{
                style: {
                  color: "#ffff",
                },
              }}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                color: "#000",
                width: "50%",
                backgroundColor: "#FFA800",
                borderRadius: "100px",
                p: "0px 24px",
                ":hover": {
                  backgroundColor: "#FFA800",
                },
              }}
            >
              Attract
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
