import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/about" prefetch="intent">About Me</Link>
        </li>
      </ul>
    </>
  );
}