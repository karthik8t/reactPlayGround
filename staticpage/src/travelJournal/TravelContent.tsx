import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {MapPin} from "lucide-react";
import {cn} from "@/lib/utils.ts";


interface Place {
    id: number;
    img: {
        src: string;
        alt: string;
    };
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    text: string;
}

export function TravelContent({places}: { places: Place[] }) {
    return <main className={"flex flex-col items-center"}>
        {places.map((place, index) => {
                return (
                    <Card className={cn("w-6/12 min-h-80 flex flex-row my-4")} key={index}>
                        <img src={place.img.src} alt={place.img.alt} className={"w-80 m-4 rounded-3xl"}></img>
                        <div><CardHeader>
                            <div className={"flex items-center"}>
                                <div className={"flex items-center"}>
                                    <MapPin/>
                                    <h5 className={"pl-1 text-xl"}>{place.country}</h5>
                                </div>
                                <div className={"self-end"}>
                                    <a href={place.googleMapsLink} className={"m-3 underline"}>View on Google
                                        Maps</a>
                                    {/*{place.googleMapsLink}*/}
                                </div>
                            </div>
                        </CardHeader>
                            <CardContent className={"mr-12"}>
                                <h1 className={"text-5xl pb-8"}>{place.title}</h1>
                                <h3 className={"text-2xl pb-4"}>{place.dates}</h3>
                                <p className={""}>{place.text}</p>
                            </CardContent></div>
                    </Card>
                )
            }
        )}
    </main>
        ;
}