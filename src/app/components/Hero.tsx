import React from "react";
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

export const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Responsive direction
        alignItems: "start",
        paddingTop: { xs: "40px", md: "90px" },
        paddingBottom: { xs: "50px", md: "0px" },
        paddingLeft: { xs: "10px", md: "87px" },
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: `100vh` }, // Adjust height for mobile
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%);",
      }}
    >
      <Box
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "65%", md: "60%" }, // Full width on mobile
          gap: { xs: "20px", md: "50px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Typography
            variant={"h1"}
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "50px", md: "150px" },
              background:
                "linear-gradient(90.23deg, #FF8100 -2.97%, #FFBE71 93.66%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: "1.5",
            }}
          >
            Order us
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "25px" },
              color: "#050505",
              lineHeight: "1.5",
              opacity: "0.8",
            }}
            variant="h5"
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
        </Box>

        <FormControl
          sx={{
            width: "100%",
            height: { xs: "57px", md: "118px" },
            background: "white",
            borderRadius: "100px",
            fontSize: { xs: "15px", md: "25px" },
            padding: "0px",
            boxShadow: "0px 5px 50px 0px #00000026",
          }}
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-search"
            type={"text"}
            sx={{
              height: "100%",
              borderRadius: "100px",
              border: "none",
              fontSize: { xs: "15px", md: "25px" },
              paddingLeft: { xs: "20px", md: "36px" },
            }}
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: { xs: "360px", md: "100px" },
                    width: { xs: "52px", md: "100px" },
                    height: { xs: "52px", md: "100px" },
                  }}
                >
                  <SearchIcon
                    sx={{
                      width: { xs: "21px", md: "41px" },
                      height: { xs: "21px", md: "41px" },
                      color: "white",
                    }}
                  />
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Box className="absolute right-0 top-0 w-[100px] h-full md:w-[150px] md:h-[300px] lg:w-[350px] lg:h-[800px]">
        <Image
          src="/image.png"
          alt="hero"
          layout="fill"
          style={{
            objectFit: "contain",
            position: "absolute",
            zIndex: 1,
          }}
          className="lg:top-0 top-0 right-0"
          priority
        />
        <Image
          src="/leaves2.png"
          alt="leaves1"
          width={100}
          height={100}
          style={{
            objectFit: "contain",
            position: "absolute",
          }}
          className="ld:bottom-[7%] md:bottom-[0%] bottom-[10%] right-[30%] md:right-[55%] md:w-[100px] md:h-[110px] lg:w-[214px] lg:h-[239px]"
          priority
        />
        <Image
          src="/leaves1.png"
          alt="leaves1"
          width={100}
          height={100}
          style={{
            objectFit: "contain",
            position: "absolute",
            gap: "0px",
            opacity: "0px",
          }}
          className="lg:top-[20%] top-[16%] md:top-[10%] right-[57%] lg:right-[80%] md:right-[75%] md:w-[100px] md:h-[100px] lg:w-[214px] lg:h-[239px]"
          priority
        />
      </Box>
    </Box>
  );
};
