import React, { useState } from 'react';

type Props = {
  onSubmit: (query: string) => void,
  query: string,
};

const SearchField = ({ onSubmit, query = '' }: Props) => {
  const [value, setValue] = useState(query);

  const handleSubmit = () => {
    const url = new URL(window.location.href);

    url.search = `?q=${value}`;

    history.pushState(null, '', url.toString());

    onSubmit(value);
  };

  return (
    <div className="md:flex">
      <input
        type="text"
        value={value}
        placeholder="Enter a song, get the BPM"
        className="appearance-none border focus:outline-none focus:shadow-outline leading-tight md:w-4/5 mr-3 px-3 py-3 rounded shadow text-gray-700 w-full"
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.nativeEvent.code === 'Enter') {
            handleSubmit();
          }
        }}
      />

      <button
        className="antialiased bg-blue-500 focus:outline-none focus:shadow-outline font-bold hover:bg-blue-700 md:mt-0 md:w-1/5 mt-4 px-4 py-2 rounded text-white w-full"
        onClick={handleSubmit}
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
