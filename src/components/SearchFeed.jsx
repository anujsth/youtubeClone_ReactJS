import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box
      p={1}
      style={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
      sx={{ ml: { md: "85px", lg: "100px" } }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        style={{ color: "white" }}
      >
        Seach Results For :
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
