/* import { Button } from "bootstrap";
import React from "react";
import { useParams } from "react-router-dom";

const [data, setData] = useState([]);

useEffect(() => {
    const GetData = async () => {
        const result = await axios('http://localhost:3001/postagem');
        setData(result.data);
    };

    GetData();

}, []);

const GenerateIdCardGrops = () => {
    const { id } = useParms();
    return (
        <Button id={id ? toString(id) : null}></Button>
    )
}
export default GenerateIdCardGrops; */