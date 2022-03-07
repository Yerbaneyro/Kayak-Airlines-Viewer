import styled from "styled-components";
import { ReactComponent as KayakLogo } from "../img/Logo.svg";
import { FilterType } from "../types";
import Filter from "./filter";

//styled-components
const HeaderContainer = styled.div`
    width: 100%;
`;
const UpperHeader = styled.div`
    border-bottom: 1px solid #dce0f5;
`;
const Logo = styled.div`
    margin: 19px 16px;
`;
const PageTitle = styled.h2`
    font-size: 44px;
    font-weight: 900;
`;
const LowerHeader = styled.div`
    margin: 67px 94px 56px;
`;
//Components
const Header = ({ alliances, handleChange }: FilterType) => {
    return (
        <HeaderContainer>
            <UpperHeader>
                <Logo>
                    <KayakLogo />
                </Logo>
            </UpperHeader>
            <LowerHeader>
                <PageTitle>Airlines</PageTitle>
                <Filter alliances={alliances} handleChange={handleChange} />
            </LowerHeader>
        </HeaderContainer>
    );
};

export default Header;
