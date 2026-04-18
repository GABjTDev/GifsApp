import { mockGifs } from "../mocks/gifs.mock"

export const GifsApp = () => {
  return (
    <>
        {/* Header */}
        <div className="content-center">
            <h1>Buscador de gifs</h1>
            <p>Descubre los mejores gifs del momento</p>
        </div>

        {/* Search */}
        <div className="search-container">
            <input type="text" placeholder="Buscar gifs..." />
            <button>Buscar</button>
        </div>

        {/* Busquedas anteriores */}
        <div className="previous-searches">
            <h2>Resultados de la búsqueda</h2>
            <ul className="previous-searches-list">
                <li>Gif 1</li>
                <li>Gif 2</li>
                <li>Gif 3</li>
            </ul>
        </div>

        {/* Resultados */}
        <div className="gifs-container">
            {
                mockGifs.map(gif => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title}/>
                        <p>{gif.title}</p>
                        <p>
                            {gif.width} x {gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
