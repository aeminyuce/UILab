interface SVGLoaderProps {
    src: string,
    type?: 'path',
}

export default function SVGLoader({src, type}:SVGLoaderProps) { // get svg path

    const from = src.indexOf("d='") + 3;

    const cut = src.indexOf("'/%");
    const to = src.length - (src.length - cut);

    const path = src.substring(from, to);
    let newPath:string;

    if (type) {
        newPath = path;

    } else {
        newPath = '<path d="' + path + '" />';
    }

    return newPath;

}