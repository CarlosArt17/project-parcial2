import React from "react";
import '../styles/photo.css'

function ReactionsComponent() {
  return (
    <div className="reactions">
      <div className="reaction reaction-like"></div>
      <div className="reaction reaction-love"></div>
      <div className="reaction reaction-important"></div>
      <div className="reaction reaction-funny"></div>
      <div className="reaction reaction-anger"></div>
      <div className="reaction reaction-sad"></div>
    </div>
  );
}

export default ReactionsComponent;
