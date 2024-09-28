"use client";
import React from "react"; // Import useState
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function TopRestaurants() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      src: "/image1.png",
      title: "Azmera Pizza",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
    },
    {
      src: "/image1.png",
      title: "Azmera Pizza",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
    },
    {
      src: "/image1.png",
      title: "Azmera Pizza",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: { xs: "40px", md: "65px" },
        paddingBottom: { xs: "45px", md: "100px" },
        paddingInline: { xs: "10px", md: "50px" },
        width: "100%",
        background:
          "linear-gradient(180deg, rgba(250, 126, 0, 0) 0%, rgba(250, 126, 0, 0.2) 60.5%, rgba(148, 74, 0, 0) 100%);",
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
        Top Restaurants
      </Typography>
      <Slider className="top-restaurants" {...settings}>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "400px", md: "574px" },
              backgroundColor: "white",
              borderRadius: { xs: "15px", md: "15px" },
              display: "flex",
              alignItems: "center",
              color: "#000000",
            }}
          >
            <CardContent
              sx={{
                px: { xs: "15px", md: "31px" },
                py: { xs: "15px", md: "23px" },
                width: "100%",
                gap: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "25px", md: "50px" },
                      height: { xs: "25px", md: "50px" },
                      position: "relative",
                    }}
                  >
                    <Image layout="fill" src={item.src} alt="restrurant logo" />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                    component="div"
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "10px", md: "15px", opacity: 0.5 } }}
                >
                  {item.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  px: { xs: "10px", md: "15px" },
                  py: { xs: "10px", md: "14px" },
                  gap: { xs: "10px", md: "20px" },
                  backgroundColor: "#0080000D",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "40px", md: "80px" },
                    height: { xs: "40px", md: "80px" },
                    borderRadius: "50%",
                    backgroundColor: "#FF810033",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: { xs: "10px", md: "20px" },
                    py: { xs: "8px", md: "16px" },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "20px", md: "40px" },
                      height: { xs: "24px", md: "48px" },
                      position: "relative",
                    }}
                  >
                    <Image
                      layout="fill"
                      src="/Mask-group.svg"
                      alt="restrurant logo"
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    // height: "66px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "8px", md: "12px" },
                      color: "##00000080",
                      opacity: 0.5,
                    }}
                  >
                    Number of order
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        md: "50px",
                      },
                      color: "#FF9921",
                      fontWeight: "bold",
                      lineHeight: { xs: "20px", md: "47px" },
                    }}
                  >
                    2K
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
