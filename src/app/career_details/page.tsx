import Footer from "../style/components/footer/footer"
import "./career_details.scss"


export default function Careers() {
    return (
        <main>
            <div className="container">
                <p className="job--title">Product Manager - FT9JA</p>

                <div className="job--container1">
                    <p className="job--details">
                        We are seeking an experienced Product Manager accusantium doloremque
                        laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam...
                    </p>
                    <div className="job--desc1">
                        <p>What we are looking for:</p>
                        <p>
                            Accusantium doloremque laudantium, totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="job--desc2">
                        <p>Experience needed:</p>
                        <p>
                            Accusantium doloremque laudantium, totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="job--desc3">
                        <p>Benefits:</p>
                        <p>
                            Accusantium doloremque laudantium, totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>

                    </div>

                </div>

                <div className="job--container2">
                    <div>
                        <p>Job title</p>
                        <p>Product Manager - FT9JA</p>
                    </div>
                    <div>
                        <p>Category</p>
                        <p>Product</p>
                    </div>
                    <div>
                        <p>Location</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div>
                        <p>Date posted</p>
                        <p>22nd January, 2024</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
            <Footer />
        </main>
    )
}