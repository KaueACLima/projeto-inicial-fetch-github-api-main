import { baseUrl, repositoriesQuantity } from "./src/scripts/variables.js";

async function repositories(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_pages=${repositoriesQuantity}`)
  return await response.json()
}

export { repositories }