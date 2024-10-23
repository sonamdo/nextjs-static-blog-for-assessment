import fs from 'fs';
import BlogContent from "./BlogContent";
import matter from 'gray-matter';

export default function Home() {

  const postFileNames = fs.readdirSync('./posts');
  const allPostFiles = postFileNames.map((fileName) => {

    const filePath = `posts/${fileName}`
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      fileName,
      title: data.title,
      date:data.date,
      content
    };
  })
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl">NextJS Blog for Assessment</h1>
      <BlogContent mdFiles={allPostFiles}/>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
