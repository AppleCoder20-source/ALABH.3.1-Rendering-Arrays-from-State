export default function Scores({ scores }) {
    return (
      <>
        <h3>Scores:</h3>
        <ul>
          {scores.map((score, index) => (
            <li key={index}>
              Score: {score.score} {'&&'} Date: {score.date}
            </li>
          ))}
        </ul>
      </>
    );
  }
  