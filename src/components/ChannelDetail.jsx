import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  console.log(videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            // "linear-gradient(0deg, rgba(177,34,195,1) 0%, rgba(45,253,226,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
          className="channelDetailbg"
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      {/* <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box> */}
    </Box>
  );
};

export default ChannelDetail;
