import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__group header__group--left">
        <a className="link link--back" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </a>
      </div>
      <div className="header__group header__group--main">
        <div>
          <span className="bold">#1029384756</span>
          <span className="timeago">Updated 41 min ago</span>
        </div>

      </div>
      <div className="header__group header__group--right">
        Actions
      </div>
    </header>
  )
}

export default Header;
