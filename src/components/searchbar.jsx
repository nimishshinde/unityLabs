// import React,{ useState, useEffect } from 'react';
// import axios from 'axios';

// function SearchBar() {
//     const [search, setSearch] = useState("");
    
//     useEffect(
//         function () {
//             axios
//                 .get(`http://hn.algolia.com/api/v1/search_by_date?query=${search}`)
//                 .then((res) => {
//                     setSearch(res.data);
//                     console.log(res.data);
//                 });
//         },
//         [search]
//     );

//   return (
//     <div>
<div className="flex justify-center">
<input
    type="text"
    value={search}
    onChange={(e) => {
        setSearch(e.target.value)

    }
    }
    placeholder="Search"
    className=" m-4 w-2/5 border border-gray-400 rounded text-center p-1 m-2"
/>
</div>
//     </div>
//   )
// }

// export default SearchBar