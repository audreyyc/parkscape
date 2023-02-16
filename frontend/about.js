// GitLab API calls

// get stats for user
function get_stats(name, user_id) {
  get_commits(name);
  get_issues(user_id);
}

// get commit stats for user
function get_commits(name) {
  var request = new XMLHttpRequest();
  var my_url = 'https://gitlab.com/api/v4/projects/43345825/repository/contributors/';
  request.open('GET', my_url);
  request.onload = function() {
      var allData = JSON.parse(this.response);
      var element;
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].name === name) {
          element = allData[i];
        }
      }
      var num;
      if (element === null) {
        num = 0;
      } else {
        num = element.commits;
      }
      var commit_id = "commits_".concat(name);
      document.getElementById(commit_id).innerHTML = num;
  };
  request.send();
}

// get issue stats for user
function get_issues(user_id) {
  var request = new XMLHttpRequest();
  var my_url = 'https://gitlab.com/api/v4/projects/43345825/issues_statistics?author_id='.concat(user_id);
  request.open('GET', my_url);
  request.onload = function() {
      var allData = JSON.parse(this.response);
      var num = allData.statistics.counts.all;
      var issue_id = "issues_".concat(user_id);
      document.getElementById(issue_id).innerHTML = num;
  };
  request.send();
}

// get total stats
function total_stats() {
  total_commits();
  total_issues();
  total_unittests();
}

// get total commit stats
function total_commits() {
  var request = new XMLHttpRequest();
  var my_url = 'https://gitlab.com/api/v4/projects/43345825/repository/commits/?per_page=1000';
  request.open('GET', my_url);
  request.onload = function() {
      var allData = JSON.parse(this.response);
      var num = allData.length;
      document.getElementById("all_commits").innerHTML = "Total Commits: ".concat(num);
  };
  request.send();
}

// get total issue stats
function total_issues() {
  var request = new XMLHttpRequest();
  var my_url = 'https://gitlab.com/api/v4/projects/43345825/issues_statistics';
  request.open('GET', my_url);
  request.onload = function() {
      var allData = JSON.parse(this.response);
      var num = allData.statistics.counts.all;
      document.getElementById("all_issues").innerHTML = "Total Issues: ".concat(num);
  };
  request.send();
}

// get total unit tests stats
function total_unittests() {
  document.getElementById("all_unittests").innerHTML = "Total Unit Tests: 0";
}