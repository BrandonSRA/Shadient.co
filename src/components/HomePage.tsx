import {
  Button,
  Container,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as RouterLink } from "react-router-dom";

export function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container
        sx={{
          pt: { md: "10rem", xl: "30rem", xs: "0" },
          p: { xs: 10 },
          position: "fixed",
          overflow: "hidden",
          background: "url(/img/Home.png)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: isMobile ? "right" : "center, center",
          backgroundSize: isMobile ? "auto" : "cover, cover",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          flexWrap={{ sm: "wrap", xs: "nowrap", xl: "wrap" }}
          alignItems={{ sm: "center", xs: "center", xl: "center" }}
          textAlign="left"
          padding="5rem"
        >
          <Stack
            justifyContent="center"
            sx={{
              border: "solid 2px",
              borderImage:
                "linear-gradient(143deg, rgba(157,232,238,1) 25%, rgba(159,140,237,1) 51%, rgba(250,124,11,1) 79%);",
              borderImageSlice: 1,
              padding: "2rem",
            }}
          >
            <DialogTitle
              sx={{
                color: "#ffff",
                fontWeight: "700",
                fontSize: { xs: "45px", md: "50px" },
                lineHeight: "1",
              }}
            >
              Welcome to <br />
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
                Shadient.co
              </Typography>{" "}
            </DialogTitle>
            <Typography color={{xs: "#fff", md:"#5e5e5e" }} fontSize="10px" textAlign="center">
              This is a page made with react.js and material ui, the
              <br /> template is in the figma shadient.co
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              sx={{ mt: "2rem" }}
            >
              <Button
                component={RouterLink}
                to="/landing"
                variant="contained"
                sx={{
                  color: "#000",
                  width: "50%",
                  backgroundColor: "#FFA800",
                  borderRadius: "100px",
                  p: "0px 24px",
                }}
              >
                Go to landing
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
