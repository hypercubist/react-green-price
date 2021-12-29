import moment from "moment";
import PRODUCT_LIST from "./productCodes";

const BASE_URL =  `/service/price/xml.do?action=periodProductList`;
const CERT_KEY = "72922f90-303a-423b-a20d-0c35bb2249d7";
const CERT_ID = "2255";
const RETURN_TYPE = "json";
const today = moment();
let END_DAY = today.format('YYYY-MM-DD');
let START_DAY = today.subtract(14,'days').format('YYYY-MM-DD');

export async function fetchItem(categoryCode:string, itemCode:string, kindCode:string) {
    const product = PRODUCT_LIST.find((data)=>{
        return data.category_Code===categoryCode;
    })?.list.find((data)=>{
        return data.item_code===Number(itemCode) && data.kind_code===Number(kindCode);
    })
    
    const PRODUCT_RANK_CODE = (product?.retail_grade ?? product?.organic_grade ?? product?.wholesale_grade)?.split(",")[0];
    const PRODUCT_CLASS_CODE = product?.retail_grade!=null ? "01" : (product?.organic_grade!=null ? "02" : "02");
    
    if(Number(kindCode)<10){
        kindCode = "0"+kindCode;
    }


    return await(await fetch(`${BASE_URL}&p_cert_key=${CERT_KEY}&p_cert_id=${CERT_ID}&p_returntype=${RETURN_TYPE}&p_startday=${START_DAY}&p_endday=${END_DAY}&p_productclscode=${PRODUCT_CLASS_CODE}&p_itemcategorycode=${categoryCode}&p_itemcode=${itemCode}&p_kindcode=${kindCode}&p_productrankcode=${PRODUCT_RANK_CODE}`)).json();
}