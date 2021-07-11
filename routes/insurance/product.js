import { useEffect } from "react"

const ProductInsurance = ({ model }) => {

    useEffect(() => {
        if (model) {
            console.log('model :>> ', model.data);
        }
    }, [model])


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
                                        <img className="product-highlight-icon" src={`${process.env.NEXT_PUBLIC_SERVICE}/uploads/insurance/${model.data.id}/${e.img}`} />
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


                </div>
            </div>

        </>
    ) : null
}

export default ProductInsurance
