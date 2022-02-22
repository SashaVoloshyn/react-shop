import './App.scss';

function App() {
    // const arr = [
    //     {
    //         "id":1,
    //         "title":"",
    //         "price":111,
    //         "imageUrl":"/img/cups/"
    //     }
    // ]

    return (
        <div className="App">
            <header className='header'>
                <div className="headerLogoName">
                    <img src="https://img.icons8.com/glyph-neue/50/000000/espresso-cup.png" alt='logo'/>
                    <div className='headerName'>
                        <h3>Shop Name</h3>
                        <p>Магазин дурацьких кружок</p>
                    </div>
                </div>


                <ul className='headerMenu'>
                    <li>
                        <img src="/img/headerImg/Group.svg" alt="cart"/>
                        <span>2022 грн.</span>
                    </li>

                    <li><img src="/img/headerImg/love.svg" alt="favorite"/></li>
                    <li><img src="/img/headerImg/user.svg" alt="user"/></li>
                </ul>

            </header>

            <div className="mineContent">
                <h1>content</h1>

            </div>
        </div>

    );
}

export default App;
