import React from "react";
import { IoIosArrowDown /*, IoIosArrowUp*/ } from "react-icons/io";



import NewPost from "./NewPost.js";

import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts, PostsList, Posts, TrendingWords } from "./style_Timeline.js";
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
                    <PostsList>
                        <NewPost />
                        
                        <Posts>00</Posts>
                        
                        <Posts>01</Posts>

                        <Posts>02</Posts>
                    </PostsList>

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