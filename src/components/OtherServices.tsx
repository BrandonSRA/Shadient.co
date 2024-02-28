import {
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export function OthersServices() {
  type CardProps = {
    icon: React.ReactElement;
    title: string;
    text: string;
  };

  const MyCard: React.FC<CardProps> = ({ icon, title, text }) => (
    <Stack
      sx={{
        perspective: "1000px",
        transition: "transform 0.4s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(30deg)",
            "& > div:nth-of-type(2)": {
              transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
            },
            "& > div:nth-of-type(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
      direction={{ xs: "column", lg: "row" }}
      alignContent={{ xs: "center", lg: "flex-start" }}
      textAlign="start"
      justifyContent="center"
      m={1}
    >
      <Card
        sx={{
          maxWidth: 345,
          m: 1,
          border: "solid #fff",
          background: "#110F0F",
          color: "#fff",
        }}
      >
        <IconButton>{icon}</IconButton>
        <CardContent sx={{ pt: "0px" }}>
          <Typography fontSize="30px" sx={{ color: "#fff", pb: "10px" }}>
            {title}
          </Typography>
          <Typography fontSize="15px" sx={{ color: "#5e5e5e" }}>
            {text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );

  const cards = [
    {
      icon: <img src="/img/Icon4.svg" />,
      title: "Mobile App",
      text: "Egestas tellus nunc proin amet tellus\n tincidunt lacus consequat. Ultrices",
    },
    {
      icon: <img src="/img/Icon5.svg" />,
      title: "SEO",
      text: "Integer ante non nunc, eget est justo vel\n semper nunc. Lacus ",
    },
    {
      icon: <img src="/img/Icon6.svg" />,
      title: "User testing",
      text: "Sed faucibus faucibus egestas volutpat,\n accumsan adipiscing egestas est. Auctor et\n leo urna est.",
    },
  ];

  return (
    <>
      <Container sx={{ backgroundColor: "#110F0F" }}>
        <Stack
          direction="column"
          textAlign="start"
          alignItems="flex-start"
          sx={{ color: "#ffff", p: "3rem ", gap: "2rem" }}
        >
          <Typography sx={{ fontSize: "30px" }}>Other services </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignContent={{ xs: "center", lg: "flex-start" }}
          textAlign="start"
          justifyContent="center"
          flexWrap="wrap"
          p="3rem"
          gap={5}
        >
          {cards.map((card, index) => (
            <MyCard
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
