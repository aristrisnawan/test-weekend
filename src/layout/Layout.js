import React from "react";
import DefinitionComponent from "../components/DefinitionComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";

export default function Layout() {
  return (
    <div>
      <HeroComponent />
      <DefinitionComponent />
    </div>
  );
}
