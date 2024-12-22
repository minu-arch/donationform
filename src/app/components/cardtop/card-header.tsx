import { HatchHeader } from '../ui'
import Image from 'next/image'
const CardHeader = () => {
  return (
    <HatchHeader>
      <Image
        src="/Image.png"
        alt="logo"
        width={500}
        height={400}
        className="w-full rounded-t-md sm:hidden"
      />

      <Image
        src="/Donation-Photo.png"
        alt="logo"
        width={800}
        height={1000}
        className="hidden sm:block w-full h-full object-cover rounded-l-md"
        priority
      />
    </HatchHeader>
  )
}

export default CardHeader