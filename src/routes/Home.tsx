import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.main`
background-color: ${props => props.theme.bgColor};
    max-width: 480px;
    padding: 10px;
    margin: 0 auto;
    `;

const Navigation = styled.header`
    width: 100%;
    height: 30px;
    border: 1px solid;
    border-radius: 5px ;
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
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.accentColor2};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    font-size: 3rem;
    opacity: 0.7;
    
`;

function Home(){
    return (
    <div>
        <Container>
            <Navigation>NAV</Navigation>
            <Menu>
                <Button>
                    <ButtonIcon>
                        
                        <i className="fas fa-bread-slice"></i>
                    </ButtonIcon>
                </Button>
                <Button>
                    <ButtonIcon>
                        <i className="fas fa-carrot"></i>
                    </ButtonIcon>
                </Button>
                <Button>
                    <ButtonIcon>
                        <i className="fas fa-cookie"></i>
                    </ButtonIcon>
                </Button>
                <Button>
                    <ButtonIcon>
                        <i className="fas fa-apple-alt"></i>
                    </ButtonIcon>
                </Button>
                <Button>
                    <ButtonIcon>
                        <i className="fas fa-egg"></i>
                    </ButtonIcon>
                </Button>
                <Button>
                    <ButtonIcon>
                        <i className="fas fa-fish"></i>
                    </ButtonIcon>
                </Button>
            </Menu>
        </Container>
    </div>
    )
}

export default Home;