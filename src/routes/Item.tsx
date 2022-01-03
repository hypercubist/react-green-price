import { useQuery } from "react-query";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { fetchItem } from "../api";
import ApexChart from "react-apexcharts";
import { IProduct, PRODUCT_LIST } from "../productCodes";

const dummyProduct: IProduct = {
  item_category_name: "데이터없음",
  item_code: 0,
  item_name: "데이터없음",
  kind_code: 0,
  kind_name: "데이터없음",
  wholesale_shipping_unit: null,
  wholesale_shipping_scale: null,
  retail_shipping_unit: null,
  retail_shipping_scale: null,
  organic_shipping_unit: null,
  organic_shipping_scale: null,
  wholesale_grade: null,
  retail_grade: null,
  organic_grade: null,
};

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

const ChartMenu = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.accentColor2};
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

const ChartContainer = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  margin-top: 3px;
`;

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
  const product =
    PRODUCT_LIST.find((data) => {
      return data.category_Code === categoryCode;
    })?.list.find((data) => {
      return (
        data.item_code === Number(itemCode) &&
        data.kind_code === Number(kindCode)
      );
    }) ?? dummyProduct; //dummy일 때 처리
  const { isLoading, data: priceData } = useQuery<ItemData>(
    [itemCode, kindCode],
    () => fetchItem(categoryCode, product)
  );
  const retailMatch = useRouteMatch(
    "/:categoryCode/:itemCode/:kindCode/retail"
  );
  const wholesaleMatch = useRouteMatch(
    "/:categoryCode/:itemCode/:kindCode/wholesale"
  );
  const organicMatch = useRouteMatch(
    "/:categoryCode/:itemCode/:kindCode/organic"
  );

  return (
    <Container>
      <Header>
        <h1>{`${product.item_name} / ${
          product.item_name === product.kind_name ? "일반" : product.kind_name
        }`}</h1>
      </Header>
      <ChartMenuContainer>
        <ChartMenu isActive={retailMatch !== null}>
          <Link
            to={{ pathname: `/${categoryCode}/${itemCode}/${kindCode}/retail` }}
          >
            소매
          </Link>
        </ChartMenu>
        <ChartMenu isActive={wholesaleMatch !== null}>
          <Link
            to={{
              pathname: `/${categoryCode}/${itemCode}/${kindCode}/wholesale`,
            }}
          >
            도매
          </Link>
        </ChartMenu>
        <ChartMenu isActive={organicMatch !== null}>
          <Link
            to={{
              pathname: `/${categoryCode}/${itemCode}/${kindCode}/organic`,
            }}
          >
            유기농
          </Link>
        </ChartMenu>
        <ChartInfo>{}</ChartInfo>
      </ChartMenuContainer>
      <ChartContainer>
        <Switch>
          <Route path={"/:categoryCode/:itemCode/:kindCode/retail"}>
            retail
          </Route>
          <Route path={"/:categoryCode/:itemCode/:kindCode/wholesale"}>
            wholesale
          </Route>
          <Route path={"/:categoryCode/:itemCode/:kindCode/organic"}>
            organic
          </Route>
        </Switch>
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
