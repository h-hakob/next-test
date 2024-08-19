import Image from "next/image";
import ReactPaginate from "react-paginate";
import IMAGES from "../../../utils/images";
import { useState, useContext } from "react";
import { IsMobileContext } from "../../../contexts/isMobileContext";

const Paginate = ({totalPagesCount, selected, setPage}: {totalPagesCount: number, selected: number, setPage: (page: number) => any}) => {
    const [selectedPage, setSelectedPage] = useState(selected);

    const handlePageClick = (e: any) => {
        const newPage = e.selected + 1;
        setSelectedPage(newPage);
        setPage(newPage);
    };
    

    const { isMobile }: { isMobile: boolean } = useContext(IsMobileContext);

    return totalPagesCount > 1 &&
        (isMobile ? (
            <div className="pagination flex justify-between items-center text-white mt-4">
                <div
                    className={`cursor-pointer ${selectedPage === 1 ? "disabled" : "enabled"}`}
                    onClick={() => {
                        if (selectedPage <= 1) return;
                        handlePageClick({ selected: selectedPage - 2 });
                    }}
                >
                    <Image
                        className={selectedPage <= 1 ? "" : "rotate-180"}
                        src={selectedPage <= 1 ? IMAGES.arrowLeft : IMAGES.arrowRight}
                        alt="arrow left icon"
                    />
                </div>
                <div>
                    Page {selectedPage} of {totalPagesCount}
                </div>
                <div
                    className={`cursor-pointer ${selectedPage === totalPagesCount ? "disabled" : "enabled"}`}
                    onClick={() => {
                        if (selectedPage >= totalPagesCount) return;
                        handlePageClick({ selected: selectedPage });
                    }}
                >
                    <Image
                        className={selectedPage >= totalPagesCount ? "rotate-180" : ""}
                        src={selectedPage >= totalPagesCount ? IMAGES.arrowLeft : IMAGES.arrowRight}
                        alt="arrow right icon"
                    />
                </div>
            </div>
        ) : (
            <div className="pagination mt-4">
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={isMobile ? "<" : "Previous"}
                    nextLabel={isMobile ? ">" : "Next"}
                    onPageChange={(e) => handlePageClick(e)}
                    pageRangeDisplayed={3}
                    pageCount={totalPagesCount}
                    renderOnZeroPageCount={null}
                    activeClassName={"selected-page"}
                    forcePage={selectedPage - 1 > totalPagesCount ? 0 : selectedPage - 1}
                    nextClassName={selectedPage === totalPagesCount ? "next" : "next enabled"}
                />
            </div>
        ))
}

export default Paginate