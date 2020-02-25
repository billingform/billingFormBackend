export class FormatTool {
    removeFirstSlash = (url: string) => url.replace('/', '')
}
export const formatTool = new FormatTool();

