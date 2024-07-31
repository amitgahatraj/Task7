import Button from "./button";
function Card() {
  return (
    <div className="card w-100 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title">Sign Up Here</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="Password"
            placeholder="Password"
            className="input input-bordered"
          />
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Card;
