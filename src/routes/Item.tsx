import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchItem } from "../api";
import ApexChart from "react-apexcharts";

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  max-width: 340px;
  padding: 30px;
  margin: 0 auto;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
`;

const ChartMenuContainer = styled.div`
    height: 4.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 20px;
    gap: 3px;
    `;

const ChartMenu = styled.div`
    background-color: ${(props) => props.theme.boxColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding-top: 3px;
`;

const ChartInfo = styled.div`
    background-color: ${(props) => props.theme.boxColor};
    grid-column: 1 /-1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
`;

const ChartContainer =styled.div`
    background-color: ${(props) => props.theme.boxColor};
    margin-top: 3px;

`;

interface RouteParams {
  categoryCode: string;
  itemCode: string;
  kindCode: string;
}

interface RouteState{
    name: string;
    kind: string;
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
  const { state } = useLocation<RouteState>();
  const { isLoading, data: priceData } = useQuery<ItemData>(
    [itemCode, kindCode],
    () => fetchItem(categoryCode, itemCode, kindCode)
  );
    // console.log(priceData?.data.error_code); 데이터가 없는 경우 에러코드가 undefined
  return (
    <Container>
        <Header>
            <h1>{`${state.name} / ${state.name===state.kind ? "일반" : state.kind}`}</h1>
        </Header>
        <ChartMenuContainer>
            <ChartMenu>소매</ChartMenu>
            <ChartMenu>도매</ChartMenu>
            <ChartMenu>유기농</ChartMenu>
            <ChartInfo>{}</ChartInfo>
        </ChartMenuContainer>
        <ChartContainer>
        </ChartContainer>

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
