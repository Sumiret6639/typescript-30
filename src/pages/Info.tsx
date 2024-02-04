import { Carousel } from "react-bootstrap";
import Divider from "../components/common/divider";
import { Link } from "react-router-dom";
import "./Info.scss";

export default function Info() {
	return (
		<main id="Info" className="h-100 bg-black" style={{}}>
			<section className="banner">
				<div className="banner__caption">
					<div className="banner__title">
						<img src="/logo-default.svg" alt="nav-brand" className="mb-5" width={196} height={72} />
						<Divider />
					</div>
					<h1 className="d-block text-white">客房旅宿</h1>
				</div>
			</section>

			<section className="list bg-primary-10">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h5>房型選擇</h5>
							<h1 className="text-primary">各種房型，任您挑選</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-12 d-flex flex-column flex-md-rowrounded">
							<div className="row">
								<div className="col-12 col-md-6 pe-md-0">
									<Carousel interval={null} style={{ width: "100%", height: "457px" }}>
										<Carousel.Item>
											<img
												className="rounded-start"
												style={{ width: "100%", height: "457px" }}
												src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true"
												alt=""
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="rounded-start"
												style={{ width: "100%", height: "457px" }}
												src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true"
												alt=""
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="rounded-start"
												style={{ width: "100%", height: "457px" }}
												src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true"
												alt=""
											/>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className="col-12 col-md-6 ps-md-0">
									<div className="bg-white p-md-10 h-100">
										<h2 className="mb-1 fw-bold">尊爵雙人房</h2>
										<p className="mb-10">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
										<div className="d-flex mb-10">
											<div className="border border-primary rounded p-4 me-4">
												<img src="/icon/ic_Size.svg" alt="" />
												<p>24 坪</p>
											</div>
											<div className="border border-primary rounded p-4 me-4">
												<img src="/icon/ic_Size.svg" alt="" />
												<p>24 坪</p>
											</div>
											<div className="border border-primary rounded p-4">
												<img src="/icon/ic_Size.svg" alt="" />
												<p>24 坪</p>
											</div>
										</div>
										<Divider className="mb-10" />
										<div className="d-flex justify-content-between">
											<h4 className="text-primary">NT$ 10,000</h4>
											<Link to="detail">
												<img src="/icon/ic_ArrowRight.svg" alt="" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row"></div>
					<div className="row"></div>
					<div className="row"></div>
				</div>
			</section>
		</main>
	);
}
