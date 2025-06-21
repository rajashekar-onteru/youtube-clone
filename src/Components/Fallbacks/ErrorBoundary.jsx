import React from "react";
export const FallBackScreen = () => {
  return (
    <div className="notfound-container">
      <h1> 😢 Oops! Something went wrong.</h1>
      <p>Please try refreshing the page.</p>
      <br />
      <p onClick={() => window.location.reload()} className="back-home">
        Refresh
      </p>
    </div>
  );
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <FallBackScreen />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
