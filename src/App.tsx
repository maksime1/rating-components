import { useState } from "react";
import "./App.css";
import Rating from "./Rating";
import Result from "./Result";

function App() {
  const [score, setScore] = useState<number | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);
  return (
    <>
      {submit === false ? (
        <Rating
          score={score}
          setScore={setScore}
          submit={submit}
          setSubmit={setSubmit}
        />
      ) : (
        <Result score={score} />
      )}
    </>
  );
}

export default App;
