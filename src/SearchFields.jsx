const SearchFields = ({searchValue, setSearchValue}) => {
  return (
    <div className="inputContainer">
      <input
        id="inputCrypto"
        type="text"
        value={searchValue}
        placeholder=" "
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <label htmlFor="inputCrypto">
        <p>Chercher une crypto dans la liste</p>
      </label>
    </div>
  );
};

export default SearchFields;