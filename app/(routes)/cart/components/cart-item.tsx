import Image from "next/image"
import toast from "react-hot-toast"
import { Icon, X } from "lucide-react"
import IconButton from "@/app/components/ui/icon-button"
import Currency from "@/app/components/ui/currency"
import useCart from "@/hooks/use-card"
import { Product } from "@/types"

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:w-48 sm:h-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={() => {}} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black"></p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
