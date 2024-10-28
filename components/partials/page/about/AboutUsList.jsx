import React from 'react';
import Link from 'next/link';

const AboutUsList = () => {
    return (
        <div className="aboutUsList">
            <div className="textSection">
                <h2 className="title">Lorem Ipsum Dolar Sumit Lorem</h2>
                <div className="image">
                    <img src="/static/img/categories/images/r2.png" alt="Toys Box" />
                </div>
            </div>
            <div className="listSection">
                <div className="listItem">
                    <img src="/static/img/categories/images/icons/1.png" className="icon" alt="Quality Icon" />
                    <div className="listContent">
                        <div>Quality</div>
                        <span>We uphold the highest standards in the toys and games we offer.</span>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icons/2.png" className="icon" alt="Innovation Icon" />
                    <div className="listContent">
                        <div>Innovation</div>
                        <span>We seek out the latest trends and innovations to delight our customers.</span>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icons/3.png" className="icon" alt="Customer Satisfaction Icon" />
                    <div className="listContent">
                        <div>Customer Satisfaction</div>
                        <span>We prioritize customer satisfaction and strive to exceed expectations in every interaction.</span>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icons/4.png" className="icon" alt="Creativity Icon" />
                    <div className="listContent">
                        <div>Creativity</div>
                        <span>We celebrate the diverse imaginations of children and inspire creativity through our products.</span>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icons/5.png" className="icon" alt="Community Icon" />
                    <div className="listContent">
                        <div>Community</div>
                        <span>We are committed to building a supportive and inclusive community of families who share our passion for play.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsList;
