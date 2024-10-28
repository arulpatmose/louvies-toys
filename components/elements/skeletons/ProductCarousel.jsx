// import React from 'react';
// import Image from 'next/image';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
 
// const products = [
//     {
//         id: 1,
//         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         image: '/static/img/categories/images/d1.png',
//         status: '25% OFF',
//         price: '$1,200',
//         originalPrice: '$1,600',
//     },
//     {
//         id: 2,
//         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         image: '/static/img/categories/images/d2.png',
//         price: '$1,500',
//     },
//     {
//         id: 3,
//         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         image: '/static/img/categories/images/d3.png',
//         price: '$250',
//     },
//     {
//         id: 4,
//         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         image: '/static/img/categories/images/d4.png',
//         status: 'SALE',
//         price: '$220',
//     },
// ];

// const ProductCarousel = () => {
//     return (
//         <div className={styles.productCarousel}>
//             <div className={styles.carouselHeader}>
//                 <h2>Lorem Ipsum</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many voluptate eget dolor.</p>
//             </div>
//             <div className={styles.carousel}>
//                 <button className={`${styles.carouselButton} ${styles.left}`}>
//                     <FaArrowLeft />
//                 </button>
//                 <div className={styles.carouselProducts}>
//                     {products.map((product) => (
//                         <div className={styles.productCard} key={product.id}>
//                             {product.status && <span className={`${styles.status} ${product.status === 'SALE' ? styles.sale : ''}`}>{product.status}</span>}
//                             <div className={styles.productThumbnail}>
//                                 <Image src={product.image} alt={product.title} width={200} height={200} />
//                             </div>
//                             <h3>{product.title}</h3>
//                             <div className={styles.priceSection}>
//                                 <p className={styles.price}>{product.price}</p>
//                                 {product.originalPrice && <p className={styles.originalPrice}>{product.originalPrice}</p>}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <button className={`${styles.carouselButton} ${styles.right}`}>
//                     <FaArrowRight />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProductCarousel;
