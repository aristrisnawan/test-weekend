import React from "react";
import DefinitionComponent from "../components/DefinitionComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import PovComponent from "../components/PovComponent";

export default function Layout() {
  return (
    <div>
      <HeroComponent />
      <DefinitionComponent />
      <PovComponent />
    </div>
  );
}
