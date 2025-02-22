/*export const Simon = () => {
    return (
      <div className="game-div">
  <div style={{ width: "100%", height: "500px", border: "none" }}>
        <iframe
          src="https://lucianatux.github.io/SimonDice/"
          style={{ width: "100%", height: "500px", border: "none" }}
          title="Simon"
        />
      </div>
      </div>
    );
  };*/

  export const Simon = () => {
    return (
        <div className="game-div" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' /* Make sure parent takes full viewport height */ }}>
            <div style={{ width: "500px", height: "500px",border: "none" }}> {/* Fixed size for iframe container */}
                <iframe
                    src="https://lucianatux.github.io/SimonDice/"
                    style={{ width: "100%", height: "100%", border: "none",  borderRadius: "15px" }}
                    title="Simon"
                />
            </div>
        </div>
    );
};