import React from 'react'

export default function Filter(){
    const [filters,setFilters] = useState("[]");
    return (
        <div id="filter">
            <div id="filter-text">{"Filters ("+filters.length+")"}</div>
        </div>
    )
}
