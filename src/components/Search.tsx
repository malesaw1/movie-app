import { Dispatch, SetStateAction, useEffect } from 'react';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  useEffect(() => {}, []);

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
