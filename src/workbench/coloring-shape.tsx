import '@css/app.css';

export function ColoringShape() {
  return (
    <div className="vertical">
      <div className="horizontal col-4">
        <label style={{ textAlign: 'left' }}>Fill</label>
        <select></select>
        <label style={{ textAlign: 'left' }}>Point shape</label>
        <select></select>
      </div>
      <div className="horizontal col-4">
        <label style={{ textAlign: 'left' }}>Border</label>
        <select></select>
        <label style={{ textAlign: 'left' }}>Alignment shape</label>
        <select></select>
      </div>

      <div className="horizontal">
        <input type="checkbox"></input>
        <label>Transparent background</label>
      </div>
    </div>
  );
}
