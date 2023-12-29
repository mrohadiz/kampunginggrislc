export default function ThemeSwap({
  handleOnClick,
}: {
  handleOnClick?: (e?: any) => void;
}) {
  return (
    <>
      < div className="dropdown" >
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-base-content">
          Tema
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          {/* <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg> */}
        </div>
        <ul className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-24" >
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" value="night" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Winter" value="winter" /></li>
          <li onClick={handleOnClick}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyber" value="cyberpunk" /></li>
        </ul>
      </div >
    </>
  );
}