import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchItem } from "../api";

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  max-width: 340px;
  padding: 10px;
  margin: 0 auto;
`;

interface RouteParams{
    categoryCode: string;
    itemCode:string;
    kindCode:string;
}

interface ItemData {
    condition: Condition[];
    data:      Data;
}

interface Condition {
    p_startday:         Date;
    p_endday:           Date;
    p_itemcategorycode: string;
    p_itemcode:         string;
    p_kindcode:         string;
    p_productrankcode:  string;
    p_countycode:       string;
    p_convert_kg_yn:    string;
    p_key:              string;
    p_id:               string;
    p_returntype:       string;
}

interface Data {
    error_code: string;
    item:       Item[];
}

interface Item {
    itemname:   string;
    kindname:   string;
    countyname: string;
    marketname: string;
    yyyy:       string;
    regday:     string;
    price:      string;
}


function Item(){
    const {categoryCode,itemCode,kindCode} = useParams<RouteParams>();
    const {isLoading, data} = useQuery<ItemData>([itemCode, kindCode],()=>fetchItem(categoryCode, itemCode, kindCode))
    console.log(data);
    return (
        <Container>
            {isLoading ? (<h1>Loading..</h1>
            ) : (
                <div>
                    <h3>{data?.data.item[0].price}</h3>
                    <h3>{data?.data.item[0].itemname}</h3>
                </div>
            )
            }
        </Container>
        )
}

export default Item;