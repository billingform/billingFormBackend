export class FormatTool {
    removeFirstSlash = (url: string) => url.replace('/', '')
    constructor() { }
}
export const formatTool = new FormatTool();

