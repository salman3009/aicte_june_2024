
import {useParams} from 'react-router-dom';


function Dashboard(){

    const {id,stage}= useParams();
   
    return (<div>
        <h1>Dashboard component</h1>
        <h1>{id}</h1>
        <h1>{stage}</h1>
    </div>)
}

export default Dashboard;
