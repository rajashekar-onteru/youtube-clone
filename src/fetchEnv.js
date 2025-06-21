function fetchEnv() {
  if (window?.env !== undefined || process.env.NODE_ENV !== "development")
    return window.env;
  if (process.env.NODE_ENV === "development") return process.env;
}
export default fetchEnv;
