import React from "react";

const RechercheForm = () => {
  return (
    <div className="card">
      <div className="card-body px-3">
        <form role="form">
          <div class="form-group">
            <label for="exampleInputEmail1">Mots-cles</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Mots-cles"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Métier</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Mots-cles"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            RECHERCHER
          </button>
        </form>
      </div>
    </div>
  );
};

export default RechercheForm;
