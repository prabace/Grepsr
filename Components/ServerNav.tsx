import { obtain } from "@/actions/action";
import React from "react";
import Navbar from "./Navbar";

const ServerNavbar = async () => {
  const userToken = await obtain();
  return <Navbar userToken={userToken} />;
};

export default ServerNavbar;