"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const shorten = () => {
    const [url, setUrl] = useState("");
    const [shorturl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setUrl("")
                setShortUrl("")
                console.log(result)
                alert(result.message)

            })
            .catch((error) => console.error(error));
    }



    return (
        <div className="flex flex-col  mx-auto max-w-lg bg-blue-100 py-8 text-blue-900 my-8 font-bold p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Shorten Your URL</h1>
            <p className="mb-6">Enter the URL you want to shorten and your preferred alias.</p>
            <div>
                <input type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL here"
                    className="border p-2  rounded w-full" />


                <input type="text"
                    value={shorturl}
                    onChange={(e) => setShortUrl(e.target.value)}
                    placeholder="Enter your preferred alias"
                    className="border p-2 rounded w-full mt-2" />
                <button onClick={generate} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Shorten URL</button>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link>
            </code></>}
        </div>
    )
}

export default shorten