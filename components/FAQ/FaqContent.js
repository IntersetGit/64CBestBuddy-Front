import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqContent = () => {
    return (
        <div className="faq-area faq-page pt-100">
			<div className="container">
                <div className="faq-accordion">
                    <h2>Get Every Single Answer</h2>
                    <Accordion allowZeroExpanded preExpanded={['a']}>
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What Do I Get When My Account Is Paid Off?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="row align-items-center">
									<div className="col-lg-6">
										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, possimus beatae. Placeat consequuntur consectetur autem dolorem similique omnis amet explicabo aliquid maiores voluptatem omnis. Consectetur facere asperiores at corrupti dolor iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                            
                                        <p>Nam, possimus beatae. Placeat consequuntur consectetur autem dolorem similique omnis amet explicabo aliquid maiores voluptatem. Consectetur facere asperiores at corrupti Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur dolores temporibus. Eius voluptates velit excepturi eligendi veritatis mollitia nesciunt</p>
									</div>
									<div className="col-lg-6">
										<img src="/images/faq/faq-img1.png" alt="Image" />
									</div>
								</div>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="b">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Do You Support Banking Loan? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="c">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What Is Budget And Cost Development?  
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="row align-items-center">
									<div className="col-lg-6">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, possimus beatae. Placeat consequuntur consectetur autem dolorem similique omnis amet explicabo aliquid maiores voluptatem omnis. Consectetur facere asperiores at corrupti dolor iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                            
                                        <p>Nam, possimus beatae. Placeat consequuntur consectetur autem dolorem similique omnis amet explicabo aliquid maiores voluptatem. Consectetur facere asperiores at corrupti Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur dolores temporibus. Eius voluptates velit excepturi eligendi veritatis mollitia nesciunt</p>
									</div>
									<div className="col-lg-6">
										<img src="/images/faq/faq-img2.png" alt="Image" />
									</div>
								</div>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="d">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What Do I Get When My Account Is Paid Off?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
				</div>
			</div>
		</div>
    )
}

export default FaqContent;