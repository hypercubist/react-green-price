import styled from "styled-components";
import { Link } from "react-router-dom";
import PRODUCT_LIST from "../productCodes";

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  max-width: 340px;
  padding: 30px;
  margin: 0 auto;
`;

const Navigation = styled.header`
  width: 100%;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;

const ButtonIcon = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
  font-size: 3rem;
`;

const ButtonText = styled.span`
  font-size: 1.2rem;
  margin: 10px 0;
`;

function Home() {
  return (
    <div>
      <Container>
        <Navigation>NAV</Navigation>
        <Menu>
          <Button>
            <Link
              to={{
                pathname: `/${PRODUCT_LIST[0].category_Code}`,
                state: {name: PRODUCT_LIST[0].name}
              }}
            >
              <ButtonIcon>
                <i className="fas fa-bread-slice"></i>
                <ButtonText>{PRODUCT_LIST[0].name}</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/${PRODUCT_LIST[1].category_Code}`,
                state: {name: PRODUCT_LIST[1].name}
              }}
            >
              <ButtonIcon>
                <i className="fas fa-carrot"></i>
                <ButtonText>{PRODUCT_LIST[1].name}</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/${PRODUCT_LIST[2].category_Code}`,
                state: {name: PRODUCT_LIST[2].name}
              }}
            >
              <ButtonIcon>
                <i className="fas fa-cookie"></i>
                <ButtonText>{PRODUCT_LIST[2].name}</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/${PRODUCT_LIST[3].category_Code}`,
                state: {name: PRODUCT_LIST[3].name}
              }}
            >
              <ButtonIcon>
                <i className="fas fa-apple-alt"></i>
                <ButtonText>{PRODUCT_LIST[3].name}</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/${PRODUCT_LIST[4].category_Code}`,
                state: {name: PRODUCT_LIST[4].name}
              }}
            >
              <ButtonIcon>
                <i className="fas fa-egg"></i>
                <ButtonText>{PRODUCT_LIST[4].name}</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/${PRODUCT_LIST[5].category_Code}`,
                state: {name: PRODUCT_LIST[5].name}
              }}
            >
              <ButtonIcon>
                <i className="fas fa-fish"></i>
                <ButtonText>{PRODUCT_LIST[5].name}</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
        </Menu>
      </Container>
    </div>
  );
}

export default Home;

