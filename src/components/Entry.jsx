// import photo from "../assets/fuji.png"

export default function Entry(props) {
    return (
        <>
            <div className="flex gap-10 p-10 text-gray-800">
                <img src={props.img.src} alt={props.img.alt}  className="w-40 h-55 rounded-2xl"/>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold"><i className="fa-solid fa-location-dot pr-3" style={{color: "rgb(208, 10, 35)"}}></i>{props.country} <a href={props.googleMapsLink} className="font-thin text-sm hover:underline hover:text-red-500">View on Google Maps</a></h1>
                    <h1 className="text-4xl font-bold">{props.title}</h1>
                    <h1 className="text-sm">{props.dates}</h1>
                    <p className="text-sm">{props.text}</p>
                </div>
            </div>
        </>
    )
}