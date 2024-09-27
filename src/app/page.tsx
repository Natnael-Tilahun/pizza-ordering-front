import { Box } from "@mui/material";
// import { Hero } from "./components/Hero";
import { Hero } from "./components/Hero";
import FeaturedCards from "./components/FeaturedCards";
import TopRestaurants from "./components/TopRestaurants";
import PopularPizzas from "./components/PopularPizzas";
import Fasting from "./components/Fasting";

export default function Home() {
  return (
    <div>
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            position: "relative",
            border: "4px solid red",
            width: "100%",
            // height: "100%", // Removed to prevent unnecessary space
          }}
        >
          <Hero />
          <FeaturedCards />
          <TopRestaurants />
          <PopularPizzas />
          <Fasting />
        </Box>
      </main>
    </div>
  );
}
