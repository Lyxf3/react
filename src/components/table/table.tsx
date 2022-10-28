import { fetchItems, DataItem } from "../../app/fetch";
import {Key, useEffect, useRef} from "react";
import {useRequest} from "../../app/hooks";


export const Table = () => {
    const [data, loading, error] = useRequest(fetchItems)
    if (loading) return <h2>Loading</h2>
    if (error) return <h2>Error</h2>

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        index
                    </th>
                    <th>
                        API
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Category
                    </th>
                </tr>
            </thead>
            <tbody>
                {data && data.entries.map(({API, Description, Category}: DataItem, index: number) =>
                    <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {API}
                        </td>
                        <td>
                            {Description}
                        </td>
                        <td>
                            {Category}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

