import { useEffect } from "react"

const ProductInsurance = ({ model }) => {

    useEffect(() => {
        if (model) {
            console.log('model :>> ', model);
        }
    }, [model])

    return model ? (
        <div>
            Hello : {model ? model.sds : null}
        </div>
    ) : null
}

export default ProductInsurance
