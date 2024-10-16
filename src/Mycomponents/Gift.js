export default function Gift() {
    return (
        
        <div className="container">
            <div className="position-relative py-5 px-4 p-sm-5">
                {/* Light theme background */}
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" 
                    style={{ background: 'linear-gradient(102deg, #dad4ec 0%, #f3e7e9 80.43%)' }}
                ></div>
                
                {/* Dark theme background */}
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" 
                    style={{ background: 'linear-gradient(102deg, #38314b 0%, #3f353a 100%)' }}
                ></div>
                
                {/* Content */}
                <div className="position-relative z-1 text-center py-md-3 my-lg-3">
                    <p className="fs-xl pb-2 mb-1">Still not convinced?</p>
                    <h2 className="pb-2 pb-sm-3">Add premium support and lifetime updates to this.</h2>
                    <a 
                        className="btn btn-lg btn-primary animate-slide-end" 
                        href="" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i className="ci-shopping-cart fs-base animate-target ms-n1 me-2"></i>
                        Buy now
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="fs-sm text-center py-4 py-lg-5 my-sm-2 my-md-3 my-lg-0">
                © All rights reserved. Made by <span className="animate-underline">
                    <a 
                        className="animate-target text-dark-emphasis text-decoration-none" 
                        href="https://createx.studio/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Gada Group
                    </a>
                </span>
            </div>
        </div>
    );
}
