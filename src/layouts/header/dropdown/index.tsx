import { useState } from "react";

export const HoverDropdown =()=> {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-20">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center  p-2 bg-white border rounded-md"
        >
          <span className="mr-2">Dropdown Button</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <ul
          className={`absolute right-0 w-40 rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>
    </div>
  );
}