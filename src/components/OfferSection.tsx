import {
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export function OfferSection() {
  type CardProps = {
    icon: React.ReactElement;
    title: string;
    text: string;
  };

  const MyCard: React.FC<CardProps> = ({ icon, title, text }) => (
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
  );

  const cards = [
    {
      icon: <img src="/img/Icon1.svg" />,
      title: "Branding",
      text: "Egestas tellus nunc proin amet tellus\n tincidunt lacus consequat. Ultrices",
    },
    {
      icon: <img src="/img/Icon2.svg" />,
      title: "Web development",
      text: "Integer ante non nunc, eget est justo vel\n semper nunc. Lacus ",
    },
    {
      icon: <img src="/img/Icon3.svg" />,
      title: "Digital marketing",
      text: "Sed faucibus faucibus egestas volutpat,\n accumsan adipiscing egestas est. Auctor et\n leo urna est.",
    },
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
      <Container maxWidth={"xl"} sx={{ backgroundColor: "#110F0F" }}>
        <Stack
          direction="column"
          textAlign="center"
          sx={{ color: "#ffff", p: "5rem ", gap: "2rem" }}
        >
          <Typography sx={{ fontSize: "30px" }}>We Offer </Typography>
          <Typography sx={{ fontSize: "10px", color: "#5e5e5e" }}>
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat
            <br /> scelerisque in elit. Morbi rhoncus, tellus, eros consequat
            magna semper orci a <br /> tincidunt.{" "}
          </Typography>
          <Stack
            direction="row"
            textAlign="start"
            justifyContent="center"
            flexWrap="wrap"
            m={1}
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
        </Stack>
      </Container>
    </>
  );
}
