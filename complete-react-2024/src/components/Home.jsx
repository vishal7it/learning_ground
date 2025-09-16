import React from 'react'

import Person from './Person'
import Superman from './Superman'
import Product from './components/Product'
import Person2 from './components/Person2'
import Person3 from './components/Person3'
import Laptop from './components/Laptop'
import Events from './components/Events'
import Counter from './components/Counter'
import ShowProduct from './components/ShowProduct'
import FilterProduct from './components/FilterProduct'
const Home = () => {
    return (
        <>
            <div>
                {/* <Person />
      <Superman />
      <h1>App is a entry point</h1> */}
                {/* <Product title="Galxy S24 Ultra" brand="Samsung"
        price={150000} ram="8 GB" rom="128 GB" camera="200MP" />
      <Product title="Iphone 15" brand="Apple"
        price={75000} ram="12 GB" rom="128 GB" camera="80MP" fingerPrint="yes" />
      <Product title="Vivo ultra" brand="Vivo"
        price={30000} ram="16 GB" rom="256 GB" camera="100MP" /> */}

            </div>
            <div>
                {/* <Person2 name="Suman" age={18} salary={20000} />
        <Person2 name="Superman" age={180} salary={2000} />
        <Person2 name="Spiderman" age={100} salary={500000} ram="Ram" /> */}
            </div>
            <div>
                {/* <Person3 name="Suman" age={25} panCard={true} price={100} /> */}
            </div>
            <div>
                {/* <Laptop brandName="hp" model="probook" price={150000} />
        <Laptop brandName="Lenovo" model="yoga" price={120000} />
        <Laptop brandName="Dell" model="inspiron" price={125000} /> */}
            </div>
            <div>
                {/* <Events /> */}
            </div>
            <div>
                {/* <Counter /> */}
            </div>
            <div>
                {/* <ShowProduct /> */}

            </div>
            <div>
                <FilterProduct />
            </div>
        </>
    )
}

export default Home
