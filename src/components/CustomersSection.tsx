import {
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Avatar,
  Box,
  Link,
} from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";

export function CustomersSection() {
  const StyledSlider = styled(Slider)({
    position: "relative",
    overflow: "hidden",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      zIndex: 2,
    },
    "&::before": {
      left: 0,
    },
    "&::after": {
      right: 0,
      transform: "rotateZ(180deg)",
    },

    "& .slick-track": {
      animation: "scroll 40s linear infinite",
      display: "flex",
      width: "calc(250px * 14)",
    },
    "@keyframes scroll": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(calc(-250px * 7))",
      },
    },
  });
  type CardProps = {
    icon: React.ReactElement;
    title: string;
    subtitle: string;
    text: string;
  };

  const MyCard: React.FC<CardProps> = ({ icon, title, subtitle, text }) => (
    <Stack
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
        <Box>
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "start",
            }}
          >
            <Avatar sx={{ m: "10px" }}>{icon}</Avatar>
            <Stack direction="column" alignItems="flex-start">
              <Typography
                fontSize="20px"
                fontWeight="700"
                sx={{ color: "#fff" }}
              >
                {title}
              </Typography>
              <Typography
                fontSize="10px"
                fontWeight="700"
                sx={{ color: "#e5e5e5e5", pb: "10px" }}
              >
                {subtitle}
              </Typography>
            </Stack>
          </Link>
        </Box>

        <CardContent sx={{ pt: "0px" }}>
          <Typography fontSize="15px" fontWeight="600" sx={{ color: "#fff" }}>
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
      icon: <img src="img/Avatar1.png" />,
      title: "Brooklyn Simmons",
      subtitle: "manam",
      text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
    },
    {
      icon: <img src="img/Avatar2.png" />,
      title: "Esther Howard",
      subtitle: "Offmax",
      text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    },
    {
      icon: <img src="img/Avatar3.png" />,
      title: "Arlene McCoy",
      subtitle: "bloopixel",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
    },
    {
      icon: <img src="img/Avatar4.png" />,
      title: "Jane Cooper",
      subtitle: "unpexel",
      text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
    },
    {
      icon: <img src="img/Avatar3.png" />,
      title: "Arlene McCoy",
      subtitle: "bloopixel",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
    },
    {
      icon: <img src="img/Avatar2.png" />,
      title: "Esther Howard",
      subtitle: "Offmax",
      text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1700, // this means below 600px viewport width
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700, // this means below 600px viewport width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000, // this means below 600px viewport width
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Container sx={{ backgroundColor: "#000" }}>
        <Stack
          direction="column"
          textAlign="center"
          sx={{ color: "#ffff", p: "5rem ", gap: "2rem" }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            Hear what our customers say :){" "}
          </Typography>

          <Stack
            direction="row"
            alignContent={{ xs: "center", lg: "flex-start" }}
            textAlign="start"
            justifyContent="center"
          >
            <StyledSlider {...settings}>
              {cards.map((card, index) => (
                <MyCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  text={card.text}
                />
              ))}
            </StyledSlider>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
