import { GifList } from "../gifs/components/GifList"
import { PreviousSearches } from "../gifs/components/PreviousSearches"
import { useGifs } from "../gifs/hooks/useGifs"
import { CustomHeader } from "../shared/components/CustomHeader"
import { SearchBar } from "../shared/components/SearchBar"


export const GifsApp = () => {
  const { previousTerms, gifs, handleSearch, handleTermsClick } = useGifs()

  return (
    <>
        <CustomHeader title="Gifs App" description="Busca tus gifs favoritos y compártelos con tus amigos!" />
        <SearchBar placeholder="Buscar gifs lindos..." onSearch={handleSearch} />
        <PreviousSearches searches={previousTerms} onTermClick={handleTermsClick} />
        <GifList gifs={gifs} />
    </>
  )
}
