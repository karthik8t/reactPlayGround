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
        let img = new Image();
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
            context.fillText(header, width/2 , height*(0.1));
            context.fillText(footer, width/2 , height*(0.9));
        }
    }, [header, footer]);

    return (
        <canvas ref={canvasRef} width={width} height={height}/>
    );
};
