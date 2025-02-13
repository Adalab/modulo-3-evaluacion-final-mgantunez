import headerImage from '/public/portada_header.png';

function Header() {

    return (
        <header className="header">
            <img className="header__image" src={headerImage} alt="Owen Wilson WOW" />
            <h1 className="header__title">The Owen Wilson WOW web app</h1>

        </header>
    );

}

export default Header;