import {useEffect, useRef} from "react";
import {Honk} from "next/font/google";

const memeFont = Honk({
    weight: '400'
})

type Props = {
    width: number,
    height: number,
    header: string,
    footer: string,
    src: string
};


export default function Canvas({width, height, header, footer, src}: Props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.width = width
        img.height = height
        img.onload = () => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, width, height);
            context.font = `28px ${memeFont.style.fontFamily}`;
            context.textBaseline = 'middle';
            context.textAlign = 'center';
            addTextToCanvas(header, width / 2, height*(0.1));
            addTextToCanvas(footer, width / 2, height*(0.85));

            function addTextToCanvas(text:string, x:number, y:number) {
                const words = text.split(" ");
                const completeLines = [];
                let completeLine = "";
                let lineLenght = 0;
                for (let i = 0; i < words.length; i++) {
                    const currentWord = words[i];
                    const currentWordTextLength = context.measureText(' ' + currentWord);
                    if (lineLenght + currentWordTextLength.width > width) {
                        completeLines.push(completeLine);
                        completeLine = "";
                        lineLenght = 0;
                    }
                    completeLine += " ";
                    completeLine += currentWord;
                    lineLenght += currentWordTextLength.width;
                }
                completeLines.push(completeLine);
                for (const line of completeLines) {
                    context.fillText(line, x, y);
                    y += 20;
                }
            }
        }
    }, [header, footer, src]);

    return (
        <canvas ref={canvasRef} width={width} height={height}/>
    );
};
