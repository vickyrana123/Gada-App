export default function Payment(params) {

    return (
        <div class="col-lg-9">
            <div class="ps-lg-3 ps-xl-0">


                <h1 class="h2 pb-2 pb-md-3 px-5 mt-5">Payment methods</h1>


                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4 px-5">
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body pb-3">
                                <div class="d-flex align-items-start justify-content-between mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                    <span class="mt-1.5" style={{ fontSize: 25 }}><b>Mastercard</b></span>
                                    <span class="badge text-bg-info rounded-pill" style={{ fontSize: 20 }}>Primary</span>
                                </div>
                                <div class="h4 mb-1">**** **** **** 8341</div>
                                <div class="h5 text-danger fs-xs">Expired 05/24</div>
                            </div>
                            <div class="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body pb-3">
                                <div class="d-flex align-items-start justify-content-between mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
                                    </svg>
                                    <span class="mt-1.5" style={{ fontSize: 25 }}><b>Visa</b></span>
                                    <div class="nav animate-underline">
                                        <a class="nav-link animate-target fs-xs p-0" href="#!" style={{ fontSize: 20 }}>Set as primary</a>
                                    </div>
                                </div>
                                <div class="h4 mb-1">**** **** **** 1276</div>
                                <div class="h5 text-body fs-xs">Expiration 01/27</div>
                            </div>
                            <div class="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0 h-100">
                            <span class="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark"></span>
                            <span class="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark"></span>
                            <div class="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
                                <a class="nav-link animate-underline stretched-link min-w-0 fs-base px-0" href="#addPaymentModal" data-bs-toggle="modal">
                                    <i class="ci-plus fs-lg ms-n2 me-2"></i>
                                    <span class="h3 animate-target text-truncate">Add payment method</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
