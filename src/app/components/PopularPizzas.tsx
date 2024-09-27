"use client";
import React from "react"; // Import useState
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderCard from "./OrderCard";


export default function PopularPizzas() {
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
      id:"4",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id:"5",
      src: "/pizza1.png",
      title: "Margherita",
      description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: "150",
      restaurantLogo: "/image1.png",
      restaurantName: "Azmera Pizza",
    },
    {
      id:"6",
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
        paddingTop: { xs: "0px", md: "0px" },
        paddingBottom: { xs: "50px", md: "50px" },
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
        Popular Pizzas
      </Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-y-6 gap-y-3">
        {data.map((item) => (
          <OrderCard item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
}
