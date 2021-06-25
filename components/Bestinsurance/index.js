import React from 'react';
import { Badge, Avatar } from 'antd';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import { UserOutlined } from '@ant-design/icons';

const options = {
	loop: true,
	margin: 30,
	nav: false,
	mouseDrag: false,
	touchDrag: false,
	dots: true,
	autoplay: true,
	smartSpeed: 1500,
	autoplayHoverPause: true,
	center: true,
	responsive: {
		0: {
			items: 1,
		},
	}
};

const Bestinsurance = () => {
	const [display, setDisplay] = React.useState(false);

	React.useEffect(() => {
		setDisplay(true);
	}, [])
	return (

		<div className="team-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>แนะนำประกัน ขายดี</h2>
				</div>
				<div className="row">
					<div className="col-2 col-xl-1" />
					<div className="col-md-12 col-xl-5" style={{ padding: "0px 80px" }}>
						{display ? <OwlCarousel
							className="team-wrap owl-carousel owl-theme"
							{...options}
						>
							{/* แนะนำ */}

							<Badge.Ribbon text="แนะนำ" color="gold">

								<div className="single-pricing">
									<div className="price-header">
										<h3>ประกันโรคร้ายแรง สู้มะเร็งทุกระยะ แผน L</h3>
									</div>
									<div className="price">
										<h2><sup>฿</sup> 250 <sub> / เดือน</sub></h2>
										<h2 style={{ fontSize: 16, paddingTop: 5 }}><s>1,058</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
									</div>
									<div style={{ textAlign: "left" }}>
										<p style={{ paddingLeft: 60 }}>
											<ul style={{ listStyleType: "circle" }}>
												<li> เหมาะสำหรับอายุระหว่าง 20 - 60 ปี </li>
												<li> ค่ารักษาพยาบาล 60,000 บาท/ครั้ง </li>
												<li> เงินชดเชยรายได้ 3,500 บาท/วัน </li>
											</ul>
										</p>
									</div>
									<br />
									<a className="default-btn">ชื่อเลย</a>
								</div>

							</Badge.Ribbon>

							<Badge.Ribbon text="แนะนำ" color="gold">

								<div className="single-pricing">
									<div className="price-header">
										<h3>ประกันอุบัติเหตุ คุ้มครอง x 3 แผน L</h3>
									</div>
									<div className="price">
										<h2><sup>฿</sup> 411 <sub>เบี้ยเริ่มต้น / เดือน</sub></h2>
										<h2 style={{ fontSize: 16, paddingTop: 5 }}><s>411</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
									</div>
									<div style={{ textAlign: "left" }}>
										<p style={{ paddingLeft: 60 }}>
											<ul style={{ listStyleType: "circle" }}>
												<li>รับเงินก้อนเมื่อพบโรคร้าย 1.5 ล้านบาท</li>
												<li>คุ้มครองมะเร็งผิวหนัง 3 แสนบาท</li>
												<li>จ่ายเบี้ยคงที่นาน10 ปี ตามอายุแรกเข้า</li>
											</ul>
										</p>
									</div>
									<br />
									<a className="default-btn">ชื่อเลย</a>
								</div>

							</Badge.Ribbon>

						</OwlCarousel> : ''}

					</div>

					<div className="col-md-12 col-xl-5" style={{ padding: "0px 80px" }}>
						{display ? <OwlCarousel
							className="team-wrap owl-carousel owl-theme"
							{...options}
						>
							{/* ยอดนิยม */}
							<Badge.Ribbon text="ยอดนิยม" color="magenta">

								<div className="single-pricing">
									<div className="price-header">
										<h3>ประกันโรคร้ายแรง สู้มะเร็งทุกระยะ แผน M</h3>
									</div>
									<div className="price">
										<h2><sup>฿</sup> 275 <sub>เบี้ยเริ่มต้น / เดือน</sub></h2>
										<h2 style={{ fontSize: 16, paddingTop: 5 }}><s>324</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
									</div>
									<div style={{ textAlign: "left" }}>
										<p style={{ paddingLeft: 60 }}>
											<ul style={{ listStyleType: "circle" }}>
												<li> รับเงินก้อนเมื่อพบโรคร้าย 1 ล้านบาท </li>
												<li> คุ้มครองมะเร็งผิวหนัง 2 แสนบาท </li>
												<li> จ่ายเบี้ยคงที่นาน10 ปี ตามอายุแรกเข้า </li>
											</ul>
										</p>
									</div>
									<br />
									<a className="default-btn">ชื่อเลย</a>
								</div>

							</Badge.Ribbon>

							<Badge.Ribbon text="ยอดนิยม" color="magenta">

								<div className="single-pricing">
									<div className="price-header">
										<h3>ประกันอุบัติเหตุ เซฟดี แผน S</h3>
									</div>
									<div className="price">
										<h2><sup>฿</sup> 289 <sub> / เดือน</sub></h2>
										<h2 style={{ fontSize: 16, paddingTop: 5 }}><s>340</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
									</div>
									<div style={{ textAlign: "left" }}>
										<p style={{ paddingLeft: 60 }}>
											<ul style={{ listStyleType: "circle" }}>
												<li> อายุ 20-60 ปี  </li>
												<li>  กรณีเสียชีวิต 1,300,000 บาท  </li>
												<li>  ค่ารักษา 40,000 บาท / อุบัติเหตุ  </li>
											</ul>
										</p>
									</div>
									<br />
									<a className="default-btn">ชื่อเลย</a>
								</div>

							</Badge.Ribbon>

							<Badge.Ribbon text="ยอดนิยม" color="magenta">

								<div className="single-pricing">
									<div className="price-header">
										<h3>ประกันอุบัติเหตุ เซฟดี แผน S</h3>
									</div>
									<div className="price">
										<h2><sup>฿</sup> 289 <sub> / เดือน</sub></h2>
										<h2 style={{ fontSize: 16, paddingTop: 5 }}><s>340</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
									</div>
									<div style={{ textAlign: "left" }}>
										<p style={{ paddingLeft: 60 }}>
											<ul style={{ listStyleType: "circle" }}>
												<li> อายุ 20-60 ปี  </li>
												<li>  กรณีเสียชีวิต 1,300,000 บาท  </li>
												<li>  ค่ารักษา 40,000 บาท / อุบัติเหตุ  </li>
											</ul>
										</p>
									</div>
									<br />
									<a className="default-btn">ชื่อเลย</a>
								</div>

							</Badge.Ribbon>

						</OwlCarousel> : ''}
					</div>
					<div className="col-2 col-xl-1" />
				</div>
			</div>

			<style dangerouslySetInnerHTML={{
				__html: `
				.ant-ribbon.ant-ribbon-placement-end {
					right: 5px;
					border-bottom-right-radius: 0;
				}
			`}} />
		</div >
	)
}

export default Bestinsurance;