import React, { useState, useContext } from "react";
import { IoIosArrowDown /*, IoIosArrowUp*/ } from "react-icons/io";

import LoggedUser from "../services/contexts/LoggedUser.js";

import PostsList from "./PostsList.js";


import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts, TrendingWords } from "./Timeline_style.js";
import oldManMeme from "../assets/images/oldman_meme.png";


export default function Timeline() {



    return (
        <>
            <TimelineHeader>
                <h1>linkr</h1>

                <DropdownMenu>
                    <IoIosArrowDown />
                    <UserAvatar src={oldManMeme} />
                </DropdownMenu>
            </TimelineHeader>

            <MainContainer>
                <ContainerHeader>
                    <h1>timeline</h1>
                </ContainerHeader>

                <ContainerPosts>
                    
                    <PostsList />

                    <TrendingWords>
                        <h2> trending </h2>
                        <ul>
                            <li># hashtag 1</li>
                            <li># hashtag 2</li>
                            <li># hashtag 3</li>
                            <li># hashtag 4</li>
                        </ul>
                    </TrendingWords>
                </ContainerPosts>

            </MainContainer>
        </>
    );
}