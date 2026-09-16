import '@css/app.css';

export function ImageLoader() {
  return (
    <div className="horizontal col-1-3">
      <div className="vertical">
        <button>Load image</button>
        <button>Remove image</button>
      </div>
      <div className="vertical">
        <div className="horizontal">
          <div className="vertical row-4" style={{ textAlign: 'left' }}>
            <label>Image size</label>
            <label>Background shape</label>
            <label>Background color</label>
            <label>Background border</label>
            <label>Background size</label>
          </div>
          <div className="vertical row-4">
            <input type="range" />
            <select></select>
            <select></select>
            <select></select>
            <input type="range" />
          </div>
          <div className="vertical row-4">
            <label>%</label>
            <div></div>
            <div></div>
            <div></div>
            <label>%</label>
          </div>
        </div>
      </div>
    </div>
  );
}
