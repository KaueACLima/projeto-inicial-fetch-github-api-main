const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: [],
  setInfo(gitHubUser) {
    this.avaterUrl = gitHubUser.avartar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
  },
  setRepositorioes(repositories) {
    this.repositories = repositories
  }
}

export { user }