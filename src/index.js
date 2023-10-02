import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



function App() {
    return <>
        <div className='container'></div>
        <Header />
        <Menu />
        <Footer />
    </>
}

function Header() {
    // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" };
    const style = {}
    return <header className='header'>
        <h1 style={style}>First React Pizza Co.</h1>
    </header>
}




function Menu() {
    return <main className='menu'>
        <h2 >Our Menu</h2>
        <div className='Ourmenu'>
            <Pizza name='Pizza Spinaci' ingredients="Tomato, mozarella, mushrooms, and onion" photoName="pizzas/spinaci.jpg" price="10" />
            <Pizza name='Pizza Funghi' ingredients="Tomato, mushrooms, and onion" photoName="pizzas/funghi.jpg" price="12" />
            <Pizza name='Pizza Funghi' ingredients="Tomato, mushrooms, and onion" photoName="pizzas/margherita.jpg" price="12" />
            <Pizza name='Pizza Funghi' ingredients="Tomato, mushrooms, and onion" photoName="pizzas/prosciutto.jpg" price="12" />
            <Pizza name='Pizza Funghi' ingredients="Tomato, mushrooms, and onion" photoName="pizzas/salamino.jpg" price="12" />
            <Pizza name='Pizza Funghi' ingredients="Tomato, mushrooms, and onion" photoName="pizzas/spinaci.jpg" price="12" />
        </div>

    </main>
}





function Pizza(props) {
    console.log(props);
    const hour = new Date().getHours()
    const openHour = 8;
    const closeHour = 30;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    return <div className='pizza'>
        <img style={{ border: '2px solid red', padding: '5px' }} src={props.photoName} alt={props.name} />
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <span>Price: {props.price}$</span>
        </div>
    </div>
}



function Footer() {
    return <footer className='footer'>{new Date().toLocaleString()}  We are currently Open</footer>
    // return React.createElement('footer', null, 'We are currently Open')
}



//React v18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode><App /></React.StrictMode>);

//React before 18
// React.render(<App />);