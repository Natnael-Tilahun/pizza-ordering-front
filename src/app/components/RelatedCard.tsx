"use client";
import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { Pizza } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
  item: Pizza;
};

export default function RelatedCard({ item }: Props) {
  const router = useRouter(); // Initialize useRouter

  const handleOrderNow = () => {
    router.push(`/pizzas/${item.id}`); // Navigate to the pizza details page
  };
  return (
    <Card
      onClick={handleOrderNow}
      sx={{
        width: { xs: "100%", md: "100%" },
        padding: "30px",
        backgroundColor: "white",
        borderRadius: { xs: "15px", md: "25px" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: { xs: "10px", md: "15px" },
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image={item.src[0]}
        alt="featured pizza"
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#EA810033",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      />
      <Box
        sx={{
          width: "100%",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "10px", md: "10px" },
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "20px", md: "25px" },
            lineHeight: { xs: "20px", md: "24px" },
          }}
          component="div"
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "10px", md: "15px" },
            opacity: 0.7,
            lineHeight: { xs: "10px", md: "14px" },
            letterSpacing: "3%",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Card>
  );
}
