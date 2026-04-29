import { useRef, useState } from "react"
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.actions"
import type { Gif } from "../interfaces/gif.interface"

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermsClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }

    const gifsData = await getGifsByQueryAction(term)
    setGifs(gifsData)
  }

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    try {
      const gifsData = await getGifsByQueryAction(query)
      gifsCache.current[query] = gifsData
      setGifs(gifsData)

      setPreviousTerms((prevTerms) => {
        const updatedTerms = [query, ...prevTerms.filter((t) => t !== query)]
        return updatedTerms.slice(0, 5)
      })
    } catch (error) {
      console.error("Error fetching gifs:", error)
    }
  }

  return { previousTerms, gifs, handleSearch, handleTermsClick }
}
