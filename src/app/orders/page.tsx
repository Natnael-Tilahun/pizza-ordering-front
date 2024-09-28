import { Box, Typography } from "@mui/material";
import OrderCard from "../components/OrderCard";
import { orderedData } from "@/data";
export default function Orders() {
  return (
    <Box
      sx={{
        paddingTop: { xs: "60px", md: "125px" },
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
        Order History
      </Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 md:gap-y-6 gap-y-3">
        {orderedData.map((item) => (
          <OrderCard item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
}
