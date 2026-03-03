import {baseUrl} from '../config/baseUrl';

export async function getPageWidgets(page) {
    const res = await fetch(`${baseUrl}/cms?page=${page}`, {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed to fetch CMS Page data");
    }
    return res.json();
}
