export default function removeBookHelper(state, payload) {
  const temp = {...state.bookCollection};
  delete temp[payload.id];
  return {...state, bookCollection:{...temp}, isLoading: false};
}