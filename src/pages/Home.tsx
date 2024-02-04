import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Divider from "../components/common/divider";
import { useWindowSize } from "@uidotdev/usehooks";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Home.scss";

export default function Home() {
	const [size, setSize] = useState(1440);
	const { width } = useWindowSize();

	useEffect(() => {
		setSize(window.innerWidth);
	}, [width]);

	return (
		<main id="Home">
			<section className="banner">
				<div className="container-fluid">
					<div className="row d-flex flex-column flex-lg-row justify-content-between align-items-center">
						<div className="col-md-4">
							<div className="banner__title">
								<img src="/logo-default.svg" alt="nav-brand" className="mb-5" width={196} height={72} />
								<div className="banner__divider">
									<Divider />
								</div>
							</div>
						</div>

						<div className="col-md-7">
							<div className="overlay">
								<div className="overlay-text">
									<h1 className="d-block text-white fw-bold mb-6">
										高雄
										<br />
										豪華住宿之選
									</h1>
									<p className="d-block text-white">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
									<Link to="/login">
										<Button variant="outline" className="bg-white w-100 p-5 p-md-10 d-flex justify-content-end align-items-center" onClick={() => {}}>
											<div className="me-4">立即訂房</div>
											<h4 className="fw-bold" style={{ width: "150px", height: "1px", background: "#000" }}></h4>
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="news bg-primary-10">
				<div className="container">
					<div className="row ">
						<div className="col-lg-2 mb-10">
							<div style={{ width: "140px" }}>
								<h2 className="fs-12 text-primary mb-6 mb-md-10">
									最新
									<br />
									消息
								</h2>
								<Divider />
							</div>
						</div>

						<img
							src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/dot.png?raw=true"
							alt="deco-dot"
							className="deco-dot"
						/>

						<div className="col-lg-10 d-flex flex-column">
							<div className="d-flex flex-lg-row flex-column align-items-lg-center mb-10">
								<div className="img-container">
									<img
										src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/news1.png?raw=true"
										alt="news 1"
										className="mb-6 mb-lg-0 me-lg-6"
										height={294}
									/>
								</div>

								<div>
									<h3 className="fw-bold mb-6">秋季旅遊，豪華享受方案</h3>
									<p>
										秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
									</p>
								</div>
							</div>
							<div className="d-flex flex-lg-row flex-column align-items-lg-center mb-10">
								<div className="img-container">
									<img
										src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/news2.png?raw=true"
										alt="news 2"
										className="mb-6 mb-lg-0 me-lg-6"
										height={294}
									/>
								</div>
								<div>
									<h3 className="fw-bold mb-6">輕鬆住房專案</h3>
									<p>
										我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
									</p>
								</div>
							</div>
							<div className="d-flex flex-lg-row flex-column align-items-lg-center">
								<div className="img-container">
									<img
										src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/news3.png?raw=true"
										alt="news 3"
										className="mb-6 mb-lg-0 me-lg-6"
										height={294}
									/>
								</div>
								<div>
									<h3 className="fw-bold mb-6">耶誕快樂，住房送禮</h3>
									<p>
										聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="about bg-neutral-bg">
				<div>
					<img
						style={{ width: "100%", objectFit: "cover" }}
						height={672}
						src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/about.png?raw=true"
						alt=""
					/>
				</div>

				<div className="overlay-wrapper">
					<div className="container d-flex">
						<div className="overlay-content ms-auto">
							<div className="overlay-title w-100 d-flex justify-content-between justify-content-md-start align-items-center">
								<h1 className="d-block text-white fw-bold me-10">
									關於
									<br />
									我們
								</h1>
								<div style={{ width: "167px" }}>
									<Divider />
								</div>
							</div>
							<p className="mb-4 mb-md-10">
								享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
								<br />
								我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。{" "}
							</p>
							<p className="mb-4 mb-md-10">
								我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
								<br />
								我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
							</p>
							<p className="mb-4 mb-md-10">
								在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。{" "}
							</p>
							<p className="mb-4 mb-md-10">
								享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="room bg-neutral-bg position-relative">
				<div className="room-deco">
					<img
						className="w-100"
						src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png?raw=true"
						alt=""
					/>
				</div>

				<div className="room-bg" style={{ zIndex: 1 }}>
					<img
						className="w-100"
						src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/bg.png?raw=true"
						alt=""
					/>
				</div>

				<img
					src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/dot.png?raw=true"
					alt="deco-dot"
					className="deco-dot"
				/>

				<div className="d-flex flex-column flex-md-row">
					<div className="room-img">
						<img src="/deco.png" alt="" className="w-100 pe-lg-10" />
					</div>

					<div className="room-content container " style={{ zIndex: 3 }}>
						<div className="row d-flex h-100">
							<div className="col-md-6 mb-10 m-md-0 text-white mt-md-auto ms-md-auto">
								<h2 className="fz-10 mb-md-4">尊爵雙人房</h2>
								<p className="mb-md-10">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
								<h6 className="mb-6">NT$ 10,000</h6>
								<Button variant="outline" className="w-100 bg-white d-flex justify-content-end align-items-center p-5 mb-5 mb-lg-10">
									查看更多
									<h4 className="fw-bold" style={{ width: "80px", height: "1px", background: "#000" }}></h4>
								</Button>
								<div className="d-flex justify-content-end">
									<img src="/icon/ic_ArrowLeftPrimary.svg" width={24} height={24} alt="" className="me-8" />
									<img src="/icon/ic_ArrowRightPrimary.svg" width={24} height={24} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="restaurant bg-primary-10">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="d-flex align-items-center">
								<h1 className="d-block text-primary fw-bold me-10">
									佳餚
									<br />
									美饌
								</h1>
								<div style={{ width: "167px" }}>
									<Divider />
								</div>
							</div>
						</div>
					</div>
				</div>

				<img
					className="deco-line"
					src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line.png?raw=true"
					alt=""
				/>

				<div className="container pe-md-0 me-md-0">
					<Swiper
						spaceBetween={20}
						slidesPerView={size < 767 ? 1 : 3}
						modules={[Autoplay]}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
					>
						<SwiperSlide>
							<div className="card">
								<img
									src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food1.png?raw=true"
									alt=""
								/>
								<div className="caption-background"></div>
								<div className="caption-text">
									<div className="w-100 d-flex">
										<h4>海霸</h4>
										<p className="ms-auto">SUN-MON</p>
										<p className="ms-4"> 11:00 - 20:30</p>
									</div>
									<p className="fs-6">
										以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card">
								<img
									src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food2.png?raw=true"
									alt=""
								/>
								<div className="caption-background"></div>
								<div className="caption-text">
									<div className="w-100 d-flex">
										<h4>日食</h4>
										<p className="ms-auto">SUN-MON</p>
										<p className="ms-4"> 17:00 - 22:00</p>
									</div>
									<p className="fs-6">
										為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card">
								<img
									src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food3.png?raw=true"
									alt=""
								/>
								<div className="caption-background"></div>
								<div className="caption-text">
									<div className="w-100 d-flex">
										<h4>山臻</h4>
										<p className="ms-auto">SUN-MON</p>
										<p className="ms-4"> 11:00 - 20:30</p>
									</div>
									<p className="fs-6">
										帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card">
								<img
									src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food4.png?raw=true"
									alt=""
								/>
								<div className="caption-background"></div>
								<div className="caption-text">
									<div className="w-100 d-flex">
										<h4>月永</h4>
										<p className="ms-auto">SUN-MON</p>
										<p className="ms-4"> 11:00 - 20:00</p>
									</div>
									<p className="fs-6">
										從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="card">
								<img
									src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food5.png?raw=true"
									alt=""
								/>
								<div className="caption-background"></div>
								<div className="caption-text">
									<div className="w-100 d-flex">
										<h4>天潮</h4>
										<p className="ms-auto">SUN-MON</p>
										<p className="ms-4">14:00 - 19:30</p>
									</div>
									<p className="fs-6">
										我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>

			<section className="traffic-info bg-neutral-bg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="traffic-title d-flex align-items-center">
								<h1 className="d-block text-primary fw-bold me-10">
									交通
									<br />
									方式
								</h1>
								<div style={{ width: "167px" }}>
									<Divider />
								</div>
							</div>
							<h6 className="text-white mb-4">台灣高雄市新興區六角路123號</h6>
						</div>
					</div>
					<div className="row mb-10">
						<div className="col-12">
							<img
								className="map w-100"
								src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/map.png?raw=true"
								alt=""
							/>
						</div>
					</div>

					<div className="traffic-info-list row">
						<div className="text-white col-12 col-md-4">
							<img src="/icon/ic_car.svg" alt="car" className="icon mb-4" />
							<h4>自行開車</h4>
							<p>
								如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
							</p>
						</div>
						<div className="text-white col-12 col-md-4">
							<img src="/icon/ic_train.svg" alt="train" className="icon mb-4" />
							<h4>高鐵/火車</h4>
							<p>
								如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
							</p>
						</div>
						<div className="text-white col-12 col-md-4">
							<img src="/icon/ic_luxurycar.svg" alt="pick-up" className="icon mb-4" />
							<h4>禮賓車服務</h4>
							<p>承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
						</div>
					</div>
				</div>

				<img
					className="deco-line"
					src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
					alt=""
				/>
			</section>
		</main>
	);
}
