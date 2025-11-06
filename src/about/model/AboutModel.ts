import fs from "node:fs";
import path from "node:path";

export default class AboutModel {
    private readonly filePath: string;

    constructor() {
        this.filePath = path.join(__dirname, "../../../database/about.json");
    }

    public getAboutData() {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }
}
