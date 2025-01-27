import { baseUrl, repositoriesQuantity } from "./src/scripts/variables.js";

async function repos(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_pages=${repositoriesQuantity}`)
  return await response.json()
}

export { repos }