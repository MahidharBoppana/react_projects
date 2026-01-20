export default function ModelPopup({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "model"} className="model">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our model body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : "Footer"}</div>
      </div>
    </div>
  );
}
