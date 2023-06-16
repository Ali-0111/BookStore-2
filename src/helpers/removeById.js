export default function removeById(collection, id) {
  return collection.filter((item) => item.id !==id)
}