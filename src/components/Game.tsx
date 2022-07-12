import { ReactComponent as Rock } from '../images/icon-rock.svg'
import { ReactComponent as Paper } from '../images/icon-paper.svg'
import { ReactComponent as Scissors } from '../images/icon-scissors.svg'

const Game = () => {
  return (
    <main className="flex flex-wrap items-start justify-evenly w-full">
      <span className="paper rings">
        <label htmlFor="paper-btn" className="paper-button circular-button">
          <button id="paper-btn" className="inner-circular-button">
            <Paper />
          </button>
        </label>
      </span>

      <span className="scissors rings">
        <label htmlFor="scissors-btn" className="scissors-button circular-button">
          <button id="scissors-btn" className="inner-circular-button">
            <Scissors />
          </button>
        </label>
      </span>

      <div className="line-break basis-full h-0"></div>

      <span className="rock rings">
        <label htmlFor="rock-btn" className="rock-button circular-button">
          <button id="rock-btn" className="inner-circular-button">
            <Rock />
          </button>
        </label>
      </span>
    </main>
  )
}

export default Game
