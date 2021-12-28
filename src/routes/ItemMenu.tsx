import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import PRODUCT_LIST from "../productCodes";

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  max-width: 340px;
  padding: 10px;
  margin: 0 auto;
`;

const ItemList = styled.ul`

`;
const Item = styled.li`
`;

interface RouteParams{
    categoryCode: string;
}

function ItemMenu(){
    const {categoryCode} = useParams<RouteParams>();
    const list = (PRODUCT_LIST.find((item)=>{
        return item.category_Code === categoryCode;
    }))?.list;
    return (
        <Container>
            <ItemList>
                {list?.map((item)=>(
                    <Item key={`${item.item_code}_${item.kind_code}`}>
                        <Link
                            to={{
                                pathname: `/${categoryCode}/${item.item_code}/${item.kind_code}`
                            }}
                        >
                            {`${item.item_name} - ${item.kind_name}`}
                        </Link>
                    </Item>
                ))}
            </ItemList>
        </Container>
    )
}

export default ItemMenu;