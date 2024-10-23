import React from "react";
import Markdown from 'react-markdown'


interface mdFile {
    title: string;
    date: string;
    content: string;
}

interface BlogContentProps {
    mdFiles: mdFile[]
}

const BlogContent = ({ mdFiles }: BlogContentProps) => {
    return(
        <div>
            {mdFiles.map((mdFile) => (
                <div key={mdFile.title} className="p-2">
                    <h2 className="text-xl">Title: {mdFile.title}</h2>
                    <p>Date: {mdFile.date}</p>
                    <Markdown>{mdFile.content}</Markdown>
                </div>
            ))}
        </div>
    )
}

export default BlogContent