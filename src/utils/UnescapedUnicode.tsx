export default function UnescapedUnicode(value: any) {

    let find = '';

    for (const char of value) {

        const code = char.codePointAt(0);
        if (code >= 0x80) find += `&#${code};`; else find += char;

    }

    const unescaped = find
        .replace(/&#305;&#775;/g, 'i') // ı + upper dot

        .replace(/&#304;/g, 'İ')
        .replace(/&#105;/g, 'i')

        .replace(/&#73;/g, 'I')
        .replace(/&#305;/g, 'ı')

        .replace(/&#350;/g, 'Ş')
        .replace(/&#351;/g, 'ş')

        .replace(/&#286;/g, 'Ğ')
        .replace(/&#287;/g, 'ğ')

        .replace(/&#199;/g, 'Ç')
        .replace(/&#231;/g, 'ç')

        .replace(/&#220;/g, 'Ü')
        .replace(/&#252;/g, 'ü')

        .replace(/&#214;/g, 'Ö')
        .replace(/&#246;/g, 'ö');

    return unescaped;

}