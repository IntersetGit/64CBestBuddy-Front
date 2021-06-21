import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="error-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="error-content-wrap">
                        <h1>4 <span>0</span> 4</h1>
						<h3>Oops! Page Not Found</h3>
						<p>The page you were looking for could not be found.</p>

                        <Link href="/">
                            <a className="default-btn page-btn active">
                                Return To Home Page
                            </a>
                        </Link>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Custom404;