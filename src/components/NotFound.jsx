import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError(); // get full error (status + message)

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Something went wrong.</p>

      {/* show the actual error to help debugging or for marks */}
      <pre style={{ color: "red" }}>
        {error?.statusText || error?.message}
      </pre>

      {/* button that takes user back to home */}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
