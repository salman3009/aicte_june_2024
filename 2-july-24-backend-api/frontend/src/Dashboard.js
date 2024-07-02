import axios from 'axios';
import { useEffect, useState } from 'react';
function Dashboard() {

    const [getList, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/musiclist').then((result) => {
            console.log(result.data);
            setList(result.data);
        })
    }, [])

    return (<div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {getList.map((data, index) => {
                    return (<tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.title}</td>
                        <td><img src={data.image} /></td>
                        <td>
                            <audio controls>
                                <source src={data.audio} type="audio/mpeg" />
                            </audio>
                        </td>
                    </tr>)
                })

                }



            </tbody>
        </table>
    </div>)
}

export default Dashboard;
