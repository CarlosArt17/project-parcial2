import React from "react";
import '../styles/photo.css'

function CommentsComponent() {
  return (
    <div className="comments-section">
      <h4>Comentarios</h4>
        <div className="form-group">
          <label htmlFor="comment-input">Escribe tu pensamiento:</label>
          <textarea
            id="comment-input"
            name="comment"
            rows="4"
            placeholder="Este recuerdo lo guardo porque..."
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
    </div>
  );
}

export default CommentsComponent;
