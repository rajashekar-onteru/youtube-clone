(function (window) {
  window.env = window.env || {};
  // Add your environment variables here
  window["env"]["REACT_APP_BASE_API_URL"] = "${REACT_APP_BASE_API_URL}";
  window["env"]["REACT_APP_API_KEY"] = "${REACT_APP_API_KEY}";
  window["env"]["REACT_APP_GET_VIDEO_INFO_URL"] =
    "${REACT_APP_GET_VIDEO_INFO_URL}";
  window["env"]["REACT_APP_GET_CHANNEL_INFO_URL"] =
    "${REACT_APP_GET_CHANNEL_INFO_URL}";
})(this);
