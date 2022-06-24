function Header({ headers, trie, trieLigne }) {
    const formatedHeaders = headers.map((header, index) => (
        <th
            key={index}
            onClick={() => trieLigne(
                prev => prev.header === header ? { header: prev.header, croissant: !prev.croissant } : { header: header, croissant: true }
            )}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
        >
            {`${header} ${trie.header === header ? (trie.croissant ? "<" : ">") : ""}`}
        </th>
    ))
    return (
        <tr>
            {formatedHeaders}
        </tr>
    )
}

export default Header
