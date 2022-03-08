import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "./pagination";
import { Link } from 'react-router-dom';

function Landing() {

    const [page, setPage] = useState(1);
    const [hdata, setHdata] = useState([]);
    const [search, setSearch] = useState("");
    function goNext() {
        setPage(page + 1);
    }

    function goPrev() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    useEffect(
        function () {
            axios
                .get(`https://hn.algolia.com/api/v1/search_by_date?page=${page}`)
                .then((res) => {
                    setHdata(res.data.hits);
                    // localStorage.setItem("Obj", res.data.hits)
                    console.log(res.data.hits);
                });
        },
        [page]
    );

    useEffect(
        function () {
            axios
                .get(`http://hn.algolia.com/api/v1/search_by_date?query=${search}`)
                .then((res) => {
                    setHdata(res.data.hits);
                    console.log(res.data.hits);
                });
        },
        [search]
    );

    function saveLocal(ObjId, storyTitle) {
        localStorage.setItem("objId", ObjId);
        if (storyTitle === null) {
            localStorage.setItem("objTitle", "No Title");
        } else {
            localStorage.setItem("objTitle", storyTitle);
        }
    }
    return (
        <div >

            <div className="flex justify-center">
                <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search"
                    className=" m-4 w-2/5 border border-gray-400 rounded text-center p-1 m-2"
                />
            </div>

            {
                hdata.length === 0 ? (
                    <div className="flex justify-center m-4">
                        <Oval heigth="80" width="80" color="grey" ariaLabel="loading" />
                    </div>
                 
                ) : (
                    <div>
                        {
                            hdata.map((hData) => (

                                <div onClick={() =>
                                    saveLocal(hData.objectID, hData.story_title)
                                }>
                                    {
                                            
                                        // hData.type === "" && 
                                        hData.story_title !== null &&
                                        <div className="flex justify-center items-center">
                                        <Link to="/story" style={{fontFamily:'Verdana'}} className="bg-stone-300 rounded-md flex flex-col bg-gray-200 w-4/5 m-2 text-center p-2 cursor-pointer">
                                        <div>{hData.story_title}</div>
                                        </Link>
                                        </div>
                                    }
                                </div>


                            ))
                        }
                    </div>
                )
            }

            <Pagination page={page} goNext={goNext} goPrev={goPrev} />
        </div>

    );
}

export default Landing;
