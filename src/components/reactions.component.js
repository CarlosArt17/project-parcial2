import React, { Component } from 'react';
import KafkaService from "../services/kafka.service";

function ReactionsComponent() {
  function saveLike(e, status, reactions) {
  
     let data = {
       id: 0,
       status: status
     };
  
     console.log(JSON.stringify(data));
  
     KafkaService.reaction("usuario", "objeto", reactions);
     e.preventDefault();
 }

  return (
    <div class="reactions">
      <div class="reaction reaction-like" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1, "like")
                      
                    }
                } 
></div>
      <div class="reaction reaction-love"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1, "love")
                      
                    }
                } 
></div>
      <div class="reaction reaction-haha"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1, "haha")
                      
                    }
                } 
></div>
      <div class="reaction reaction-wow"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1, "wow")
                      
                    }
                } 
></div>
      <div class="reaction reaction-sad"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1, "sad")
                      
                    }
                } 
></div>
      <div class="reaction reaction-angry"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1, "angry")
                      
                    }
                } 
></div>
    </div>
  );
}

export default ReactionsComponent;