import React from "react";

function Modal(props) {
  return (
    <>
      <div className="relative w-full h-full ">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg shadow">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-3 border-b rounded-t text-canter">
            <h3 className="text-xl font-medium text-gray-900 capitalize">
              Congratulation ! <span className="font-bold">{props.name}</span>{" "}
              Catched
            </h3>
            <button
              onClick={props.closeModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 flex flex-col items-center justify-center text-center font-semibold">
            <img
              className="w-60 h-60 flex justify-center"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.image}.svg`}
            />
            <h2 className="mt-4">Name Your Pokemon!</h2>
            <input
              onChange={props.addName}
              type="text"
              className="border-2 rounded-lg w-1/2 h-full p-2 border-gray-400"
            />
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center pb-4 space-x-2 border-gray-200 rounded-b justify-center ">
            <button
              onClick={props.savePokemon}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
