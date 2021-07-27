import Pagination from "react-js-pagination";

const Paginate = (props) => {
    if (props.count > props.perPageEntries) {
        return (
            <div className="pagination-container">
                <Pagination
                    itemClass='pagination'
                    activePage={props.activePage + 1}
                    itemsCountPerPage={props.perPageEntries}
                    totalItemsCount={props.count}
                    pageRangeDisplayed={5}
                    prevPageText="Prev"
                    nextPageText="Next"
                    onChange={(pageNo) => props.handlePageChange(pageNo - 1)}
                />
            </div>
        );
    } else {
        return '';
    }
}

export default Paginate;