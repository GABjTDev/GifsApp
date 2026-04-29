import { useState } from "react"
import { GifList } from "../gifs/components/GifList"
import { PreviousSearches } from "../gifs/components/PreviousSearches"
import { CustomHeader } from "../shared/components/CustomHeader"
import { SearchBar } from "../shared/components/SearchBar"
import { getGifsByQueryAction } from "../gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "../gifs/interfaces/gif.interface"

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const handleTermsClick = (term: string) => {
    console.log("Term clicked:", term)
  }

  const handleSearch = (query: string) => {

    console.log("Search query:", query)
    query = query.trim().toLowerCase()
    if (query.length === 0) return;

    setPreviousTerms(prev => {
      if (prev.includes(query)) return prev;

      if (prev.length >= 4) {
        return [...prev.slice(1), query]
      }

      return [...prev, query];
    });

    getGifsByQueryAction(query)
      .then(data => {
        console.log("Gifs data:", data)
        setGifs(data);
      })
      .catch(error => {
        console.error("Error fetching gifs:", error)
      })
  }

  return (
    <>
        <CustomHeader title="Gifs App" description="Busca tus gifs favoritos y compártelos con tus amigos!" />
        <SearchBar placeholder="Buscar gifs lindos..." onSearch={handleSearch} />
        <PreviousSearches searches={previousTerms} onTermClick={handleTermsClick} />
        <GifList gifs={gifs} />
    </>
  )
}
