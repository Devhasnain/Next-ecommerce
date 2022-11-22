import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from '../../styles/Pagination.module.css';
import { motion } from 'framer-motion';

const Products = ({ products }) => {
  const [product, setProducts] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);
  const ProductsPerPage = 27;
  const PagesVisited = ProductsPerPage * pageNumber;
  const Products = products.reverse().slice(PagesVisited, PagesVisited + ProductsPerPage).map((item, index) => {
    return (
      <div key={index} className='col-2 my-2' style={{ maxHeight: "450px" }}>
        <motion.div className='card p-1 bg-light'
          initial={{ opacity: "0%", transform: "translateY(20px)" }}
          whileInView={{ opacity: "100%", transform: "translateY(0px)", transition: { duration: "0.3" } }}
          whileHover={{ transform: "translateY(-10px)", transition: { duration: 0.5 } }}
        >
          <Link href={`/products/${item.id}`} style={{ overflow: "hidden" }}>
            <motion.img initia={{ transition: { duration: 0.5 } }} whileHover={{ scale: 1.3, transition: { duration: 0.5 } }} src={item.thumbnail ? item.thumbnail : "/blankimg.png"} className="card-img" style={{ maxHeight: "200px" }} alt='' />
            <div className={`text-light fw-semibold priceDiv shadow`}>{item.price}$</div>
          </Link>
          <div className='card-body'>
            <Link href={`/products/${item.id}`} className="text-decoration-none text-dark">
              <h5>{item.title.slice(0, 15)}...</h5>
              <p>{item.description.slice(0, 50)}...</p>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  });
  const pageCount = Math.ceil(products.length / ProductsPerPage);
  const onPageChange = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <div className='container-fluid p-4'>
      <div className='row gy-1'>
        {product ?
          <>
            {Products}
            <hr />
            <ReactPaginate
              previousLabel={`Previous`}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={onPageChange}
              containerClassName={`nav justify-content-center align-items-center ${Pagination.container}`}
              previousLinkClassName={`btn btn-light bg-light`}
              nextLinkClassName={`btn btn-light bg-light`}
              activeClassName={`${Pagination.active}`}
            />
          </>
          : ""}
      </div>
    </div>
  )
}
export default Products;