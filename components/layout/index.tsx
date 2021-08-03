import { ComponentProps } from "react";

export default function Layout({ children }: ComponentProps<"div">) {
  return <div>{children}</div>;
}
