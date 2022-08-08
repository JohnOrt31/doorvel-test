import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { amenitiesParentList } from "../../redux/modules/AmenitiesParent/actions";
import { useNavigate } from "react-router-dom";

const AmenitiesParentView = (props) => {
  const { amenitiesParentList } = props;
  const history = useNavigate();
  const [amenitiesParents, setAmenitiesParents] = useState([]);

  useEffect(() => {
    amenitiesParentList()
      .then((res) => {
        setAmenitiesParents(res.response);
      })
      .catch((error) => {
        setAmenitiesParents(error.response.data.data);
      });
  }, [amenitiesParentList]);

  return (
    <>
      <main>
        <div className="container-fluid text-center">
          <div className="row align-items-center">
            {amenitiesParents.map((lista) => (
              <div className="col-lg-6" key={lista.id}>
                <div className="card" style={{ margin: "2em" }}>
                  <img
                    src={
                      lista.id === 1
                        ? `./images/lifestyle.jpg`
                        : `./images/enviroment.jpg`
                    }
                    className="card-img-top"
                    alt={lista.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{lista.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => history(`/amenidades/${lista.id}`)}
                    >
                      Ver amenidades
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    amenitiesParents: state.amenitiesParents,
  };
};

export default connect(mapStateToProps, { amenitiesParentList })(
  AmenitiesParentView
);
