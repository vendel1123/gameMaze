import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./components/Modal"

export default function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false)

  return (
    <div className="cover">
      <div>
        <p>Wanna play some games?</p>
      </div>

      <button
        onClick={() => navigate("/app")}
        className="buttonHome"
      >
        Yes, i want to play
      </button>

      <button
        className="noBtn"
        onClick={() => setShowModal(true)}
      >
        No i don't
      </button>

      {showModal && (
        <Modal
          title="Hm"
          message="Jól gondold meg!"
          text="Akkor sem"
          onClose={() => {
            setShowModal(false);
            setShowModalTwo(true);
          }}
        />
      )}
        {showModalTwo && (
        <Modal
          title="HMMm"
          message="De fogsz."
          text="Jou"
          onClose={() => setShowModalTwo(false)}
        />
      )}
    </div>
  );
}
