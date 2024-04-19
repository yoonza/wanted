import { useDispatch } from "react-redux";
import { addCat } from "./redux/modules/cat";
import { addDog } from "./redux/slices/dog";

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div> 
            <h1>Home</h1>
            <button onClick={() => {
                dispatch(addCat("고양이"));
            }}>고양이 추가하기</button>
            <button onClick={() => {
                dispatch(addDog("강아지"));
            }}>강아지 추가하기</button>
            </div>
    );
}
 
export default Home