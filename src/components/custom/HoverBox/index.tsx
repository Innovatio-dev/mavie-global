import Image from 'next/image'

export interface IHoverBoxProps {
  title: string,
  content: string,
  icon: string,
  startColor: string,
  endColor: string,
}

export default function HoverBox(props: IHoverBoxProps){
  return (
    <>
      <div
        className="flex flex-col w-[250px] h-[220px] items-center justify-center border-b-4 border-brand-pink mx-4 hover:cursor-pointer "
        style={{ background: `linear-gradient(90deg, ${props.startColor}, ${props.endColor})`, borderColor: props.startColor }}
        >
        <div className='absolute flex flex-col items-center justify-center text-center z-10'>
          <Image src={`/assets/svg/${props.icon}.svg`} alt={props.icon} width="50" height="50" />
          <p className="pt-4">{props.title}</p>
          <p className='hidden text-center font-thin pt-6' dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </div>
    </>
  )
}

