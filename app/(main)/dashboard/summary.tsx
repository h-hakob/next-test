import IMAGES from "../../../utils/images";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import QueryProvider from "./query";


const Summary = () => {
    return <QueryProvider>
        <Data></Data>
    </QueryProvider>
}

const Data = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['summary'],
        queryFn: () =>
          fetch('api/transactions/summary').then((res) =>
            res.json(),
          ),
    })

    if (isPending)
        return "Loading..."

    return <div className="two-tabs flex justify-between space-x-4 text-white">
        <div className="w-[48%] p-4 rounded-lg bg-asideBg border border-borderColor ">
            <div className="mb-3">
                <div className="flex items-center justify-center w-10 h-10 text-white border border-yellowBorderColor rounded-lg bg-lightningGradient">
                    <Image
                        className="w-[80%] h-auto"
                        src={IMAGES.lightningIcon}
                        alt="Lightning Icon"
                    />
                </div>
            </div>
            <div className="mb-3 text-textLightGray">Proxies</div>
            <div className="text-white">{data.data.active_items}</div>
        </div>
        <div className="w-[48%] p-4 rounded-lg bg-asideBg border border-borderColor">
            <div className="mb-3">
                <div className="flex items-center justify-center w-10 h-10 text-white border border-yellowBorderColor rounded-lg bg-lightningGradient">
                    <Image
                        className="w-[80%] h-auto"
                        src={IMAGES.yellowDollarIcon}
                        alt="Dollar Icon"
                    />
                </div>
            </div>
            <div className="mb-3 text-textLightGray">Amount spent</div>
            <div className="text-white">${data.data.total_amount}</div>
        </div>
    </div>
}

export default Summary