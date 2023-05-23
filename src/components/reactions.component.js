import React from "react";
import '../styles/photo.css'
import kafkaService from "../services/kafka.service";

function ReactionsComponent() {
  function saveLike(e, status) {
  
     let data = {
       id: 0,
       status: status
     };
  
     console.log(JSON.stringify(data));
  
     KafkaService.reaction("i-love-adsoftsito");
     e.preventDefault();
 }

  return (
    <div className="reactions">
      <div className="reaction reaction-like" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
      ></div>
      <div className="reaction reaction-love" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
      ></div>
      <div className="reaction reaction-important" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
      ></div>
      <div className="reaction reaction-funny" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div className="reaction reaction-anger" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div className="reaction reaction-sad" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
    </div>
  );
}

export default ReactionsComponent;
