"use client";
import { useEffect, useState } from "react";
import { data } from "@/data"; // Assuming you have your pizza data here
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  Skeleton,
  Modal,
} from "@mui/material";
import { Pizza } from "@/types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Related from "@/app/components/Related";
import { motion } from "framer-motion"; // Import motion from framer-motion

const PizzaDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [pizza, setPizza] = useState<Pizza>();
  const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]); // Track selected recipes
  const [quantity, setQuantity] = useState<number>(1);
  const [displayImage, setDisplayImage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleIncreaseQuanity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuanity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    if (id) {
      const foundPizza = data.find((item) => item.id === id);
      if (foundPizza) {
        setDisplayImage(foundPizza?.src[0]);
        setPizza(foundPizza);
        setSelectedRecipes(foundPizza.recipes); // Initialize selection state
      }
    }
  }, [id]);

  const handleChange = (item: string) => {
    const updatedSelection = selectedRecipes.includes(item)
      ? selectedRecipes.filter((recipe) => recipe !== item) // Remove if already selected
      : [...selectedRecipes, item]; // Add if not selected
    setSelectedRecipes(updatedSelection);
  };

  const handleSubmit = () => {
    console.log("quantity: ", quantity);
    console.log("price: ", pizza ? quantity * pizza.price : 0); // Check if pizza is defined
    console.log("selectedRecipes: ", selectedRecipes);
    console.log("id: ", pizza?.id);
    handleOpen();
  };

  const handleImageClick = (src: string) => {
    setDisplayImage(src);
    // setImageKey((prevKey) => prevKey + 1); // Update key to trigger animation
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  if (!pizza)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            paddingTop: { xs: "25px", md: "50px" },
            paddingBottom: { xs: "50px", md: "95px" },
            paddingInline: { xs: "14px", md: "50px" },
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: { xs: "25px", lg: "70px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: { xs: "100%", sm: "60%", md: "100%", lg: "100%" },
              gap: { xs: "20px", lg: "40px" },
            }}
          >
            <Skeleton
              variant="circular"
              sx={{
                width: { xs: "251px", md: "500px" },
                height: { xs: "251px", md: "500px" },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: "20px", md: "50px" },
              }}
            >
              <Skeleton
                variant="circular"
                sx={{
                  width: { xs: "100px", md: "208px" },
                  height: { xs: "100px", md: "208px" },
                }}
              />
              <Skeleton
                variant="circular"
                sx={{
                  width: { xs: "100px", md: "208px" },
                  height: { xs: "100px", md: "208px" },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "80%", md: "70%" },
              py: { xs: "25px", md: "60px" },
              gap: { xs: "20px", md: "20px" },
            }}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: { xs: "2rem", md: "5rem" } }}
            />

            <Box
              sx={{
                width: "100%",
              }}
            >
              <FormGroup
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: { xs: "5px", md: "15px" },
                  flexWrap: "wrap",
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{
                    width: { xs: "80px", md: "100px" },
                    height: { xs: "30px", md: "60px" },
                  }}
                />
                <Skeleton
                  variant="rounded"
                  sx={{
                    width: { xs: "80px", md: "100px" },
                    height: { xs: "30px", md: "60px" },
                  }}
                />
                <Skeleton
                  variant="rounded"
                  sx={{
                    width: { xs: "80px", md: "100px" },
                    height: { xs: "30px", md: "60px" },
                  }}
                />
                <Skeleton
                  variant="rounded"
                  sx={{
                    width: { xs: "80px", md: "100px" },
                    height: { xs: "30px", md: "60px" },
                  }}
                />
              </FormGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: { xs: "50px", md: "50px" },
                width: "100%",
              }}
            >
              <Skeleton variant="rounded" width="100%" height={60} />
            </Box>
            <Skeleton variant="rounded" width="100%" height={76} />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            paddingBottom: { xs: "50px", md: "95px" },
            paddingInline: { xs: "14px", md: "50px" },
            gap: "40px",
          }}
        >
          <Skeleton variant="rounded" width={350} height={300} />
          <Skeleton variant="rounded" width={350} height={300} />
          <Skeleton variant="rounded" width={350} height={300} />
          <Skeleton variant="rounded" width={350} height={300} />
        </Box>
      </Box>
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          paddingTop: { xs: "25px", md: "50px" },
          paddingBottom: { xs: "50px", md: "95px" },
          paddingInline: { xs: "14px", md: "50px" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          gap: { xs: "25px", lg: "70px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: { xs: "100%", sm: "60%", md: "100%", lg: "100%" },
            gap: { xs: "20px", lg: "40px" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "251px", md: "500px" },
              height: { xs: "251px", md: "500px" },
              backgroundColor: "#EA810033",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={isLoading ? "isLoading" : "closed"}
              // variants={variants}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "185.19px", md: "368.32px" },
                  height: { xs: "188.55px", md: "375px" },
                  gap: "0px",
                  opacity: "0px",
                  angle: "0 deg",
                }}
              >
                <Image
                  src={displayImage}
                  alt={pizza.title}
                  fill={true}
                  priority={true}
                  sizes="(max-width: 500px) 100vw, (max-width: 251px) 50vw, 33vw"
                />
              </Box>
            </motion.div>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "20px", md: "50px" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100px", md: "208px" },
                height: { xs: "100px", md: "208px" },
                backgroundColor: "#D9D9D9",
                borderRadius: "50%",
              }}
              onClick={() => handleImageClick(pizza.src[0])} // Update display image
            >
              <Image
                src={pizza.src[0]}
                alt={pizza.title}
                fill={true}
                priority={true}
                sizes="(max-width: 208px) 100vw, (max-width: 100px) 50vw, 33vw"
                style={{
                  padding: "16px",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: "100px", md: "208px" },
                height: { xs: "100px", md: "208px" },
                backgroundColor: "#D9D9D9",
                borderRadius: "50%",
              }}
              onClick={() => handleImageClick(pizza.src[1])} // Update display image
            >
              <Image
                src={pizza.src[1]}
                alt={pizza.title}
                fill={true}
                priority={true}
                sizes="(max-width: 208px) 100vw, (max-width: 100px) 50vw, 33vw"
                style={{
                  padding: "16px",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "80%", md: "70%" },
            py: { xs: "25px", md: "60px" },
            gap: { xs: "20px", md: "20px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "35px", md: "80px" },
              fontWeight: "700",
              color: "#000",
              lineHeight: { xs: "33px", md: "75px" },
            }}
          >
            {pizza.title}
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <FormGroup
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: { xs: "5px", md: "15px" },
                flexWrap: "wrap",
              }}
            >
              {pizza.recipes.map((item, index) => (
                <FormControlLabel
                  sx={{
                    width: "fit-content",
                    fontSize: "16px",
                    color: "#000",
                    opacity: 0.8,
                  }}
                  key={index}
                  checked={selectedRecipes.includes(item)} // Use selectedRecipes state
                  onChange={() => handleChange(item)} // Update selection on change
                  control={<Checkbox />}
                  label={item}
                />
              ))}
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: { xs: "50px", md: "50px" },
              width: "100%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                width: { xs: "60px", md: "70px" },
                height: "60px",
                px: "15px",
                py: "10px",
                border: "2px solid #FF8100",
                fontSize: "60px",
                fontWeight: "700",
                color: "#000",
              }}
              onClick={handleDecreaseQuanity}
            >
              -
            </Button>
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "60px" },
                fontWeight: "400",
                color: "#000",
                lineHeight: "100%",
              }}
            >
              {quantity}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                width: { xs: "60px", md: "70px" },
                height: "60px",
                px: "15px",
                py: "10px",
                border: "2px solid #FF8100",
                fontSize: { xs: "32px", md: "32px" },
                fontWeight: "700",
                color: "#000",
              }}
              onClick={handleIncreaseQuanity}
            >
              +
            </Button>
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
              {pizza.price * quantity}
              <span className="text-sm text-black/75 self-start">Birr</span>
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              bgcolor: "#FF8100",
              py: "15px",
              px: "30px",
              borderRadius: "10px",
              height: { xs: "66px", md: "76px" },
              fontSize: { xs: "25px", md: "32px" },
              fontWeight: 700,
              color: "#FDFFFE",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={handleSubmit}
          >
            Order
            <NorthEastIcon
              sx={{
                width: "33.45px",
                height: " 32px",
              }}
            />
          </Button>
        </Box>
      </Box>
      <Related category={pizza.category} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400, lg: 800 },
            bgcolor: "background.paper",
            boxShadow: 24,
            py: { xs: 6, lg: 12 },
            px: { xs: 8, lg: 16 },
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#05C6051A",
              borderRadius: "50%",
              padding: { xs: "20px", md: "58px" },
              alignItems: "center",
            }}
          >
            <svg
              // width="166px"
              // height="166px"
              className=" w-[60px] h-[60px] md:w-[166px] md:h-[166px]"
              style={{
                backgroundColor: "#05C605",
                padding: "20px",
                borderRadius: "50%",
              }}
              viewBox="0 0 93 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M89.0769 1.40905C92.2879 3.50901 93.1879 7.80891 91.0879 11.0199L43.8668 83.2405C43.3166 84.082 42.5902 84.794 41.7379 85.3272C40.8856 85.8605 39.9277 86.2023 38.9303 86.3291C37.933 86.4559 36.92 86.3646 35.9613 86.0616C35.0027 85.7585 34.1213 85.2509 33.3781 84.5738L2.82325 56.7967C1.46036 55.5576 0.645537 53.8278 0.558022 51.9879C0.470507 50.148 1.11747 48.3487 2.3566 46.9858C3.59572 45.6229 5.32549 44.8081 7.16539 44.7206C9.00529 44.6331 10.8046 45.28 12.1675 46.5191L36.7003 68.8186L79.466 3.42012C80.474 1.8792 82.0527 0.80171 83.855 0.424582C85.6573 0.0474532 87.5356 0.401566 89.0769 1.40905Z"
                fill="white"
              />
            </svg>
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#05C605",
              fontSize: { xs: "15px", md: "32px" },
              lineHeight: { xs: "23px", md: "46px" },
              textAlign: "center",
            }}
            component="h2"
          >
            Your order has been successfully completed!{" "}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default PizzaDetails;
