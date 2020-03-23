console.log('Before');
getUser(1, getRepository);
console.log('After');

function getRepository(user) {
  console.log(user);
  getRepositories(user.gitHubUsername, getCommit)

}

function getCommit(repos) {
  console.log(repos)
  getCommits(repos, displayCommits)
}

function displayCommits(commit) {
  console.log(commit)
}
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    callback( { id: id, gitHubUsername: 'art' } );
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback(['repo1', 'repo2', 'repo3'])  
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Calling GitHub Repos API...')
    callback(['commit'])
  }, 2000);
}


// function greeting(name) {
//   console.log('Hello ' + name);
// }

// function processUserInput(callback) {
//   var name = 'Daniel';
//   callback(name);
// }

// processUserInput(greeting)
