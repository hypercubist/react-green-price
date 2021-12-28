import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchItem } from "../api";
import ApexChart from "react-apexcharts";

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  max-width: 340px;
  padding: 10px;
  margin: 0 auto;
`;

const Ul = styled.ul``;

const Li = styled.li``;

interface RouteParams {
  categoryCode: string;
  itemCode: string;
  kindCode: string;
}

interface ItemData {
  condition: Condition[];
  data: Data;
}

interface Condition {
  p_startday: Date;
  p_endday: Date;
  p_itemcategorycode: string;
  p_itemcode: string;
  p_kindcode: string;
  p_productrankcode: string;
  p_countycode: string;
  p_convert_kg_yn: string;
  p_key: string;
  p_id: string;
  p_returntype: string;
}

interface Data {
  error_code: string;
  item: ItemObj[];
}

interface ItemObj {
  itemname: string;
  kindname: string;
  countyname: string;
  marketname: string;
  yyyy: string;
  regday: string;
  price: string;
}

function Item() {
  const { categoryCode, itemCode, kindCode } = useParams<RouteParams>();
  const { isLoading, data: priceData } = useQuery<ItemData>(
    [itemCode, kindCode],
    () => fetchItem(categoryCode, itemCode, kindCode)
  );

  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: priceData?.data.item
                .filter((priceObj) => priceObj.countyname === "평균")
                .map((priceObj) => Number(priceObj.price.replace(",", ""))),
            },
          ]}
          options={{}}
        />
      )}
    </Container>
  );
}

export default Item;
