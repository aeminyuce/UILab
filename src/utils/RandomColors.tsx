export default function RandomColors(size: number) {

    // colors
    let defaultColors = [
        'hsl(199, 88%, 56%)',       // 1. blue
        'hsl(20, 100%, 66%)',       // 2. orange
        'hsl(347, 100%, 69%)',      // 3. red
        'hsl(260, 100%, 70%)',      // 4. purple
        'hsl(180, 48%, 52%)',       // 5. turquoise
        'hsl(42, 100%, 67%)',       // 6. yellow
        'hsl(226, 52.2%, 50%)',     // 7. dark blue
        'hsl(284.9, 69.9%, 70%)',   // 8. light purple
        'hsl(186.3, 70.6%, 68%)',   // 9. light turquoise
        'hsl(210.2, 86.5%, 68%)',   // 10. middle blue
    ];

    const randomColors = [];

    for (let c = 0; c < size; c++) {

        const rand = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));
        randomColors[c] = `rgb(${rand(60, 160)}, ${rand(0, 160)}, ${rand(0, 200)})`;

    }

    return [...defaultColors, ...randomColors];

}