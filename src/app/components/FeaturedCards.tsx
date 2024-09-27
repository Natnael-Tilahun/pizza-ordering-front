"use client";
import React, { useState } from "react"; // Import useState
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedCards() {
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            gap: { xs: "14px", md: "25px" },
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: { xs: "13px", md: "25px" },
          height: { xs: "13px", md: "25px" },
          backgroundColor: i === currentSlide ? "#FF9921" : "#B6B6B6",
          borderRadius: "50%",
          margin: { xs: "10px", md: "20px" },
        }}
      />
    ),
  };

  const data = [
    {
      src: "/featured-pizza1.png",
      title: "Make Your First Order and Get 50% off",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
      bannerColor: "#2F2F2F",
      discount: "50% off",
    },
    {
      src: "/featured-pizza2.png",
      title: "Make Your First Order and Get 50% off",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
      bannerColor: "#50482B",
      discount: "50% off",
    },
    {
      src: "/featured-pizza3.png",
      title: "Make Your First Order and Get 50% off",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
      bannerColor: "#296D60",
      discount: "50% off",
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: { xs: "40px", md: "65px" },
        paddingBottom: { xs: "50px", md: "100px" },
        paddingInline: { xs: "10px", md: "87px" },
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 1, md: 3 },
          opacity: 0.5,
          fontSize: { xs: "15px", md: "50px" },
        }}
      >
        Featured pizza
      </Typography>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              height: { xs: "205px", md: "386px" },
              backgroundColor: item.bannerColor,
              borderRadius: { xs: "15px", md: "40px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                basis: "100%",
                position: "relative",
              }}
            >
              <CardContent
                sx={{
                  px: { xs: "30px", md: 9 },
                  py: { xs: "31px", md: 4 },
                  color: "white",
                  flexBasis: { xs: "60%", md: "60%" },
                }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", md: "45px" },
                  }}
                  component="div"
                >
                  {item.title}
                  <span style={{ color: "#FF9921", fontWeight: "bold" }}>
                    {"   "} {item.discount}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "8px", md: "16px" } }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "77px", md: "248px" },
                    height: { xs: "33px", md: "60px" },
                    color: "white",
                    mt: { xs: "19px", md: "54px" },
                    fontSize: { xs: "10px", md: "24px" },
                    fontWeight: "bold",
                  }}
                >
                  Order Now
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={item.src}
                alt="featured pizza"
                sx={{
                  flexBasis: { xs: "40%", md: "40%" },
                  width: "40%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  right: 0,
                  top: 0,
                }}
              />
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
