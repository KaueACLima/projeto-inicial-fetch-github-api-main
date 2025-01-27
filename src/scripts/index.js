import { user } from "/src/scripts/services/user.js";
import { repositoriesQuantity } from "./src/scripts/services/repositories.js";

document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
  const userName = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    getUserProfile(userName)
  }
})

function getUserProfile(userName){
  user().then(userData => {
    let userInfo = `<img src="${userData.avatar_url}" alt="Foto de perfil do usúario"/>
                    <div class="data">
                        <h1>${userData.name ?? 'Não possui nome cadastrado 😅'}</h1>
                        <p>${userData.bio ?? 'Não possui bio cadastrado 😅'}</p>
                    </div>`
    document.querySelector('.profile-data').innerHTML = userInfo
  })
}

function getUserRepositories(userName){
    repositories(userName).then(reposData => {
      let repositoriesItens = ""
      reposData.forEach(repo => {
        repositoriesItens += `<li><a href="${repo.html_url} target="_blank">${repo.name}</a>"</li>`
      })

      document.querySelector('.profile-data'),innerHTML += `<div class="repositories section">
                                                              <h2>Repositórios</h2>
                                                              <ul>${repositoriesItens}</ul>
                                                            </div>`
    })
}
