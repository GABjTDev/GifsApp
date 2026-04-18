import { useState } from "react"
import { GifList } from "../gifs/components/GifList"
import { PreviousSearches } from "../gifs/components/PreviousSearches"
import { mockGifs } from "../mocks/gifs.mock"
import { CustomHeader } from "../shared/components/CustomHeader"
import { SearchBar } from "../shared/components/SearchBar"

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["gatos", "perros", "memes"])
  const handleTermsClick = (term: string) => {
    console.log("Term clicked:", term)
  }

  return (
    <>
        <CustomHeader title="Gifs App" description="Busca tus gifs favoritos y compártelos con tus amigos!" />
        <SearchBar placeholder="Buscar gifs lindos..." />
        <PreviousSearches searches={previousTerms} onTermClick={handleTermsClick} />
        <GifList mockGifs={mockGifs} />
    </>
  )
}
