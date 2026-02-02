function Modal({ title, message, onClose, text}) {
  return (
    <div className="overlay" onClick={onClose} style={{
      backgroundColor: "#e5b1ad",
      padding: "5px",
      borderRadius: "10px",
      marginTop: "5px",
      border:"solid 1px"
    }}>
      <div className="modal" onClick={(e) => e.stopPropagation()}
        style={{
          fontSize:"15px"
        }}>
        <h2>{title}</h2>
        <p >{message}</p>
        <button onClick={onClose} style={{
          padding: "10px",
          borderRadius: "10px",
          marginTop: "5px",
        }}>{text}</button>
      </div>
    </div>
    
  );
}

export default Modal;
