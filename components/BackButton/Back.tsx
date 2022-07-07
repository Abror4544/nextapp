const Back = () => {

  return (
    <button
    data-testid="button"
      style={{ cursor: "pointer", margin: "10px 0" }}
      onClick={() => {
        history.back();
      }}
    >
      Back
    </button>
  );
};

export default Back;
