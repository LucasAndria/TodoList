import { useState } from "react"

function Header({ headers, trie, trieLigne }) {

    const formatedHeaders = headers?.map((header, index) => (
        <th
            key={index}
            onClick={() => trieLigne(
                prev => prev.header === header.label ? { header: prev.header, croissant: !prev.croissant } : { header: header.label, croissant: true }
            )}
            onMouseOver={() => console.log(header.survole)}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
        >
            {`${header.label} ${header.unite ? "(" + header.unite + ")" : ""} ${trie.header === header.label ? (trie.croissant ? "▼" : "▲") : ""}`}
        </th >
    ))

    return (
        <tr>
            {formatedHeaders}
        </tr>
    )
}

export default Header
