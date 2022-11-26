import { AppRoute, AuthorizationStatus } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import HeaderLogo from './header-logo';
import HeaderSvg from './header-svg';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {

  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const handleLogout = () => {
    //dispatch(logoutAction());
  };

  return (
    <>
      <HeaderSvg />
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <HeaderLogo />
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                {authorizationStatus === AuthorizationStatus.Auth ? (
                  <>
                    <li className='header__nav-item user'>
                      <div className='header__nav-profile'>
                        <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                        <span className='header__user-name user__name'>
                          Oliver.conner@gmail.com
                        </span>
                      </div>
                    </li>
                    <li className='header__nav-item'>
                      <Link className='header__nav-link' to={AppRoute.Main} onClick={handleLogout}>
                        <span className='header__signout'>Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className='header__nav-item user'>
                    <Link
                      className='header__nav-link header__nav-link--profile'
                      to={AppRoute.Login}
                    >
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__login'>Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
