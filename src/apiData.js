import { useCallback, useState } from "react";

export const valueConvertor = (value) => {
  if (value >= 1000000) {
    return (value / 1000000)?.toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000)?.toFixed(1) + "K";
  } else {
    return value;
  }
};
export const useDebounce = (callback, wait = 0) => {
  let timeoutId;
  return useCallback(
    (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, wait);
    },
    [callback, wait]
  );
};

const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchVideosData = async (
  categoryId,
  setLoading,
  setVideosData
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}&videoCategoryId=${categoryId}&key=${API_KEY}`
    );
    const data = await response.json();
    setVideosData(data?.items); // make sure sampleData is defined
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    setLoading(false);
  }
};
// export const fetchVideosBySearch = async (keyword, setSuggestions) => {
//   try {
//     const response = await fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`
//     );
//     const data = await response.json();
//     setSuggestions(data?.items); // make sure sampleData is defined
//   } catch (error) {
//     console.error("Error fetching videos:", error);
//   } finally {
//   }
// };
export const fetchVideoById = async (videoId, setVideoInfo) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_GET_VIDEO_INFO_URL}&id=${videoId}&key=${API_KEY}`
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
      `${process.env.REACT_APP_GET_CHANNEL_INFO_URL}&id=${videoInfo?.snippet?.channelId}&key=${API_KEY}`
    );
    const data = await resp?.json();
    setChannelInfo(data?.items[0]);
  } catch (err) {
    setChannelInfo({});
  }
};

export const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const wordLimit = 50;
  const words = text?.trim()?.split(/\s+/);
  const isLong = words?.length > wordLimit;

  return (
    <div>
      <p className={`description ${expanded ? "expanded" : ""}`}>{text}</p>
      {isLong && (
        <span className="show-more" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "...more"}
        </span>
      )}
    </div>
  );
};

export default ExpandableText;
