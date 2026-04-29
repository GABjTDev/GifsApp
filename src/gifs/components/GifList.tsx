import type { Gif } from "../interfaces/gif.interface"

interface Props {
    gifs: Gif[];
}

export const GifList = ({ gifs }: Props) => {
  return (
    <>
        {/* Resultados */}
        <div className="gifs-container">
            {
                gifs.map(gif => (
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
