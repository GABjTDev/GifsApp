import { type Gif } from "../../mocks/gifs.mock"

interface Props {
    mockGifs: Gif[];
}

export const GifList = ({ mockGifs }: Props) => {
  return (
    <>
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
