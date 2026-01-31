function Modal({ title, message, onClose }) {
  return (
    <div className="overlay" onClick={onClose} style={{
      backgroundColor: "#FFCDC9",
      padding: "5px",
      borderRadius: "10px",
      marginTop: "5px",
      border:"solid 1px"
    }}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} style={{
          backgroundColor:" #FD7979",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "5px"
        }}>Jou, tovább</button>
      </div>
    </div>
  );
}

export default Modal;
