import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import style from '../styles/search.module.css';
import products from '../Data/products.json';
import { ClipLoader } from 'react-spinners';
import Style from '../styles/navbar.module.css';
import { Cart } from '../Store/CartItems';

const Navbar = () => {
    const { MyItems } = useContext(Cart);
    const [search, setSearch] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const handleSearch = (e) => {
        if (e.target.value) {
            setSearchActive(true)
            setSearch(e.target.value);
        } else {
            setSearchActive(false)
            setSearch(e.target.value);
        }
    };
    const resetSearch = () => {
        setSearch("");
        setSearchActive(false)
    }
    return (
        <div className="container-fluid bg-light shadow">
            <div className='row p-2  align-items-center my-1'>
                <div className='col-2'>
                    <Link className={`${Style.logoDiv}`} href="/" >
                        <img src="/logo.png" alt="Logo" className={Style.logo} />
                    </Link>
                </div>
                {/* <div className="col d-flex border-start">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-decoration-none text-dark fw-semibold" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-decoration-none text-dark fw-semibold" href="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-decoration-none text-dark fw-semibold" href="/">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-decoration-none text-dark fw-semibold " href='/'>Disabled</Link>
                        </li>
                    </ul>
                </div> */}
                <div className='col-4 border-start'>
                    <div className={`row ${style.mainDiv} mx-1`}>
                        <div className={`d-flex align-items-center ${style.inputDiv}`}>
                            <input className={`form-control ${style.input} `} type='text' value={search} onChange={handleSearch} placeholder='search product' />
                            <span className='p-2'>{searchActive ? <ClipLoader size={14} /> : ""}</span>
                        </div>
                        <div className={`${style.resultsDiv}`}>
                            {searchActive ? products.filter((item) => {
                                if (item.title.toLowerCase().includes(search.toLowerCase())) {
                                    return item
                                } else {
                                    return "";
                                }
                            }).slice(0, 5).map((item, index) => {
                                return (
                                    <div className={`row my-1 p-1 align-items-center ${style.resultRow}`} key={index} >
                                        <div className='col-3'>
                                            <div className='card'>
                                                <Link onClick={resetSearch} className='text-dark text-decoration-none' href={`/products/${item.id}`}>
                                                    <img alt='' className={`card-img ${style.ResultImg}`} src={item.thumbnail ? item.thumbnail : `/blankimg.png`} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <Link onClick={resetSearch} className='text-dark text-decoration-none' href={`/products/${item.id}`}>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <strong>{item.title.slice(0, 10)}...</strong>
                                                        <p>{item.description.slice(0, 20)}...</p>
                                                    </div>
                                                    <span>{item.price}$</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }) : ""}
                        </div>
                    </div>
                </div>
                <div className='col text-end'>
                    <Link href='/Cart' className={`text-decoration-none ${Style.cartIconDiv}`}>
                        <AiOutlineShoppingCart size={30} color="black" />
                        <p className={`${Style.cartBadge} text-muted`}>{MyItems.length}</p >
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar
