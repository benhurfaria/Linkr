import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import styled from "styled-components";
import { searchUser, getStoredUser } from "../services/api/Api";
import { Link } from "react-router-dom";
import {UsersNames, SearchDiv} from "./style_SearchBar"
export default function SearchBar() {
    const [value, setValue] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);

    function search(e) {
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${getStoredUser().token}`
            }
        };
        if (e.target.value < 3) return
        setValue(e.target.value);
        searchUser(requestConfig, e.target.value)
            .then(res => setSearchedUsers(res.data.users))
            .catch(err => console.error())
    }

    function showUsers(value, searchedUsers) {
        if (!value.length) {

            return
        }
        if (searchedUsers.length === 0 && value.length >= 3) {
            return <UsersNames>User not found</UsersNames>
        } else {
            return searchedUsers.map(user =>
                <UsersNames>
                    <Link to={`/user/${user.id}`}>
                        <img src={user.avatar} alt="avatar" />
                        {user.username}
                    </Link>
                </UsersNames>)
        }
    }


    return (
        <SearchDiv>
            <Search
                debounceTimeout={300}
                value={value}
                forceNotifyByEnter={true}
                forceNotifyOnBlur={true}
                minLength={3}
                onChange={(e) => search(e)}
                placeholder="   Search for people and friends"
            />
            {showUsers(value, searchedUsers)}
        </SearchDiv>
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