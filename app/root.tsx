import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import Layout from "./components/layouts/layout";
import { themeCookie } from "./cookies";
import styles from "./styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});

export function links() {
  return {
    rel: "stylesheet",
    href: styles
  };
}

export const loader: LoaderFunction = async ctx => {
  const cookieHeader = ctx.request.headers.get("user-theme");
  const theme = (await themeCookie.parse(cookieHeader)) || "dark";
  return json(
    { theme },
    {
      headers: {
        "Set-Cookie": await themeCookie.serialize(theme)
      }
    }
  );
};

export default function App() {
  const { theme } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <Layout theme={theme}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
