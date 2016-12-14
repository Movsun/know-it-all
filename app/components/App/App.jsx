import { h, Component } from 'preact'; /** @jsx h */

import SkillTable from '../SkillTable/SkillTable.jsx';

if (process.env.IMPORT_SCSS) require(`./App.scss`); // eslint-disable-line global-require

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      stats: [],
    };
  }

  render() {
    return (
      <div id="app">
        <header className="header">
          <h1 className="header__title">Know It All</h1>
          <a
            href="https://hackernoon.com/what-you-dont-know-about-web-development-d7d631f5d468#.ex2yp6d64"
            target="_blank"
            rel="noopener noreferrer"
            className="header__help"
            title={`Find out more about know it all, version ${this.props.version}`}
          >What is this?</a>
        </header>

        <SkillTable {...this.state} />
      </div>
    );
  }
}

export default App;
