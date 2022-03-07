import styled from "styled-components";

//styled-components
const TilesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #192024;
`;

const AirlineInfo = styled.div`
    display: none;
    width: 150px;
    font-size: 14px;
`;

const Name = styled.p`
    font-weight: bold;
    font-size: 16px;
`;

const NameHover = styled.div`
    display: none;
    font-weight: bold;
`;

const Phone = styled.p`
    font-weight: normal;
    font-size: 14px;
`;

const SingleTile = styled.div`
    width: 300px;
    height: 240px;
    margin: 8px;
    border-radius: 8px;

    box-shadow: 0px -1px 4px 0 rgba(25, 32, 36, 0.1),
        0 3px 6px 0 rgba(25, 32, 36, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        border: 1px solid #363f45;

        ${AirlineInfo} {
            display: block;
        }
        ${NameHover} {
            display: block;
        }
        ${Name} {
            display: none;
        }
    }
`;
const AirlineWraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
        margin-right: 18px;
    }

    a {
        color: #5a6872;
        text-decoration: none;
    }
`;

//Components
const Tiles = ({ data }: any) => {
    function AllianceName(name: string) {
        if (name === "OW") {
            return "OpenWord";
        }
        if (name === "ST") {
            return "Sky Team";
        }
        if (name === "SA") {
            return "Star Alliance";
        } else {
            return null;
        }
    }
    return (
        <TilesContainer>
            {data.map((e: any, index: number) => {
                return (
                    <SingleTile key={index}>
                        <AirlineWraper>
                            <img
                                src={`https://www.kayak.com${e.logoURL}`}
                                alt={`${e.name} Logo`}
                            />
                            <Name>{e.name}</Name>
                            <AirlineInfo>
                                <NameHover>{e.name}</NameHover>
                                <p>{AllianceName(e.alliance)}</p>
                                <Phone>{e.phone}</Phone>
                                <a href={e.site} target="_blank">
                                    {e.site}
                                </a>
                            </AirlineInfo>
                        </AirlineWraper>
                    </SingleTile>
                );
            })}
        </TilesContainer>
    );
};

export default Tiles;
