import { useLocation } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";
import type { ThemeNames } from "~/utils";
import { themes } from "~/utils";

type LayoutProps = PropsWithChildren<{
  theme?: ThemeNames;
}>;

export default function Layout(props: LayoutProps) {
  const { theme = "dark", children } = props;
  // const loc = useLocation();

  return (
    <Container id="app" theme={theme}>
      {children}
    </Container>
  );
}

type ContainerProps = {
  theme: ThemeNames;
};

const Container = styled.div<ContainerProps>`
  ${(props: ContainerProps) =>
    Object.entries(themes[props.theme])
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n")}
  ${Object.entries(themes.universal)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n")}
  @supports (not (backdrop-filter: blur(0px))) {
    --headerOpacity: 0.9 !important;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  font-family: sans-serif;

  background-color: rgb(var(--background));
  color: var(--text);

  a {
    color: var(--link);
  }
`;
