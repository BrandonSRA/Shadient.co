import {
  Box,
  Button,
  Container,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export function DiscussSection() {
  return (
    <>
      <Container sx={{ backgroundColor: "#110F0F", padding: "4rem" }}>
        <Stack
          direction="column"
          flexWrap="wrap"
          alignItems={{ sm: "center", xs: "center", xl: "center" }}
          textAlign="center"
          padding="2rem"
          sx={{ backgroundColor: "#FFB219", borderRadius: "5px" }}
        >
          <DialogTitle
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "1",
            }}
          >
            Let’s discuss the idea
          </DialogTitle>
          <Typography color="#5e5e5e" fontSize="10px">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta <br /> feugiat scelerisque in elit.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: "2rem" }}>
            <TextField
              type="email"
              placeholder="Your email"
              sx={{
                width: "100%",
                borderRadius: "100px",
                border: "1px solid #A1AEBF",
                backgroundColor: "#fff",
                mt: "1rem",
                [`& fieldset`]: {
                  borderRadius: "100px",
                  border: "none",
                },
              }}
              InputProps={{
                style: {
                  color: "#000",
                },
              }}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                width: "50%",
                backgroundColor: "#000",
                borderRadius: "100px",
                p: "0px 24px",
                ":hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              Send
            </Button>
          </Stack>
        </Stack>
        <Box
          display="flex"
          sx={{ padding: "1rem", flexDirection: "row-reverse" }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#FFA800",
              border: "1px solid #FFA800",
              borderRadius: "100px",
              p: "5px 24px",
            }}
          >
            Go to top
          </Button>
        </Box>
      </Container>
    </>
  );
}
