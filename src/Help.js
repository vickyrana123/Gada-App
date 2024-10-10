import { Link } from 'react-router-dom'; // Ensure you have this import if you're using routing

export default function Help(params) {
    return (
        <section className="position-relative z-1 bg-white-500">
            <header>
                <h1 className="h2 text-center pt-md-2 pt-lg-3 pt-xl-4 mb-4">How can we help?</h1>
                <div className="position-relative mx-auto mb-4" style={{ maxWidth: '545px' }}>
                    <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-body fs-lg ms-3"></i>
                    <input 
                        type="search" 
                        className="form-control form-control-lg form-icon-start" 
                        placeholder="What do you need help with?" 
                        aria-label="Search field" 
                    />
                </div>
            </header>
            
            <div className="row justify-content-center g-4 pt-2 pt-sm-3 pb-md-2 pb-lg-3 pb-xl-4">
                {[
                    { icon: "ci-delivery", label: "Track your order" },
                    { icon: "ci-shopping-bag", label: "Edit or cancel order" },
                    { icon: "ci-refresh-cw", label: "Returns & refunds" },
                    { icon: "ci-gift", label: "My bonus account" }
                ].map((item, index) => (
                    <div key={index} className="col-6 col-md-3 col-xl-2 text-center">
                        <div className="position-relative d-inline-block">
                            <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{ width: '48px', height: '48px' }}>
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark"></span>
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark"></span>
                                <i className={`${item.icon} position-relative z-1 fs-xl`}></i>
                            </div>
                            <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                                <Link className="hover-effect-underline stretched-link text-decoration-none" to="/help/article">
                                    {item.label}
                                </Link>
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4 mt-5 mb-5">
                {[
                    { title: "Delivery", icon: "ci-delivery", questions: ["Can I track my order in real-time?", "Is there an option for express delivery?", "Will my parcel be charged customs charges?", "Do you offer international delivery?", "Why does my statement have a recurring charge?"] },
                    { title: "Returns & refunds", icon: "ci-refresh-cw", questions: ["What is your returns policy?", "I paid with Afterpay, how do returns work?", "What happens to my refund if I return 45 days?", "How do I return something to you?", "Can I return an exchange instead of a refund?"] },
                    { title: "Payment options", icon: "ci-credit-card", questions: ["How do I place an order?", "My payment was declined, what should I do?", "When will I be charged for my order?", "How do I pay using Google Pay?", "How do I use my Gift Voucher to pay for an order?"] },
                    { title: "Order issues", icon: "ci-shopping-bag", questions: ["Can I amend my order after I've placed it?", "I've received a faulty item, what should I do?", "I've received an incorrect item, what do I do?", "I've bought a gift voucher, can I cancel or return it?", "What if isn't right on my customs invoice?"] },
                    { title: "Products & stock", icon: "ci-archive", questions: ["Where can I find your size guide?", "Where can I find your care instructions?", "Can you tell me more about Collusion?", "How do I change my Fit Assistant Information?", "What are your adhesive product guidelines?"] },
                    { title: "Managing account", icon: "ci-settings", questions: ["How do I create an account?", "I'm having trouble signing into my account.", "I'm having problems using your App.", "Do I need to create an account to shop with you?", "I'd like to delete my account what should I do?"] }
                ].map((category, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                            <div className="card-body">
                                <h3 className="h5 d-flex mb-4">
                                    <i className={`${category.icon} fs-xl pe-1 mt-1 me-2`}></i>
                                    {category.title}
                                </h3>
                                <ul className="nav flex-column gap-3">
                                    {category.questions.map((question, qIndex) => (
                                        <li key={qIndex}>
                                            <Link className="nav-link hover-effect-underline fw-normal p-0" to="/help/article">{question}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-footer nav bg-transparent border-0 pt-0">
                                <Link className="nav-link animate-underline px-0 py-2" to="/help/all">
                                    <span className="animate-target">View all</span>
                                    <i className="ci-chevron-right fs-base ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pt-lg-2 pt-xl-0 mx-5">
                {/* Location */}
                <div className="col">
                    <div className="d-flex align-items-center">
                        <i className="ci-map-pin fs-lg text-dark-emphasis"></i>
                        <h3 className="h6 ps-2 ms-1 mb-0">Store location</h3>
                    </div>
                    <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
                    <ul className="list-unstyled">
                        <li>New York 11741, USA</li>
                        <li>396 Lillian Bolavandy, Holbrook</li>
                    </ul>
                </div>

                {/* Phones */}
                <div className="col">
                    <div className="d-flex align-items-center">
                        <i className="ci-phone-outgoing fs-lg text-dark-emphasis"></i>
                        <h3 className="h6 ps-2 ms-1 mb-0">Call us directly</h3>
                    </div>
                    <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
                    <ul className="list-unstyled">
                        <li>Customers: 1 50 537 53 082</li>
                        <li>Franchise: 1 50 537 53 000</li>
                    </ul>
                </div>

                {/* Emails */}
                <div className="col">
                    <div className="d-flex align-items-center">
                        <i className="ci-mail fs-lg text-dark-emphasis"></i>
                        <h3 className="h6 ps-2 ms-1 mb-0">Send a message</h3>
                    </div>
                    <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
                    <ul className="list-unstyled">
                        <li>Customers: help@cartzilla.com</li>
                        <li>Franchise: franchise@catzilla.com</li>
                    </ul>
                </div>

                {/* Working hours */}
                <div className="col">
                    <div className="d-flex align-items-center">
                        <i className="ci-clock fs-lg text-dark-emphasis"></i>
                        <h3 className="h6 ps-2 ms-1 mb-0">Working hours</h3>
                    </div>
                    <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
                    <ul className="list-unstyled">
                        <li>Mon - Fri  8:00 - 18:00</li>
                        <li>Sat - Sun  10:00 - 16:00</li>
                    </ul>
                </div>
            </footer>
        </section>
    );
}
