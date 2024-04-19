import Axios from "axios";
import React from "react";

function App() {
    // number, title, user.login, comments, created_at
    const [data, setData] = React.useState([]);

    const onClick = () => {
        setData([]);

        Axios
            .get("https://api.github.com/repos/angular/angular-cli/issues?sort=comments-desc")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++){
                    let newData = {};
                    newData.id = i;
                    newData.number = response.data[i].number;
                    newData.title  = response.data[i].title;
                    newData.login = response.data[i].user.login;
                    newData.comments = response.data[i].comments;
                    newData.created_at = response.data[i].created_at;

                    setData(old => [...old, newData]);
                }

                console.log(JSON.stringify(data));
            });
    };

    return (
        <div>
            <h1>리스트</h1>
            <button onClick={onClick}>불러오기</button>
            {data.map((data) => {
                return <p key={JSON.stringify(data.id)}>{JSON.stringify(data)}</p>
            })}
        </div>
    );
};


export default App;
