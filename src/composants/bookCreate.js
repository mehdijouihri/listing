
import React from "react";

const BookList = props => {
  return props.bookDetails.map((val, idx) => {
    let name = `name-${idx}`,
      author = `author-${idx}`,
      dateOfPublish = `dateOfPublish-${idx}`,
      type = `type-${idx}`,
      price = `price-${idx}`;
    return (
      <div className="form-row" key={val.index}>
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
            name="name"
            data-id={idx}
            id={name}
          />
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i  className="fa fa-plus-circle"/>
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus"/>
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default BookList;

