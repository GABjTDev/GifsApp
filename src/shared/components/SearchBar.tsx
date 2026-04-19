import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar...", onSearch }: SearchBarProps) => {

  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query)
    }

    setQuery("")
  }

  useEffect(() => {
    if (query.length === 0) return;
    const delayDebounce = setTimeout(() => {
      handleSearch()
    }, 1000)

    return () => clearTimeout(delayDebounce)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <>
        {/* Search */}
        <div className="search-container">
            <input 
              type="text" 
              placeholder={placeholder} 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    </>
  )
}
