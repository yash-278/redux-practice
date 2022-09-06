export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isAuthenticated() {
  if (
    localStorage.getItem("isAuthenticated") !== null &&
    localStorage.getItem("isAuthenticated") === "true"
  ) {
    return true;
  }
  return false;
}
