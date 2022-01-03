import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { PRODUCT_LIST } from "../productCodes";

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

const ItemList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const Item = styled.li`
  background-color: ${(props) => props.theme.boxColor};
  height: 1.8rem;
  margin-top: 10px;
  border-radius: 5px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 3px 0 0 10px;
  }
`;

interface RouteParams {
  categoryCode: string;
}

interface RouteState {
  name: string;
}

function ItemMenu() {
  const { categoryCode } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const list = PRODUCT_LIST.find((item) => {
    return item.category_Code === categoryCode;
  })?.list;
  return (
    <Container>
      <Header>
        <h1>{state.name}</h1>
      </Header>
      <ItemList>
        {list?.map((item) => (
          <Item key={`${item.item_code}_${item.kind_code}`}>
            <Link
              to={{
                pathname: `/${categoryCode}/${item.item_code}/${item.kind_code}`,
              }}
            >
              {`${item.item_name} / ${
                item.item_name === item.kind_name ? "일반" : item.kind_name
              }`}
            </Link>
          </Item>
        ))}
      </ItemList>
    </Container>
  );
}

export default ItemMenu;
