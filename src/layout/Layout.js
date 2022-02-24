import React from "react";
import DefinitionComponent from "../components/DefinitionComponent";
import FooterComponent from "../components/FooterComponent";
import HeroComponent from "../components/HeroComponent";
import PovComponent from "../components/PovComponent";

export default function Layout() {
  return (
    <div>
      <HeroComponent />
      <DefinitionComponent />
      <PovComponent />
      <FooterComponent />
    </div>
  );
}
