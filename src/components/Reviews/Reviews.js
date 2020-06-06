import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return <div>
        <section className="user-page-reviews-package">
            <div className="container reviews-package show">
                <div className="header">
                    <h2>Reviews as Seller<small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span><span className="total-rating">(3)</span></small></h2>
                    <div className="filter-dd rf"><a
                        className="fit-button fit-button-color-grey fit-button-fill-ghost fit-button-size-medium btn-contact-me js-contact-me" target="_blank"
                        href="https://www.fiverr.com/nirbhaykularia/develop-web-application-using-php-laravel">About my gig</a>
                    </div>
                </div>
                <div className="reviews-wrap">
                    <ul className="header-stars">
                        <li>Seller communication level<small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span></small>
                        </li>
                        <li>Recommend to a friend<small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span></small>
                        </li>
                        <li>Service as described<small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span></small>
                        </li>
                    </ul>
                    <div>
                        <ul className="review-list">
                            <li><span className="user-pict-32"><img
                                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/63342016/original/12278727_10153718256534898_16808210221175637_n.jpg"
                                alt="marwanekhalil" data-reload="inprogress" /></span>
                                <div className="header"><h5>marwanekhalil</h5><small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span></small></div>
                                <p>great work</p><span className="summarize"><time>1 year ago</time></span>
                            </li>
                            <li><span className="user-pict-32"><img
                                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/7d6a27137acce4c1a09f1ca1422a0394-1532039172233/5a79cc72-5bd0-45b8-a5dd-8bcc41b8d9c9.jpg"
                                alt="nonsvens" data-reload="inprogress" /></span>
                                <div className="header"><h5>nonsvens</h5><small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span></small></div>
                                <p>Thank you for your great work! Very good communication what I find is important to
                                    lead to a successful project. Will keep in touch with you for further projects
                                    :)</p><span className="summarize"><time>2 years ago</time></span>
                            </li>
                            <li><span className="user-pict-32"><span className="missing-image-user">w</span></span>
                                <div className="header"><h5>wewedev</h5><small><span className="star-rating-s15"></span><span className="total-rating-out-five">5</span></small></div>
                                <p>Perfect. nothing to add. He did the job and more. I recommand it</p><span
                                    className="summarize"><time>2 years ago</time></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Reviews