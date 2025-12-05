import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="notfound-wrap">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>We couldn't find the page you're looking for.</p>

        <div className="error-details">
          <strong>Details:</strong>
          <pre>{error?.status ? `Status: ${error.status}\n` : ""}{error?.statusText || error?.message}</pre>
        </div>

        <div style={{ marginTop: 12 }}>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
