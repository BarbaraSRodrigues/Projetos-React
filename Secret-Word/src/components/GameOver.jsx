import "./GameOver.css"

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1 className="end">Fim de jogo</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button className="endButton" onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver
