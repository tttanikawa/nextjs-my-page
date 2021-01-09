import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
import highlight from 'remark-highlight.js'
import { PostData, PostDetail } from "../interfaces/post"

const postsDirectory = path.join(process.cwd(), 'posts');

function isMarkdownFile(fileName: string): boolean {
    const s = fileName.split('.');
    return (s[s.length - 1].toLowerCase() == 'md');
}

export function getSortedPostsData(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory).filter(fileName => isMarkdownFile(fileName));
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents);
        return {
            id,
            ...(matterResult.data as { title: string, date: string })
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        }
    })
}

export async function getPostData(id: string): Promise<PostDetail> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(highlight).use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string, title: string })
    }
}