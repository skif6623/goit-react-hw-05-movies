export const Search = ({ onSet }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSet(e.target.elements.query.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
