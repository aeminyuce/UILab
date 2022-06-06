export default function SVGLoader(src) { // get svg path

    const from = src.indexOf("d='") + 3;

    const cut = src.indexOf("'/%");
    const to = src.length - (src.length - cut);

    const path = src.substring(from, to);

    const newPath = '<path d="' + path + '" />';
    return newPath;

}