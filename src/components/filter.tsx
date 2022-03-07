import styled from "styled-components";
import { Checkbox, FilterType } from "../types";

//styled-components
const FilterContainer = styled.div`
    margin-bottom: 56px;
    color: #192024;

    h3 {
        margin-top: 73px;
        font-size: 16px;
        font-weight: bold;
    }
`;
const Checkboxes = styled.div`
    display: flex;
    margin-top: 23px;

    label {
        display: flex;
        align-items: center;

        input {
            width: 26px;
            height: 26px;
            position: absolute;
            top: -5px;
            right: -5px;
        }

        p {
            font-size: 14px;
            margin: 0 24px 0 10px;
        }
    }
`;

const InputWraper = styled.div`
    width: 20px;
    height: 20px;
    position: relative;

    border-radius: 5px;
    border: 1px solid #cdd1e4;
    overflow: hidden;
`;

//Components
const Filter = ({ alliances, handleChange }: FilterType) => {
    return (
        <FilterContainer>
            <h3>Filter by Alliances</h3>
            <Checkboxes>
                {alliances.map((e: Checkbox, index: number) => {
                    return (
                        <label key={index}>
                            <InputWraper>
                                <input
                                    type="checkbox"
                                    value={e.alliance}
                                    label={e.alliance}
                                    onChange={handleChange}
                                />
                            </InputWraper>
                            <p>{e.name}</p>
                        </label>
                    );
                })}
            </Checkboxes>
        </FilterContainer>
    );
};

export default Filter;
