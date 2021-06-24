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

				{display ? <OwlCarousel
					className="team-wrap owl-carousel owl-theme"
					{...options}
				>


					{/* แนะนำ */}
					<Badge.Ribbon text="แนะนำ" color="gold">
						<div className="single-choose" style={{ zIndex: 0 }}>
							<span className="flaticon-hand"></span>
							<h3 style={{ fontSize: 32 }}>
								<small style={{ fontSize: 14 }}></small> 899 <small style={{ fontSize: 14 }}>บาท/เดือน</small>
							</h3>
							<h3 style={{ fontSize: 16 }}>
								<s>1,058</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span>
							</h3>
							<div style={{ textAlign: "left" }}>
								<p style={{ padding: 0, margin: 0 }}>ประกันโรคร้ายแรง สู้มะเร็งทุกระยะ แผน L</p>
								<p style={{ paddingLeft: 25 }}>
									<ul style={{ listStyleType: "circle" }}>
										<li> เหมาะสำหรับอายุระหว่าง 20 - 60 ปี </li>
										<li> ค่ารักษาพยาบาล 60,000 บาท/ครั้ง </li>
										<li> เงินชดเชยรายได้ 3,500 บาท/วัน </li>
									</ul>

								</p>
							</div>
							<br />
							<a className="default-btn">ชื้อเลย</a>
						</div>
					</Badge.Ribbon>

					<Badge.Ribbon text="แนะนำ" color="gold">
						<div className="single-choose" style={{ zIndex: 0 }}>
							<span className="flaticon-hand"></span>
							<h3 style={{ fontSize: 32 }}>
								<small style={{ fontSize: 14 }}>เบี้ยเริ่มต้น</small> 411 <small style={{ fontSize: 14 }}>บาท/เดือน</small>
							</h3>
							<h3 style={{ fontSize: 16 }}>
								<s>484</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span>
							</h3>
							<div style={{ textAlign: "left" }}>
								<p style={{ padding: 0, margin: 0 }}>ประกันอุบัติเหตุ คุ้มครอง x 3 แผน L </p>
								<p style={{ paddingLeft: 25 }}>
									<ul style={{ listStyleType: "circle" }}>
										<li>รับเงินก้อนเมื่อพบโรคร้าย 1.5 ล้านบาท</li>
										<li>คุ้มครองมะเร็งผิวหนัง 3 แสนบาท</li>
										<li>จ่ายเบี้ยคงที่นาน10 ปี ตามอายุแรกเข้า</li>
									</ul>
								</p>
							</div>
							<br />
							<a className="default-btn">ชื้อเลย</a>
						</div>
					</Badge.Ribbon>


					{/* ยอดนิยม */}

					<Badge.Ribbon text="ยอดนิยม" color="magenta">
						<div className="single-choose" style={{ zIndex: 0 }}>
							<span className="flaticon-hand"></span>
							<h3 style={{ fontSize: 32 }}>
								<small style={{ fontSize: 14 }}>เบี้ยเริ่มต้น</small> 275 <small style={{ fontSize: 14 }}>บาท/เดือน</small>
							</h3>
							<h3 style={{ fontSize: 16 }}>
								<s>324</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span>
							</h3>
							<div style={{ textAlign: "left" }}>
								<p style={{ padding: 0, margin: 0 }}>ประกันโรคร้ายแรง สู้มะเร็งทุกระยะ แผน M</p>
								<p style={{ paddingLeft: 25 }}>
									<ul style={{ listStyleType: "circle" }}>
										<li> รับเงินก้อนเมื่อพบโรคร้าย 1 ล้านบาท </li>
										<li> คุ้มครองมะเร็งผิวหนัง 2 แสนบาท </li>
										<li> จ่ายเบี้ยคงที่นาน10 ปี ตามอายุแรกเข้า </li>
									</ul>
								</p>
							</div>
							<br />
							<a className="default-btn">ชื้อเลย</a>
						</div>
					</Badge.Ribbon>

					<Badge.Ribbon text="ยอดนิยม" color="magenta">
						<div className="single-choose" style={{ zIndex: 0 }}>
							<span className="flaticon-hand"></span>
							<h3 style={{ fontSize: 32 }}>
								<small style={{ fontSize: 14 }}></small> 289 <small style={{ fontSize: 14 }}>บาท/เดือน</small>
							</h3>
							<h3 style={{ fontSize: 16 }}>
								<s>340</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span>
							</h3>
							<div style={{ textAlign: "left" }}>
								<p style={{ padding: 0, margin: 0 }}>ประกันอุบัติเหตุ เซฟดี แผน S </p>
								<p style={{ paddingLeft: 25 }}>
									<ul style={{ listStyleType: "circle" }}>
										<li> อายุ 20-60 ปี  </li>
										<li>  กรณีเสียชีวิต 1,300,000 บาท  </li>
										<li>  ค่ารักษา 40,000 บาท / อุบัติเหตุ  </li>
									</ul>

								</p>
							</div>
							<br />
							<a className="default-btn">ชื้อเลย</a>
						</div>
					</Badge.Ribbon>

				</OwlCarousel> : ''}
			</div>
		</div>
	)
}

export default Bestinsurance;