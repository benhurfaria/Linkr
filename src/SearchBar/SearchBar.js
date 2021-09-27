//import { Form, Input, IMG } from "./style_SearchBar";
//import search from "../assets/images/search.png"
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import styled from "styled-components";

export default function SearchBar() {
    const [value, setValue] = useState("");
    
    return (
        <>
            {/* <Form>
                <Input type="search" placeholder="  Search for people and friends"></Input>
                <IMG src={search} />
            </Form> */}

            <Search
                debounceTimeout={ 500}
                value={value}
                forceNotifyByEnter={true}
                forceNotifyOnBlur={true}
                minLength={3}
                onChange={(e) => setValue(e.target.value)}
                placeholder="   Search for people and friends"
               />
        </>
    );
}

const Search = styled(DebounceInput)`
    width: 25%;
    height: 35px;
    border: none;
    border-radius: 6px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    ::placeholder{
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        color: #c6c6c6;
    }
`