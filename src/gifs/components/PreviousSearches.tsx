import type { FC } from "react";

interface Props {
  searches: string[];
  onTermClick?: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onTermClick }) => {
  return (
    <>
        {/* Busquedas anteriores */}
        <div className="previous-searches">
            <h2>Resultados de la búsqueda</h2>
            <ul className="previous-searches-list">
                {searches.map((search, index) => (
                    <li key={index} onClick={() => onTermClick?.(search)}>
                        {search}
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
