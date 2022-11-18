import React from "react";

const FromBox = ({ newLetter, setNewLetter }) => {
  const handleInputChange = (e) => {
    setNewLetter({ ...newLetter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-xl dark:text-slate-100">
            Dear.. &nbsp;
          </span>
          <span className="label-text-alt dark:text-slate-400">
            e.g. 'The universe' or 'My younger self'{" "}
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={newLetter.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control mt-5">
        <label className="label">
          <span className="label-text text-lg dark:text-slate-100 ">About</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Type the things you want"
          name="text"
          value={newLetter.text}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-control w-full max-w-xs mt-5">
        <label className="label">
          <span className="label-text text-lg dark:text-slate-100 ">From</span>
          <span className="label-text-alt dark:text-slate-400">
            e.g. 'Past me' or 'Sunflower'{" "}
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="from"
          value={newLetter.from}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="btn btn-ghost mt-10 "
        disabled="disabled"
        type="submit"
      >
        After you have Written Please click Write New
      </button>
    </div>
  );
};

export default FromBox;
