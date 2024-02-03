import { Results } from "../../Interfaces/Results.interface";

const ResultsItem = ({ results, query }: Results) => {
  const highlightMatch = (text: string, match: string) => {
    const parts = text.split(new RegExp(`(${match})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === match.toLowerCase() ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <ul>
      {results.map((country) => (
        <li key={country.alpha3Code}>{highlightMatch(country.name.common, query)}</li>
      ))}
    </ul>
  );
};

export default ResultsItem;
