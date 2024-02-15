import { Card, Container, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SectionInfo() {
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
  };

  const MyCard: React.FC<CardProps> = ({ icon }) => (
    <Card
      sx={{
        m: 1,
        border: "solid #fff",
        background: "#110F0F",
        color: "#fff",
      }}
    >
      <IconButton>{icon}</IconButton>
    </Card>
  );

  const cards = [
    {
      icon: <img src="/img/Logo1.svg" />,
    },
    {
      icon: <img src="/img/Logo2.svg" />,
    },
    {
      icon: <img src="/img/Logo3.svg" />,
    },
    {
      icon: <img src="/img/Logo4.svg" />,
    },
    {
      icon: <img src="/img/Logo5.svg" />,
    },
    {
      icon: <img src="/img/Logo6.svg" />,
    },
    {
      icon: <img src="/img/Logo7.svg" />,
    },
    {
      icon: <img src="/img/Logo8.svg" />,
    },
    {
      icon: <img src="/img/Logo9.svg" />,
    },
    {
      icon: <img src="/img/Logo10.svg" />,
    },
    {
      icon: <img src="/img/Logo11.svg" />,
    },
    {
      icon: <img src="/img/Logo12.svg" />,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1500, // this means below 600px viewport width
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // this means below 600px viewport width
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Container sx={{ backgroundColor: "#000", width: "100%" }}>
        <Stack
          direction={{ xl: "column", sm: "row" }}
          textAlign="start"
          justifyContent="center"
          sx={{ color: "#ffff", p: "5rem ", gap: "4rem" }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            Trusted by 200+ companies<br/> around the world
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
            amet tellus
            <br /> purus sit odio eget. Diam morbi faucibus vitae neque id in.
            Nullam sed et dapibus<br/> nunc, porta enim orci urna, sit. Lectus ac.{" "}
          </Typography>
        </Stack>
        <Stack paddingBottom={5}>
          <StyledSlider {...settings}>
            {cards.map((card, index) => (
              <MyCard key={index} icon={card.icon} />
            ))}
          </StyledSlider>
        </Stack>
      </Container>
    </>
  );
}
