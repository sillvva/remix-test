import { Link } from "@remix-run/react";
// import styled from "styled-components";

export default function Index() {

  return (
    <>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/" prefetch="intent">Home</Link>
        </li>
      </ul>
    </>
  );
}
