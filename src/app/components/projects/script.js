const GITHUB_USER = "dnyaneshwargiri";
const GITHUB_URL = "https://api.github.com/users/";

Chart.defaults.global = {
  animation: true,
  animationSteps: 50,
  animationEasing: "easeOutBounce",
  scaleLabel: "<%=value%>",
  bezierCurve: true,
  bezierCurveTension: 1,
  scaleIntegersOnly: true,
  scaleBeginAtZero: false,
  maintainAspectRatio: false,
  onAnimationProgress: function () {},
  onAnimationComplete: function () {},
};

class Repo extends React.Component {
  render() {
    let { repo } = this.props;
    return /*#__PURE__*/ React.createElement(
      "a",
      { className: "repository", href: repo.html_url } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "repo-info" } /*#__PURE__*/,
        React.createElement(
          "div",
          null,
          /*#__PURE__*/ React.createElement("i", {
            className: "fa fa-star",
          }) /*#__PURE__*/,
          React.createElement("span", null),
          /*#__PURE__*/ React.createElement(
            "span",
            { className: "title" },
            repo.name,
          ),
        ),
      ),
    );
  }
}

class DataChart extends React.Component {
  eventsRange(event) {
    let range = [];
    for (let i = 11; i > 0; i--) {
      range.push(moment().subtract(i, "days").format("YYYY-MM-DD"));
    }
    let evtmp = this.props.events
      .filter((e) => event(e.type))
      .map((e) => e.created_at.match(/^(\d{4}-\d{2}-\d{2}).*/)[1]);

    return range.map((r) =>
      evtmp.reduce(function (p, c) {
        return r === c ? p + 1 : p;
      }, 0),
    );
  }

  componentDidMount() {
    let pushEvents = this.eventsRange((e) => e === "PushEvent");
    let miscEvents = this.eventsRange((e) => e !== "PushEvent");

    var lineChartData = {
      labels: pushEvents,
      datasets: [
        {
          fillColor: "#7E9BA0",
          strokeColor: "rgba(0,0,0,0)",
          pointColor: "rgba(255, 255, 255, 0)",
          pointStrokeColor: "rgba(255, 255, 255, 0)",
          data: pushEvents,
        },
        {
          fillColor: "#f06292",
          strokeColor: "rgba(0,0,0,0)",
          pointColor: "rgba(255, 255, 255, 0)",
          pointStrokeColor: "rgba(255, 255, 255, 0)",
          data: miscEvents,
        },
      ],
    };

    var ctx1 = document.getElementById("chart").getContext("2d");
    this.chart = new Chart(ctx1).Line(lineChartData);
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "chart" } /*#__PURE__*/,
      React.createElement("canvas", {
        id: "chart",
        width: "370",
        height: "100",
      }),
    );
  }
}

class RepoChart extends React.Component {
  componentDidMount() {
    var htmlData = [
      {
        value: this.props.repos[0].stargazers_count,
        color: "#f8bbd0",
      },

      {
        value: this.props.repos[1].stargazers_count,
        color: "#ec407a",
      },

      {
        value: this.props.repos[2].stargazers_count,
        color: "#fff",
      },
    ];

    var ctx2 = document.getElementById("pie").getContext("2d");
    new Chart(ctx2).Doughnut(htmlData, {
      segmentShowStroke: false,
      percentageInnerCutout: 80,
    });
  }
  render() {
    let totals = this.props.repos.reduce(function (p, c) {
      return p + c.stargazers_count;
    }, 0);
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "pie-chart-wrap" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "pie-chart-totals" } /*#__PURE__*/,
        React.createElement("i", { className: "fa fa-star" }),
        totals,
      ) /*#__PURE__*/,

      React.createElement("canvas", {
        id: "pie",
        className: "pie-chart",
        width: "180",
        height: "180",
      }),
    );
  }
}

class Card extends React.Component {
  render() {
    let reposData = this.props.repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3);
    let repos = reposData.map((r, i) =>
      /*#__PURE__*/ React.createElement(Repo, { key: i, repo: r }),
    );

    let starred = this.props.repos.reduce(function (p, c) {
      return p + Number(c.stargazers_count);
    }, 0);

    let forked = this.props.repos.reduce(function (p, c) {
      return p + Number(c.forks_count);
    }, 0);

    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "card" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "header" } /*#__PURE__*/,

        React.createElement(
          "a",
          { className: "userlink", href: this.props.user.html_url },
          this.props.user.login /*#__PURE__*/,
          React.createElement("i", { className: "fa fa-link" }),
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "avatar" } /*#__PURE__*/,
          React.createElement("img", { src: this.props.user.avatar_url }),
        ) /*#__PURE__*/,

        React.createElement(
          "span",
          { className: "repos-count" },
          this.props.user.public_repos,
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "userinfo" } /*#__PURE__*/,
          React.createElement(
            "h2",
            null,
            this.props.user.name || this.props.user.login,
          ) /*#__PURE__*/,
          React.createElement("p", null, this.props.user.location),
        ),
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "totals" } /*#__PURE__*/,
        React.createElement(
          "div",
          null,
          this.props.user.followers /*#__PURE__*/,
          React.createElement("div", { className: "desc" }, "Followers"),
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          null,
          starred /*#__PURE__*/,
          React.createElement("div", { className: "desc" }, "Total stars"),
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          null,
          forked /*#__PURE__*/,
          React.createElement("div", { className: "desc" }, "Times Forked"),
        ),
      ) /*#__PURE__*/,

      React.createElement(DataChart, {
        events: this.props.events,
      }) /*#__PURE__*/,

      React.createElement("br", null),
      /*#__PURE__*/ React.createElement("br", null) /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "super-line" },
        "TOP Rated",
      ) /*#__PURE__*/,
      React.createElement(RepoChart, { repos: reposData }) /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "top-repos" },
        repos,
      ) /*#__PURE__*/,

      React.createElement("br", null),
      /*#__PURE__*/ React.createElement("br", null),
    );
  }
}

class Application extends React.Component {
  constructor() {
    super();
    this.state = { user: {}, repos: [] };
    this.loadGitHubUser(GITHUB_USER);
  }

  loadGitHubUser(user) {
    Promise.all([
      fetch(GITHUB_URL + user).then((r) => r.json()),
      fetch(GITHUB_URL + user + "/repos").then((r) => r.json()),
      fetch(GITHUB_URL + user + "/events?per_page=300").then((r) => r.json()),
    ]).then((resp) => {
      this.setState({ user: resp[0], repos: resp[1], events: resp[2] });
    });
  }

  render() {
    let children = this.state.user.hasOwnProperty("login") /*#__PURE__*/
      ? React.createElement(Card, {
          user: this.state.user,
          repos: this.state.repos,
          events: this.state.events,
        }) /*#__PURE__*/
      : React.createElement(
          "div",
          { className: "loading" },
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement("span", null),
        );

    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "wrapper" },
      children,
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(Application, null),
  document.getElementById("application"),
);
