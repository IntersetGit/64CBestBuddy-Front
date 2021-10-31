import { useEffect, useState } from "react"
import Router from 'next/router'
import { Radio, message, Card, Row, Col, Button } from 'antd';
import { DoubleLeftOutlined } from '@ant-design/icons';
import moment from 'moment'
import { GetPriceInsuranceService, MangeInsuranceOrderService } from "../../../service";
import { Encrypt } from '../../../utils/SecretCode'



const PlanInsurance = ({ model }) => {

  // console.log('model :>> ', model);

  const [modelSearch, setModelSearch] = useState({})
  const [priceModel, setPriceModel] = useState([])

  useEffect(() => {
    if (model.form.gender_id && model.form.age) {
      const initialStateModelSearch = {
        gender: model.form.gender_id,
        age: model.form.age,
        installment_id: (model.master.installment.length > 0 && model.master.installment) ? model.master.installment[0].id : "7c0244d2-eb1f-48c6-9820-1d690c891015",
        insurance_id: model.data.id
      }
      getPriceInsuranceData(initialStateModelSearch);
      setModelSearch(initialStateModelSearch);
      // console.log(`model ------------------> `, model)
    }
  }, [model.form.gender_id, model.form.age])


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
  const selectInsurance = async (item) => {
    try {
      console.log('item :>> ', item);
      const _model = {
        id: model.form.id,
        category_name: model.data.category_name,
        insurance_price_id: item.price.id,
      }
      // console.log('_model :>> ', _model);
      const token = Encrypt(_model)
      await MangeInsuranceOrderService({ token });

      Router.push({
        pathname: '/insurance/product',
        query: {
          id: model.form.id,
          page: 3
        }
      })

    } catch (error) {
      message.error('มีบางอย่างผิดพลาดผิดพลาด!');
    }
  }

  const backPage = () => {
    Router.push({
      pathname: '/insurance/product',
      query: {
        id: model.form.id,
        page: 1
      }
    })
  }

  return model ? (
    <>
      <div className="container">
        <Card title={"ผลิตภัณฑ์โดยสรุป"} type="inner">
          <div className="row">
            <div className="product-cal-premium">
              <div className="row grid-divider">

                <div className="col-sm-12 col-md-6">
                  <div className="col-padding">
                    <div className="row justify-content-center mt-3">
                      <h4 className="text-center">{modelSearch.gender == 1 ? "เพศชาย" : modelSearch.gender == 2 ? "เพศหญิง" : null}</h4>
                    </div>


                    <div className="row justify-content-center mt-2">
                      <div className="col-5 text-center">
                        <img className="img-gender" src={modelSearch.gender == 1 ? `/images/gender_active_1.png` : `/images/gender_1.png`} alt="เพศชาย" />
                        <br />
                        <Radio value={1} style={{ display: "none" }} />
                        {modelSearch.gender == 1 ? <h3 className="display-age"> {modelSearch.age} ปี </h3> : null}
                      </div>
                      <div className="col-5 text-center">
                        <img className="img-gender" src={modelSearch.gender == 2 ? `/images/gender_active_2.png` : `/images/gender_2.png`} alt="เพศหญิง" />
                        <Radio value={2} style={{ display: "none" }} />
                        {modelSearch.gender == 2 ? <h3 className="display-age"> {modelSearch.age} ปี </h3> : null}
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
              <span><b> {model.data.count ?? 0} คนสนใจประกันนี้</b></span>
            </div>
          </div>
        </Card>
      </div>


      {/* table */}
      <div className="container pt-4">
        <Card title={"ตารางความคุ้มครอง"} type="inner">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th className="text-center" style={{ minWidth: 250 }}>ตารางความคุ้มครอง</th>
                  {(priceModel) ? priceModel.map((e) =>
                    <th className="text-center" key={e.id} style={{ minWidth: 120 }}>
                      {e.name} <br />
                      {(e.price.price).toLocaleString("en")}
                    </th>) : null}
                </tr>
              </thead>
              <tbody>
                {(model.table.data) ? model.table.data.map(e => (
                  <tr key={e.id}>
                    <td dangerouslySetInnerHTML={{ __html: e.details }} />
                    {e.match.map((x, i) => <td className="text-center" key={i}>{x.value}</td>)}
                  </tr>
                )) : null}
                <tr>
                  <td />
                  {(priceModel) ? priceModel.map((e, i) =>
                    <td className="text-center" key={i}>
                      <button className="btn btn-sm btn-danger" onClick={() => selectInsurance(e)} disabled={!e.price.price || e.price.price == "-"} >เลือกแผนนี้</button>
                    </td>
                  ) : null}

                </tr>
              </tbody>


            </table>

          </div>
        </Card>
      </div>

      <div className="pt-4">
        <Row>
          <Col span={12} order={1} style={{ textAlign: "start" }}>
            <Button shape="round" onClick={backPage}><DoubleLeftOutlined /> <span>ก่อนหน้า</span> </Button>
          </Col>
          <Col span={12} order={2} style={{ textAlign: "end" }} />
        </Row>
      </div>

    </>
  ) : null
}

export default PlanInsurance
