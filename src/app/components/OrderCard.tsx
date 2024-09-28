import React from "react";
import { Card, CardMedia, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Pizza } from "@/types";

type Props = {
  item: Pizza;
};

export default function OrderCard({ item }: Props) {
  return (
    <Card
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "31px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "30px", lg: "45px" },
              opacity: 0.7,
              color: "#01C550",
              fontWeight: "bold",
              lineHeight: { xs: "30px", md: "44px" },
              display: "flex",
              alignItems: "center",
              gap: "5px",
              letterSpacing: "3%",
            }}
          >
            {item.price}
            <span className="text-sm text-black/75 self-start">Birr</span>
          </Typography>
          {item.status == "Pending" ? (
            <Typography
              variant="body2"
              sx={{
                fontSize: "32px",
                lineHeight: "47px",
                letterSpacing: "3%",
                fontWeight: "bold",
                color: "#FFA500",
              }}
            >
              Ordered
            </Typography>
          ) : item.status == "Delivered" ? (
            <Typography
              variant="body2"
              sx={{
                fontSize: "32px",
                lineHeight: "47px",
                letterSpacing: "3%",
                fontWeight: "bold",
                color: "#008000",
              }}
            >
              Received
            </Typography>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: { xs: "169px", lg: "188px" },
                height: { xs: "56px", lg: "66px" },
                color: "white",
                fontSize: { xs: "25px", lg: "32px" },
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Order
            </Button>
          )}
        </Box>
      </Box>
      <hr className="bg-[#00000033] w-full" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "37px",
        }}
      >
        <Box
          sx={{
            width: { xs: "65px", md: "65px" },
            height: { xs: "65px", md: "65px" },
            position: "relative",
          }}
        >
          <Image
            layout="fill"
            src={item.restaurantLogo}
            alt="restrurant logo"
          />
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {item.restaurantName}
        </Typography>
      </Box>
    </Card>
  );
}
