import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 20px;

    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = () => {
    return  (
        <Header>
            <h1>Egor Efremov</h1>
            <h2>5 posts, liked 0</h2>
        </Header>
    )
}

export default AppHeader;