import React from 'react';
import Link from 'next/link';

const Comments = () => {
    return (
        <div className="comments-area">
            <h3 className="comments-title">2 ความคิดเห็น:</h3>

            <ol className="comment-list">
                <li className="comment">
                    <div className="comment-body">
                        <footer className="comment-meta">
                            <div className="comment-author vcard">
                                <img src="/images/blog-details/comment-img-1.jpg" className="avatar" alt="image" />
                                <b className="fn">จอห์น โจนส์</b>
                                <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                                <span>กุมภาพันธ์ 23 2564 เวลา 10:59 น.</span>
                            </div>
                        </footer>

                        <div className="comment-content">
                            <p>เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง</p>
                        </div>

                        <div className="reply">
                            <Link href="#">
                                <a className="comment-reply-link">ตอบกลับ</a>
                            </Link>
                        </div>
                    </div>

                    {/* <ol className="children">
                        <li className="comment">
                            <div className="comment-body">
                                <footer className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img src="/images/blog-details/comment-img-2.jpg" className="avatar" alt="image" />
                                        <b className="fn">Steven Smith</b>
                                        <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                        <span>April  24, 2020 at 10:59 am</span>
                                    </div>
                                </footer>

                                <div className="comment-content">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim</p>
                                </div>

                                <div className="reply">
                                    <Link href="#">
                                        <a className="comment-reply-link">Reply</a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ol> */}
                </li>

                <li className="comment">
                    <div className="comment-body">
                        <footer className="comment-meta">
                            <div className="comment-author vcard">
                                <img src="/images/blog-details/comment-img-3.jpg" className="avatar" alt="image" />
                                <b className="fn">จอห์น โด</b>
                                <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                                <span>กุมภาพันธ์ 23 2564 เวลา 10:59 น.</span>
                            </div>
                        </footer>

                        <div className="comment-content">
                            <p>เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง</p>
                        </div>

                        <div className="reply">
                            <Link href="#">
                                <a className="comment-reply-link">ตอบกลับ</a>
                            </Link>
                        </div>
                    </div>
                </li>
            </ol>

            <div className="comment-respond">
                <h3 className="comment-reply-title">ทิ้งคำตอบไว้</h3>

                <form className="comment-form">
                    <p className="comment-notes">
                        <span id="email-notes">ที่อยู่อีเมลของคุณจะไม่ถูกเผยแพร่</span>
                        Required fields are marked 
                        <span className="required">*</span>
                    </p>
                    <p className="comment-form-author">
                        <label>ชื่อ <span className="required">*</span></label>
                        <input type="text" id="author" name="author" required="required" />
                    </p>
                    <p className="comment-form-email">
                        <label>อีเมล <span className="required">*</span></label>
                        <input type="email" id="email" name="email" required="required" />
                    </p>
                    <p className="comment-form-comment">
                        <label>ความคิดเห็น</label>
                        <textarea name="comment" id="comment" cols="45" rows="5" required="required"></textarea>
                    </p>
                    <p className="form-submit">
                        <input type="submit" name="submit" id="submit" className="submit" value="แสดงความคิดเห็น" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Comments;