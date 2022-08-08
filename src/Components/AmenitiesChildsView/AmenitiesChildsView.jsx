import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { amenitiesChildsList } from "../../redux/modules/AmenitiesChild/actions";
// import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const AmenitiesChildsView = (props) => {
  // const { amenitiesChildsList } = props;
  //const { id } = useParams();
  const [amenitiesChilds, setAmenitiesChilds] = useState([]);
  const [totalAmenities, setTotalAmenities] = useState();

  /*
  useEffect(() => {
    amenitiesChildsList()
      .then((res) => {
        setAmenitiesChilds(res.results);
        setTotalAmenities(res.count)
      })
      .catch((error) => {
        console.warn("Hay un error");
      });
  }, [amenitiesChildsList]); */

  useEffect(() => {
    const getAmenitiesChild = async () => {
      const res = await fetch(
        `http://54.177.198.128:8001/api/cat-amenities-childs/?page=1`
      );
      const data = await res.json();
      setAmenitiesChilds(data.results);
      setTotalAmenities(data.count);
    };
    getAmenitiesChild();
  }, []);

  const fetchAmenities = async (currentPage) => {
    const res = await fetch(
      `http://54.177.198.128:8001/api/cat-amenities-childs/?page=${currentPage}`
    );
    const data = await res.json();

    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const amenitiesServer = await fetchAmenities(currentPage);
    setAmenitiesChilds(amenitiesServer.results);
  };

  return (
    <>
      <main>
        <div className="container-fluid text-center">
          <div className="row align-items-center">
            {amenitiesChilds.map((lista) => (
              <div className="col-lg-3" key={lista.id}>
                <div className="card" style={{ margin: "1em" }}>
                  <img
                    src={`/images/lifestyle.jpg`}
                    className="card-img-top"
                    alt={lista.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{lista.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(totalAmenities / 100)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center m-4"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    amenitiesChilds: state.amenitiesChilds,
  };
};

export default connect(mapStateToProps, { amenitiesChildsList })(
  AmenitiesChildsView
);
