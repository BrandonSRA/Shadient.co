import {
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

export function Footer() {
  return (
    <Container sx={{ backgroundColor: "#000", padding: "4rem" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems={{ xs: "center", md: "flex-start" }}
        spacing={1}
        sx={{ pb: "5rem" }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Company
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            About us
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Team
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Careers
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Services
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Branding
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Web development
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Digital marketing
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Mobile app
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            SEO
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            User testing
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Resources
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Blog
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Case study
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Testimonials
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Follow us
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Instagram
          </Typography>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Figma
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          <Toolbar disableGutters sx={{ justifyContent: { xs: "center", md: "start" } }}>
            <Link sx={{ mr: 1 }}>
              <img src="/img/Frame.svg" />
            </Link>
            <Typography
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              Shadient.co
            </Typography>
          </Toolbar>
          <Typography variant="body2" sx={{ color: "#5e5e5e" }}>
            Get latest updates
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: "2rem" }}>
            <TextField
              type="email"
              placeholder="Your email"
              sx={{
                width: "100%",
                borderRadius: "100px",
                border: "1px solid #fff",
                backgroundColor: "#0F0F0F",
                mt: "1rem",
                [`& fieldset`]: {
                  borderRadius: "100px",
                  border: "none",
                },
              }}
              InputProps={{
                style: {
                  color: "#fff",
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
              Send
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          variant="body2"
          sx={{ color: "#5e5e5e", textAlign: "center" }}
        >
          Created by Shadient.co
        </Typography>
      </Stack>
    </Container>
  );
}
