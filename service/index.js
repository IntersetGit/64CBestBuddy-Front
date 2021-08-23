import Axios from 'axios';

export const GetMasterInsuranceService = async (insurance_category_id) => {
    let url = `${process.env.NEXT_PUBLIC_SERVICE}/masterData/GetMasterInsurance?`
    if (insurance_category_id) url += `&insurance_category_id=${insurance_category_id}`

    return await Axios({
        method: "get",
        url,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};

export const AddInsuranceService = async (data) => {
    return await Axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/insurance/addInsurance`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
        data
    })
};

export const GetMasterAllDataService = async ({ search = null }) => {
    let url = `${process.env.NEXT_PUBLIC_SERVICE}/masterData/GetMasterAllData?`
    if (search) url += `&search=${search}`
    return await Axios({
        method: "get",
        url,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};

export const GetMasterAddressService = async ({ search = null }) => {
    let url = `${process.env.NEXT_PUBLIC_SERVICE}/masterData/GetMasterAddress?`
    if (search) url += `&search=${search}`
    return await Axios({
        method: "get",
        url,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};

export const MangeInsuranceOrderService = async (data) => {
    return await Axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/insurance/mangeInsuranceOrder`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
        data
    })
};

export const GetMasterInsuranceCategoryService = async () => {
    return await Axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/masterData/GetMasterInsuranceCategory`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};

export const GetAllInsuranceService = async (data) => {
    return await Axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/insurance/getAllInsurance`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
        data
    })
};

export const GetByIdInsuranceService = async (id) => {
    return await Axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/insurance/getByIdInsurance/${id}`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};

export const GetImagesHeaderInsuranceService = async () => {
    return await Axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/insurance/getImagesHeaderInsurance`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
    })
};

export const GetPriceInsuranceService = async (data) => {
    return await Axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/insurance/getPriceInsurance`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
        data
    })
};

export const FalconApiConfirmService = async (id , data) => {
    return await Axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVICE}/falcon/confirm/${id}`,
        config: { headers: { "Content-Type": "multipart/form-data" } },
        data
    })
};



export default {
    AddInsuranceService,
    GetMasterInsuranceService,
    GetAllInsuranceService,
    GetImagesHeaderInsuranceService,
    GetPriceInsuranceService,
    GetByIdInsuranceService,
    GetMasterAddressService,
}