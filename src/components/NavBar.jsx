import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
export default function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <>
      <nav className="px-1 py-2 flex justify-between items-center container mx-auto sm:flex-row sm:py-3 md:px-5 md:flex-row md:py-3 lg:gap-0 lg:py-5">
        <div className="flex gap-1 items-center justify-center">
          <img
            className="w-14 h-14 sm:w-14 sm:h-14 md:w-15 md:h-15 lg:w-16 lg:h-16 2xl:w-18 2xl:h-18"
            src="https://breville.scene7.com/is/image/brevilleprod/avatar-partner-chef?fmt=png-alpha"
            alt="Chef Bytes"
          />
          <h2 className="italic play-write-font font-medium 2xl:text-3xl lg:text-2xl sm:text-xl md:text-2xl ">
            <NavLink to={"/"}>Chef Bytes</NavLink>
          </h2>
        </div>

        <form className="group relative" onSubmit={handleSubmit}>
          {/* search icon */}
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-orange-500 pointer-events-none group-focus-within:text-orange-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-500 rounded-md py-2 pl-10 ring-1 ring-slate-300 shadow-sm"
            type="text"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            aria-label="Search recipes"
            placeholder="Search recipes"
          />
        </form>
        <ul className="flex flex-col gap-0 items-center sm:gap-0 sm:flex-col sm:items-center md:flex-row lg:flex-row 2xl:flex-row 2xl:gap-3">
          <li>
            <NavLink
              to={"/"}
              className="relative font-semibold text-sm px-4 py-1 text-gray-800 border border-transparent hover:border-orange-500 rounded transition-all duration-200 md:text-lg "
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="relative text-sm font-semibold px-4 py-1 text-gray-800 border border-transparent hover:border-orange-500 rounded transition-all duration-200 md:text-lg"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
