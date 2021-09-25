import { Form, Input, IMG } from "./style_SearchBar";


export default function SearchBar() {
    return (
        <>
            <Form>
                <Input type="search" placeholder="  Search for people and friends"></Input>
                <IMG src="src/assets/images/search.png" />
            </Form>
        </>
    );
}


