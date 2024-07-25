import Link from "next/link";
import Image from "next/image";
import dp from '../images/dp.jpg';

import { AiFillDingtalkCircle } from "react-icons/ai";
import { IoReceiptOutline } from "react-icons/io5";
import { BsCartPlusFill } from "react-icons/bs";
import { BsClipboardPulse } from "react-icons/bs";
import { BsJournalCheck } from "react-icons/bs";


export default function Sidebar() {
    return (
        <div style={{ backgroundColor: '#073857' }} className="w-64 font-serif flex flex-col justify-between">

            <div>

                <div className="flex items-center space-x-2 mb-2 p-3" style={{ backgroundColor: '#031520' }}>
                    <Image src={dp} alt="" className="w-12 h-12 rounded-full border-2 border-[white]" />
                    <div>
                        <h4 className="font-bold text-[yellow]">JHONE JOE</h4>
                        <p className="text-sm text-gray-600">CDD-Marketing</p>
                    </div>
                </div>

                <nav className="space-y-2 p-2 pl-6">

                <Link href={'/seller/order1'} className="flex items-center text-[white] hover:text-[yellow] hover:bg-[#0315206d] p-2 rounded-lg transition duration-300">
        <AiFillDingtalkCircle size={22} className="mr-2" />
        My Bids
      </Link>
      <Link href={'/seller/receipt'} className="flex items-center text-[white] hover:text-[yellow] hover:bg-[#0315206d] p-2 rounded-lg transition duration-300">
        <IoReceiptOutline size={21} className="mr-2" />
        Customer Receipts
      </Link>
      <Link href={'/seller/respond'} className="flex items-center text-[white] hover:text-[yellow] hover:bg-[#0315206d] p-2 rounded-lg transition duration-300">
        <BsCartPlusFill size={21} className="mr-2" />
        Completed Orders
      </Link>
      <Link href={'/seller/available'} className="flex items-center text-[white] hover:text-[yellow] hover:bg-[#0315206d] p-2 rounded-lg transition duration-300">
        <BsClipboardPulse size={21} className="mr-2" />
        Available Products
      </Link>
      <Link href={'/seller/report'} className="flex items-center text-[white] hover:text-[yellow] hover:bg-[#0315206d] p-2 rounded-lg transition duration-300">
        <BsJournalCheck size={21} className="mr-2" />
        Sales Reports
      </Link>
                </nav>
                
            </div>

        </div>
    );
}
