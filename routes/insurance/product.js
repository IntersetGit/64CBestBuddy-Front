import { useEffect, useState } from "react"
import { DatePicker, Radio, Modal, message } from 'antd';
import moment from 'moment'
import { GetPriceInsuranceService } from "../../service";

const ProductInsurance = ({ model }) => {

    const [modelSearch, setModelSearch] = useState({})
    const [priceModel, setPriceModel] = useState([])

    useEffect(() => {
        const initialStateModelSearch = {
            gender: 1,
            birthday: moment(calDateYear(model.data.age_start)),
            age: model.data.age_start,
            installment_id: "7c0244d2-eb1f-48c6-9820-1d690c891015",
            insurance_id: model.data.id
        }
        getPriceInsuranceData(initialStateModelSearch);
        setModelSearch(initialStateModelSearch)
        console.log(`model ------------------>`, model)
    }, [])

    const onChangeDatePicker = async (value) => {
        if (value) {
            const age = calAge(value._d)

            if (age < model.data.age_start || age > model.data.age_end) {
                Modal.warning({
                    title: 'แผนประกันแนะนำ',
                    content: `แผนประกันนี้คุ้มครองช่วงอายุแรกเข้า ${model.data.age_start} - ${model.data.age_end} ปี `,
                });
            } else {
                const _model = { ...modelSearch, age, birthday: value };
                setModelSearch(_model);
                await getPriceInsuranceData(_model);
            }
        }
    }

    /* หาปี */
    const calDateYear = (age) => {
        const year = new Date().getFullYear() - age
        return `${year}-01-01`
    }

    /* หาอายุ */
    const calAge = (date) => {
        return date ? moment().diff(date, 'years') : null;
    }

    /* เลือก Gender */
    const onChangeGender = async (value) => {
        // console.log(`value`, value)
        const _model = { ...modelSearch, gender: value };
        setModelSearch(_model);
        await getPriceInsuranceData(_model);
    }

    /* เลือก งวดชำระเบี้ยประกันภัย */
    const clickButtonInstallment = async (value) => {
        // console.log(`value`, value)
        const _model = { ...modelSearch, installment_id: value };
        setModelSearch(_model);
        await getPriceInsuranceData(_model);
    }

    /* ค้นหาราคา ประกัน */
    const getPriceInsuranceData = async (search) => {
        try {
            const { data } = await GetPriceInsuranceService(search);
            setPriceModel(data.items)
        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    /* เลือกแผนประกัน */
    const selectInsurance = (item) => {
        try {
            console.log('item :>> ', item);
        } catch (error) {

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
                                    <Radio.Group onChange={(e) => setModelSearch({ ...modelSearch, gender: e.target.value })} value={modelSearch.gender}>
                                        <div className="row justify-content-center mt-2">
                                            <div className="col-5 text-center">
                                                <img className="img-gender" src={modelSearch.gender == 1 ? `/images/gender_active_1.png` : `/images/gender_1.png`} onClick={() => onChangeGender(1)} alt="เพศชาย" />
                                                <br />
                                                <Radio value={1} style={{ display: "none" }} />
                                                {modelSearch.gender == 1 ? <h3 className="display-age"> {modelSearch.age} ปี </h3> : null}
                                            </div>
                                            <div className="col-5 text-center">
                                                <img className="img-gender" src={modelSearch.gender == 2 ? `/images/gender_active_2.png` : `/images/gender_2.png`} onClick={() => onChangeGender(2)} alt="เพศหญิง" />
                                                <Radio value={2} style={{ display: "none" }} />
                                                {modelSearch.gender == 2 ? <h3 className="display-age"> {modelSearch.age} ปี </h3> : null}
                                            </div>
                                        </div>
                                    </Radio.Group>
                                    <div className="row justify-content-center mt-3">
                                        <div className="col-7 m-auto">
                                            <div className="form-group -animated -focus">
                                                <DatePicker onChange={onChangeDatePicker} format="DD/MM/YYYY" value={modelSearch.birthday} placeholder="วัน เดือน ปี เกิด" style={{ width: "100%" }} />
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
                                        {model.master.installment ? model.master.installment.map(e =>
                                            <div className="col-6 col-md-6 p-2" key={e.id}>
                                                <button className={`btn btn-lg btn-block ${e.id == modelSearch.installment_id ? 'btn-mode-payment-select' : "btn-mode-payment"} `} onClick={() => clickButtonInstallment(e.id)} > {e.name} </button>
                                            </div>
                                        ) : null}
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
                <div className="footer-installment">
                    <div className="view-footer-installment">
                        <img src="/images/Icon-1620619806.png" style={{ height: '15px !important' }} />
                        <span>ฺ<b> {model.data.count ?? 0} คนสนใจประกันนี้</b></span>
                    </div>
                </div>
            </div>


            {/* table */}
            <div className="container p-5">
                <div className="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th className="text-center" width={"40%"}>ตารางความคุ้มครอง</th>
                                {(priceModel) ? priceModel.map((e) =>
                                    <th className="text-center" key={e.id}>
                                        {e.name} <br />
                                        {(e.price).toLocaleString("en")}
                                    </th>) : null}
                            </tr>
                        </thead>
                        <tbody>
                            {(model.table.data) ? model.table.data.map(e => (
                                <tr kry={e.id} width={"20%"}>
                                    <td dangerouslySetInnerHTML={{ __html: e.details }} />
                                    {e.match.map(x => <td className="text-center">{x.value}</td>)}
                                </tr>
                            )) : null}
                            <tr width={"20%"}>
                            <td />
                            {(priceModel) ? priceModel.map((e) =>
                                <td className="text-center">
                                    <a className="btn btn-sm btn-danger" onClick={() => selectInsurance(e)} >เลือกแผนนี้</a>
                                </td>
                            ) : null}

                            </tr>
                        </tbody>


                    </table>

            </div>
        </div>

        </>
    ) : null
}

export default ProductInsurance
