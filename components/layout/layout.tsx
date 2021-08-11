import { Fragment, PropsWithChildren, ReactChild, ReactNode } from "react";
import MainNavigation from "./main-navigation";

function Layout(props: PropsWithChildren<ReactNode>) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
