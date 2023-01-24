import "./Banner.scss";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <header className="Banner">
      <Link to="/">
        <h1 className="banner-title">
          alice j.
          <br />
          videography
        </h1>
      </Link>
    </header>
  );
}
