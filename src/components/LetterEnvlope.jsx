import React from "react";

const LetterEnvlope = ({ name, text, from }) => {
  return (
    <div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <img className="w-40" src="src/images/postcard.png" alt="" />
        </div>
        <div className="collapse-content flex">
          <div>
            <img className="w-20" src="src/images/maybeDaisyy.png" alt="" />
          </div>
          <div>
            <h1 className="p-2 text-lg font-bold dark:text-slate-600">
              Dear...{name}
            </h1>
            <p className="p-2 dark:text-slate-100">{text}</p>
            <h3 className="font-bold text-lg text-gray-600 p-2">
              <span className="text-slate-600 text-sm">form...{from}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterEnvlope;
