"use client";
import React from "react"; // Import useState
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedCard from "./RelatedCard";
import { data } from "@/data";

type Props = {
  category: string;
};
export default function Related({ category }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    initialSlide: 0,
    adaptiveHeight: true, // Added to adjust height based on active slide
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: "0px", md: "0px" },
        paddingBottom: { xs: "50px", md: "75px" },
        paddingInline: { xs: "14px", md: "50px" },
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
        Related
      </Typography>
      <Slider className="related" {...settings}>
        {data
          .filter((item) => item.category === category)
          .map((item) => (
            <RelatedCard item={item} key={item.id} />
          ))}
      </Slider>
    </Box>
  );
}
