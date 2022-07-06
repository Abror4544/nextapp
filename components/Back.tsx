const Back = () => {
  return (
    <div
      style={{ cursor: "pointer", margin: "10px 0" }}
      onClick={() => {
        history.back();
      }}
    >
      Back
    </div>
  );
};

export default Back;
