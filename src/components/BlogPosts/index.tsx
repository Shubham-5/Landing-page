import "./BlogPosts.css"
import {MdNavigateNext} from "react-icons/md"
const BlogPosts = () => {
	// https://untree.co/demos/impact/images/post_3.jpg
	// https://untree.co/demos/impact/images/post_4.jpg
    return (
        <section className="bg-white">
            <div className="container">
            <div className="row">
<div className="col-7 mx-auto text-center">
<h2 className="heading mb-3 text-black">Blog Posts</h2>
<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
</div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 post-entry">
				<div className="col">
					<div className="card h-100">
						<a href="#"><img src="https://untree.co/demos/impact/images/post_2.jpg" className="card-img-top" alt="not found"/></a>
						<div className="card-body">

							<div className="meta">
								<span>May 27, 2021</span>
								<span> • </span>
								<span>12 Comments</span>
							</div>
							<h2><a href="#">Important of getting a notifications</a></h2>
							<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
							<p><a href="#" className="d-flex align-items-center read-more"><span>Read more</span> <span className="icon-navigate_next"><MdNavigateNext/></span></a></p>

						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<a href="#"><img src="https://untree.co/demos/impact/images/post_3.jpg" className="card-img-top" alt="not found"/></a>
						<div className="card-body">

							<div className="meta">
								<span>May 27, 2021</span>
								<span> • </span>
								<span>12 Comments</span>
							</div>
							<h2><a href="#">Important of getting a notifications</a></h2>
							<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
							<p><a href="#" className="d-flex align-items-center"><span>Read more</span> <span className="icon-navigate_next"><MdNavigateNext/></span></a></p>

						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<a href="#"><img src="https://untree.co/demos/impact/images/post_4.jpg" className="card-img-top" alt="not found"/></a>
						<div className="card-body">

							<div className="meta">
								<span>May 27, 2021</span>
								<span> • </span>
								<span>12 Comments</span>
							</div>
							<h2><a href="#">Important of getting a notifications</a></h2>
							<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
							<p><a href="#" className="d-flex align-items-center"><span>Read more</span> <span className="icon-navigate_next"><MdNavigateNext/></span></a></p>

						</div>
					</div>
				</div>

            </div>

            </div>
        </section>
    )
}

export default BlogPosts
