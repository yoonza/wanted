import React from "react";
import {useNavigate, useParams } from "react-router-dom";

const Cat = (props) => {

const navigate = useNavigate();
    return (
        <div>
            고양이 화면이에요.

            <Link to='/Cat'>고양이 화면으로 가기</Link>
        </div>
    )
}

export default Cat;