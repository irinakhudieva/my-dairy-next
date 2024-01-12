import Image from "next/image";


export default function DayState({day}: {day: boolean | undefined}) {
  
    let image: [string, string, number?] = ['/mark.svg', 'gray mark', 12];

    if (day === true) image = ['/check.svg', 'green mark', 20];
    if (day === false) image = ['/x.svg', 'red mark', 20];

    const [src, alt, size] = image;

    return (
    <div  className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  )
}
