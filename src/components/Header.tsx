// import { ReactComponent as Logo } from '../images/logo.svg'

const Header = () => {
  return (
    <header className="text-white flex items-center justify-between">
      {/*<div className="logo-container w-[83px] h-12">
         <Logo title="Rock Paper Scissors" className="w-full h-full" width={83} height={48} />
      </div>*/}
      <h1 className="break-words uppercase text-[2.1rem] font-bold leading-[1.6rem] w-[10rem] ">
        Rock Paper Scissors
      </h1>
      <div className="score flex flex-col items-center justify-center bg-white w-[80px] h-[72px]">
        <span className="score-label">Score</span>
        <span className="score-value">0</span>
      </div>
    </header>
  )
}

export default Header
