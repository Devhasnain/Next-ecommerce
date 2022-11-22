import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import products from '../../Data/products.json';
import { AiOutlineShoppingCart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BeatLoader } from 'react-spinners';
import CustomPagination from '../../Components/CustomPagination';
import { Cart } from '../../Store/CartItems';
// import Style from '../../styles/SingleItem.module.css';
import Head from 'next/head';

const Id = () => {
    const { setMyItems, MyItems } = useContext(Cart);
    const router = useRouter();
    const { id } = router.query;
    let [product, setProduct] = useState();
    const [itemqty, setItemQty] = useState(1);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        let item = products.find((item) => { return (item.id == id) });
        setProduct(item)
    }, [id]);
    const handleIncre = () => {
        if (itemqty < 5) {
            setItemQty(itemqty + 1)
        }
    }
    const handleDecre = () => {
        if (itemqty > 1) {
            setItemQty(itemqty - 1)
        }
    }
    const handleProduct = async () => {
        setLoader(true)
        if (MyItems.length > 0) {
            let find = await MyItems.find((item) => { return item.id == id })
            if (!find) {
                setMyItems((pre) => { return [...pre, { ...product, qty: itemqty }] });
                alert("item added to your cart");
                setLoader(false)
            } else {
                alert("item already exists in your cart")
                setLoader(false)
                return;
            }
        } else {
            setMyItems((pre) => { return [...pre, { ...product, qty: itemqty }] });
            alert("item added to your cart");
            setLoader(false)
        }
    }
    return (
        <>
            {product && <Head>
                <title>Amazon/{`${product.title.slice(0, 4)}...`}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>}
            {product ? <div className='container-fluid '>
                <div className='container'>
                    <div className='my-5 row align-items-center justify-content-between'>
                        <div className='col-5'>
                            <div>
                                <CustomPagination images={product.images} id={id} />
                            </div>
                        </div>
                        <div className='col-6 mx-2'>
                            <div className='card-body'>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <div className='d-flex bg-light p-2 rounded justify-content-between my-1'>
                                    <span>Cetagory:</span><span className='fw-semibold'>{product.category}</span>
                                </div>
                                <div className='d-flex bg-light p-2 rounded justify-content-between my-1'>
                                    <span>Rating:</span>
                                    <div className='d-block align-items-center'>
                                        <span className='fw-semibold'>rate: {product.rating.rate}</span><br />
                                        <span className='fw-semibold'>count: {product.rating.count}</span>
                                    </div>
                                </div>
                                <div className='d-flex bg-light p-2 rounded justify-content-between my-1'>
                                    <span>Price:</span><span className='fw-semibold'>{product.price}$</span>
                                </div>
                                <div className='d-flex bg-light p-2 rounded justify-content-between my-1'>
                                    <span>Qty:</span>
                                    <div className='d-flex justify-content-end align-items-center'>
                                        <AiOutlinePlus color='black' style={{ cursor: "pointer" }} onClick={handleIncre} />
                                        <span className='fw-semibold border mx-2' style={{ paddingLeft: "15px", paddingRight: "15px", width: "40px" }}>{itemqty}</span>
                                        <AiOutlineMinus color='black' style={{ cursor: "pointer" }} onClick={handleDecre} />
                                    </div>
                                </div>
                                <div className='d-flex bg-light p-2 rounded justify-content-between my-1'>
                                    <span>Total amount:</span><span className='fw-semibold'>{itemqty * product.price}$</span>
                                </div>
                            </div>
                            <div className='row p-2 my-2'>
                                <button className='btn btn-dark text-light d-flex justify-content-center align-items-center' onClick={handleProduct}>
                                    {loader ? <span className='p-2 d-flex align-items-center'><BeatLoader size={10} color="white" /></span> : <><span className='fw-semibold'>Add to Cart</span> <AiOutlineShoppingCart size={30} className="mx-3" /></>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ""}
        </>
    )
}
export default Id