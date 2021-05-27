import React from "react";

const SectionHeader = (misc, title) => {
  return (
    <header>
      <p>{misc}</p>
      <h1>{title}</h1>
      <h2>by xSallus</h2>
      <h3>Updated at Mar 26, 2021</h3>
    </header>
  );
};

export default SectionHeader;
