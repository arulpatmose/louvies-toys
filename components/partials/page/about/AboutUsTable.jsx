import React from 'react';
 
const AboutUsTable = () => {
    const categories = [
        {
            title: "Flash Sale Today",
            items: [
                { image: "/static/img/categories/images/d1.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/d2.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/d3.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
            ],
        },
        {
            title: "Best Sellers",
            items: [
                { image: "/static/img/categories/images/d4.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/d5.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/d6.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
            ],
        },
        {
            title: "Top Rated",
            items: [
                { image: "/static/img/categories/images/d7.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/d8.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/d9.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
            ],
        },
        {
            title: "New Arrival",
            items: [
                { image: "/static/img/categories/images/d10.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/c1.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
                { image: "/static/img/categories/images/c2.png", title: "Lorem ipsum dolor sit", price: "$1,500" },
            ],
        },
    ];

    return (
        <div className="aboutUsTable">
            {categories.map((category, index) => (
                <div className="category" key={index}>
                    <h3 className="categoryTitle">{category.title}</h3>
                    <div className="items">
                        {category.items.map((item, index) => (
                            <div className="item" key={index}>
                                <img src={item.image} alt={item.title} className="itemImage" />
                                <div className="itemDetails">
                                    <span className="itemTitle">{item.title}</span>
                                    <span className="itemPrice">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutUsTable;
