import React, { ChangeEvent, useEffect, useState } from "react";

import styled from "styled-components";
import fetchJsonp from "fetch-jsonp";

import Header from "./components/header";
import Tiles from "./components/tiles";
import { Checkbox } from "./types";

//styled-components
const LoadingText = styled.p`
    position: absolute;
    margin-left: 50%;
    transform: translate(-50%);
    font-size: 44px;
    font-weight: bold;
`;

//Components
function App() {
    //Object for Alliances, easy to add new one
    const alliances: Array<Checkbox> = [
        { alliance: "OW", name: "Oneworld" },
        { alliance: "ST", name: "Sky Team" },
        { alliance: "SA", name: "Star Alliance" },
    ];

    const [Loading, setLoading] = useState<boolean>(true);
    const [airlinesData, setAirlinesData] = useState<Array<object>>([]);
    const [filterByAliance, setFilterByAliance] = useState<
        Array<object | string>
    >([]);

    //Adding Filters

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setFilterByAliance([...filterByAliance, e.target.value]);
        } else {
            setFilterByAliance(
                filterByAliance.filter((id: any) => id !== e.target.value)
            );
        }
    };

    //Fetching Data from API
    useEffect(() => {
        fetchJsonp(
            "https://kayak.com/h/mobileapis/directory/airlines/homework",
            {
                jsonpCallback: "jsonp",
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (filterByAliance.length === 0) {
                    setAirlinesData(data);
                } else {
                    setAirlinesData(
                        data.filter((ally: any) =>
                            filterByAliance.some((category: any) =>
                                [ally.alliance].flat().includes(category)
                            )
                        )
                    );
                }
            })
            .then(() => setLoading(false));
    }, [filterByAliance]);

    if (Loading == true) {
        return (
            <div>
                <Header alliances={alliances} handleChange={handleChange} />
                <LoadingText>Loading...</LoadingText>
            </div>
        );
    }

    return (
        <div>
            <Header alliances={alliances} handleChange={handleChange} />
            <Tiles data={airlinesData} />
        </div>
    );
}

export default App;
