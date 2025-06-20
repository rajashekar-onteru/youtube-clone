import { useState } from "react";
export const APIKey = "AIzaSyADqex_oA7c7XVZyofz3hk0F1PclFE4nM8";

export const valueConvertor = (value) => {
  if (value >= 1000000) {
    return (value / 1000000)?.toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000)?.toFixed(1) + "K";
  } else {
    return value;
  }
};

export const fetchVideosData = async (
  categoryId,
  setLoading,
  setVideosData
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${APIKey}`
    );
    const data = await response.json();
    setVideosData(data?.items); // make sure sampleData is defined
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    setLoading(false);
  }
};

export const fetchVideoById = async (videoId, setVideoInfo) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${APIKey}`
    );
    const data = await response?.json();

    if (data?.items?.length > 0) {
      setVideoInfo(data?.items[0]);
    } else {
      setVideoInfo({});
    }
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

export const fetchChannelInfo = async (setChannelInfo, videoInfo) => {
  try {
    const resp = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${videoInfo?.snippet?.channelId}&key=${APIKey}`
    );
    const data = await resp?.json();
    setChannelInfo(data?.items[0]);
  } catch (err) {
    setChannelInfo({});
  }
};

export const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className={`description ${expanded ? "expanded" : ""}`}>{text}</p>
      <span className="show-more" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "...more"}
      </span>
    </div>
  );
};

export default ExpandableText;
