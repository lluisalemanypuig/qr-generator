import '@css/app.css';

export function ColoringShape() {
  return (
    <div className="vertical" style={{ width: '450px' }}>
      <div className="horizontal">
        <div className="vertical col-2">
          <label style={{ textAlign: 'left' }}>Fill</label>
          <select></select>
          <label style={{ textAlign: 'left' }}>Border</label>
          <select></select>
        </div>
        <div className="vertical col-2">
          <label style={{ textAlign: 'left' }}>Point shape</label>
          <select></select>
          <label style={{ textAlign: 'left' }}>Alignment shape</label>
          <select></select>
        </div>
      </div>
      <div className="horizontal">
        <input type="checkbox"></input>
        <label>Transparent background</label>
      </div>
    </div>
  );
}
