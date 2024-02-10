import { Container, Stack, Typography } from "@mui/material";

export function SectionInfo() {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ backgroundColor: "#000" }}>
        <Stack
          direction="row"
          textAlign="start"
          sx={{ color: "#ffff", p: "5rem ", gap: "4rem" }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            Trusted by 200+ companies around the world
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
            amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id
            in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus
            ac.{" "}
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
