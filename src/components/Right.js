function Right(props) {
  console.log("checking" + props.result);

  return (
    <>
      <div className="right">
        {props.result ? (
          <h1 style={{ color: "green" }}>You won. </h1>
        ) : (
          <h1>
            Enter a{" "}
            <span style={{ color: "red", fontSize: "75px" }}>{props.diff}</span>{" "}
            number
          </h1>
        )}
        <p>
          Remaining Chances:{" "}
          {props.count > 0
            ? props.count
            : alert(
                "You lost. Click restart button at top left to play again."
              )}
        </p>
      </div>
    </>
  );
}

export default Right;
