
import "./NavBar.css"

const SideBar = () => {
    return (
       <div>
			<div className="w-100 pb-4 d-flex justify-content-end">
				<button
					type="button"
					className="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<ul className="mobile-list list-unstyled ps-3">
				<li className=" pb-2">Home</li>
				<li className="pb-2">
					<div
						className="accordion accordion-flush"
						id="accordionFlushExample"
					>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingOne"
							>
								<button
									className="accordion-button collapsed ps-0 py-2"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne"
									aria-expanded="false"
									aria-controls="flush-collapseOne"
								>
									Dropdown
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body pt-0">
									<ul className="list-unstyled">
										<li>Menu One</li>
										<li>
											<div
												className="accordion accordion-flush"
												id="accordionFlushExample2"
											>
												<div className="accordion-item">
													<h2
														className="accordion-header"
														id="flush-headingTwo"
													>
														<button
															className="accordion-button collapsed ps-0 w-100"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#flush-collapseTwo"
															aria-expanded="false"
															aria-controls="flush-collapseOne"
														>
															Menu Two
														</button>
													</h2>
													<div
														id="flush-collapseTwo"
														className="accordion-collapse collapse"
														aria-labelledby="flush-headingOne"
														data-bs-parent="#accordionFlushExample2"
													>
														<div className="accordion-body pt-0">
															<ul className="mobile-list list-unstyled">
																<li className="pb-2">
																	Sub Menu One
																</li>
																<li className="pb-2">
																	Sub Menu Two
																</li>
																<li>
																	Sub Menu
																	Three
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li>Menu Three</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li className="pb-2">Services</li>
				<li className="pb-2">Blog</li>
				<li className="pb-2">About</li>
				<li>Contact Us</li>
			</ul>
		</div>
    )
}

export default SideBar
