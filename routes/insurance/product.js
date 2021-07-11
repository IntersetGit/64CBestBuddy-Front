import { useEffect, useState } from "react"
import { DatePicker } from 'antd';
import moment from 'moment';


const ProductInsurance = ({ model }) => {

    useEffect(() => {
        if (model) {
            console.log('model :>> ', model.data);
        }
    }, [model])


    const onChangeDatePicker = (value) => {
        if (value) {
            console.log('value :>> ', value);
        }
    }


    return model ? (
        <>
            <div className="container p-5">
                <div className="row">
                    {
                        // temp.map((e, i) => (
                        model.data.haed_highlight ? model.data.haed_highlight.map((e, i) => (
                            <div className="col-sm-12 col-md-4 text-center" key={i}>
                                <div className="row product-highlight-container">
                                    <div className="col-12">
                                        <img className="product-highlight-icon" src={`${process.env.NEXT_PUBLIC_SERVICE}/uploads/insurance/${model.data.id}/${e.img}`} alt={model.data.name} />
                                    </div>
                                    <div className="col-12 text-container pt-3">
                                        <h4 className="title">{e.title_1}</h4>
                                        <h4 className="title">{e.title_2}</h4>
                                        <p className="sub-title">{e.sub_title}</p>
                                    </div>
                                </div>
                            </div>
                        )) : null
                    }

                    <div className="section-title pt-3">
                        <h2>คำนวณเบี้ยประกัน</h2>
                    </div>

                    <div className="product-cal-premium">
                        <div className="row grid-divider">

                            <div className="col-sm-12 col-md-6">
                                <div className="col-padding">
                                    <div className="row justify-content-center mt-3">
                                        <h4 className="text-center">เลือกเพศ</h4>
                                    </div>
                                    <div className="row justify-content-center mt-2">
                                        <div className="col-5 text-center">
                                            <input id="icon-male" name="gender" type="radio" defaultValue="M" className="ng-untouched ng-pristine ng-valid" />
                                            <label className="icon-cal icon-male" htmlFor="icon-male" />
                                            <p className="display-age"> 35 ปี </p>
                                        </div>
                                        <div className="col-5 text-center">
                                            <input id="icon-female" name="gender" type="radio" defaultValue="F" className="ng-untouched ng-pristine ng-valid" />
                                            <label className="icon-cal icon-female" htmlFor="icon-female" />
                                            <p className="display-age"> 35 ปี </p>
                                        </div>
                                    </div>
                                    <div className="row  justify-content-center mt-3">
                                        <div className="col-7 m-auto">
                                            <div className="form-group -animated -focus">
                                                <DatePicker onChange={onChangeDatePicker} format="DD/MM/YYYY" placeholder="วัน เดือน ปี เกิด" style={{ width: 300 }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="col-padding ">
                                    <div className="row justify-content-center pl-15-px mt-3">
                                        <h4 className="text-center">งวดชำระเบี้ยประกันภัย</h4>
                                    </div>
                                    <div className="row justify-content-center mt-1 pl-15-px">

                                        <div className="col-6 col-md-6 p-2">
                                            <button className="btn btn-lg btn-block btn-mode-payment-select"> รายเดือน </button>
                                        </div>

                                        <div className="col-6 col-md-6 p-2">
                                            <button className="btn btn-lg btn-block btn-mode-payment"> ราย 3 เดือน </button>
                                        </div>

                                        <div className="col-6 col-md-6 p-2">
                                            <button className="btn btn-lg btn-block btn-mode-payment"> ราย 6 เดือน </button>
                                        </div>

                                        <div className="col-6 col-md-6 p-2">
                                            <button className="btn btn-lg btn-block btn-mode-payment"> รายปี </button>
                                        </div>

                                    </div>
                                    <div className="row justify-content-center pl-15-px">
                                        <div className="remark"> *กรณีชำระแบบรายเดือน งวดแรกทางบริษัททำการเก็บล่วงหน้า 2 เดือน
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    ) : null
}

export default ProductInsurance
