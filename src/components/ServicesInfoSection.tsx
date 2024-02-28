import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export function ServicesInfoCompany() {
  type CardProps = {
    icon?: React.ReactElement;
    title: string;
    subtitle: string;
    text: string;
  };

  const MyCard: React.FC<CardProps> = ({ icon, title, subtitle, text }) => (
    <Stack
      width={{ xs: "300px", lg: "400px", xl: "700px" }}
      sx={{
        m: 1,
        p: "15px",
        border: "solid #fff",
        background: "#110F0F",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <Stack sx={{ pb: "10px" }}>{icon}</Stack>
      <Typography
        fontSize="10px"
        sx={{
          color: "#1A365D",
          background: "#FFA800",
          borderRadius: "10px",
          p: "5px 10px",
          width: "fit-content",
        }}
      >
        {title}
      </Typography>
      <Typography fontSize="25px" sx={{ color: "#fff", pb: "10px" }}>
        {subtitle}
      </Typography>
      <Box>
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography fontSize="15px" sx={{ color: "#728095" }}>
            {text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
          <IconButton>
            <ArrowCircleRightOutlinedIcon sx={{ color: "#728095" }} />
          </IconButton>
        </Link>
      </Box>
    </Stack>
  );

  const cards = [
    {
      icon: <img src="img/Intro.png" />,
      title: "User testing",
      subtitle: "Creative landing page",
      text: "Read more",
    },
    {
      icon: <img src="img/Intro.png" />,
      title: "User testing",
      subtitle: "Creative landing page",
      text: "Read more",
    },
    {
      icon: <img src="img/Intro.png" />,
      title: "User testing",
      subtitle: "Creative landing page",
      text: "Read more",
    },
  ];
  return (
    <>
      <Container sx={{ backgroundColor: "#110F0F" }}>
        <Stack
          direction="column"
          textAlign="start"
          alignItems="flex-start"
          sx={{ color: "#ffff", p: "5rem ", pb: "0", gap: "2rem" }}
        >
          <Typography sx={{ fontSize: "30px" }}>Process </Typography>
          <Typography sx={{ fontSize: "10px", color: "#5e5e5e" }}>
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac
            libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu
            elit. Morbi aliquam porttitor mattis consequat neque, tellus
            blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer
            ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at
            eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
            blandit. Commodo diam vulputate dui proin quis enim nibh. Non
            integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed
            faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque,
            tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non
            integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed
            faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque,
            tellus blandit.
          </Typography>
          <Typography sx={{ fontSize: "30px" }}>Branding Works </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignContent={{ xs: "center", lg: "flex-start" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
          textAlign="start"
          justifyContent="center"
          flexWrap="wrap"
          p="2rem"
        >
          {cards.map((card, index) => (
            <MyCard
              key={index}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
