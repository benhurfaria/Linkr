import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";

const GeoLocation = styled.div`
    width: 150px;
    height: 18px;
    display: flex;
    font-size: 13px;
    line-height: 16px;
    color: ${props => props.status ? '#238700' : '#949494'};
`;

const LocationPin = styled(IoLocationOutline)`
    width: 16px;
    height: 16px;
`;

export {GeoLocation, LocationPin }