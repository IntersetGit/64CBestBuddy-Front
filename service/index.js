import Axios from 'axios';

export const GetMasterInsuranceService = async () => {
    return await Axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/masterData/GetMasterInsurance`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};


export default {
    GetMasterInsuranceService
}