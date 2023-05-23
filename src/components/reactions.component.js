import React from "react";
import '../styles/photo.css'
import kafkaService from "../services/kafka.service";

function saveLike(e, status) { 
  let data = {
    id: 0,
    status: status
  };
  console.log(JSON.stringify(data));
  kafkaService.reaction("i-love-adsoftsito");
  e.preventDefault();
}





function ReactionsComponent() {
  return (
    <div className="reactions">
      <div className="reaction reaction-like">
      <button onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } >
                 Love
              </button>
    </div>
      <div className="reaction reaction-love"></div>
      <div className="reaction reaction-important"></div>
      <div className="reaction reaction-funny"></div>
      <div className="reaction reaction-anger"></div>
      <div className="reaction reaction-sad"></div>
    </div>
  );
}

export default ReactionsComponent;
