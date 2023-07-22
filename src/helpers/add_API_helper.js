export default function add_API_helper (state, payload) {
  const { item_id, title, author, category} = payload.newBook;
  return (
    { ...state,
      isLoading: false,
      bookCollection: {
        ...state.bookCollection,
        [item_id]: [{title, author, category}]
      },
    }
  );
}