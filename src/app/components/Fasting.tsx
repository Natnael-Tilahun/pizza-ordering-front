"use client";
import React from "react"; // Import useState
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderCard from "./OrderCard";

export default function Fasting() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      id: "1",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id: "2",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id: "3",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id: "4",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id: "5",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id: "6",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: { xs: "40px", md: "65px" },
        paddingBottom: { xs: "50px", md: "0px" },
        paddingInline: { xs: "10px", md: "87px" },
        border: "2px solid blue",
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
        Fasting
      </Typography>
      <Slider className="top-restaurants" {...settings}>
        {data.map((item) => (
          <OrderCard item={item} key={item.id} />
        ))}
      </Slider>
    </Box>
  );
}
