import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  max-width: 340px;
  padding: 10px;
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
  padding: 20px;
`;

const ButtonIcon = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 120px;
  height: 120px;
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
                pathname: `/100`,
              }}
            >
              <ButtonIcon>
                <i className="fas fa-bread-slice"></i>
                <ButtonText>식량작물</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/200`,
              }}
            >
              <ButtonIcon>
                <i className="fas fa-carrot"></i>
                <ButtonText>채소류</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/300`,
              }}
            >
              <ButtonIcon>
                <i className="fas fa-cookie"></i>
                <ButtonText>특용작물</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/400`,
              }}
            >
              <ButtonIcon>
                <i className="fas fa-apple-alt"></i>
                <ButtonText>과일류</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/500`,
              }}
            >
              <ButtonIcon>
                <i className="fas fa-egg"></i>
                <ButtonText>축산물</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/600`,
              }}
            >
              <ButtonIcon>
                <i className="fas fa-fish"></i>
                <ButtonText>수산물</ButtonText>
              </ButtonIcon>
            </Link>
          </Button>
        </Menu>
      </Container>
    </div>
  );
}

export default Home;

