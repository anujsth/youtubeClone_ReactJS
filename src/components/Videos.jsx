import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      gap={2}
      justifyContent="start"
      flexWrap="wrap"
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
