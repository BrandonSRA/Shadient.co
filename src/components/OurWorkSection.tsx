import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export function OurWorkSection() {
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
      icon: <img src="img/Landing.png" />,
      title: "Website",
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
      title: "Digital marketing",
      subtitle: "Why We Collect User’s Data",
      text: "Read more",
    },
    {
      title: "DEVELOPMENT",
      subtitle: "Automation. Advanced Level",
      text: "Read more ",
    },

    {
      title: "Branding",
      subtitle: "Creative Branding",
      text: "Read more",
    },

    {
      title: "SEO",
      subtitle: "How We Optimized Our SEO",
      text: "Read more",
    },
  ];

  return (
    <>
      <Container sx={{ backgroundColor: "#110F0F" }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          textAlign={{ xs: "center", lg: "start" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
          sx={{ color: "#ffff", pt: "5rem ", gap: "2rem" }}
        >
          <Stack sx={{ gap: "1rem", maxWidth: "400px" }}>
            <Typography sx={{ fontSize: "30px" }}>
              Some pieces of our work
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#5e5e5e" }}>
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              consequat magna semper orci a tincidunt.{" "}
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
                Show More
              </Button>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignContent={{ xs: "center", lg: "flex-start" }}
            alignItems={{ xs: "center", lg: "flex-start" }}
            textAlign="start"
            justifyContent="center"
            flexWrap="wrap"
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
        </Stack>
      </Container>
    </>
  );
}
