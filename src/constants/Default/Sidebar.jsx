import React, { useState } from "react";

/**
 * * COMPONENTS
 */
import RechercherForm from "../../components/Default/Forms/RechercheForm";

const Sidebar = () => {
  const [state, setstate] = useState({
    isOpen: false,
  });

  const toggelForm = () => {
    setstate((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  return (
    <React.Fragment>
      <button class="btn btn-primary btn-block mb-3" onClick={toggelForm}>
        Trouvez votre futur Job
      </button>

      {state.isOpen && <RechercherForm />}

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Service</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item active">
              <div class="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Management</label>
                </div>
                <span class="badge bg-primary float-right">12</span>
              </div>
            </li>

            <li class="nav-item active">
              <div class="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Marketing</label>
                </div>
                <span class="badge bg-primary float-right">2</span>
              </div>
            </li>

            <li class="nav-item active">
              <div class="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Informatique</label>
                </div>
                <span class="badge bg-primary float-right">20</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Niveaux d'études</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">BAC + 1</label>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">BAC + 2</label>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">BAC + 3</label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Niveaux d'expérience</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item active">
              <div class="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Débutant 1 ans</label>
                </div>
              </div>
            </li>

            <li class="nav-item active">
              <div class="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">
                    Expérience entre 2 et 5 ans
                  </label>
                </div>
              </div>
            </li>

            <li class="nav-item active">
              <div class="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">
                    Expérience entre 5 et 10 ans
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Régions</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Kénitra</label>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Marrakech</label>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Rabat</label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Langues</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Arabe</label>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Francais</label>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div className="nav-link">
                <div class="icheck-primary d-inline">
                  <input type="checkbox" id="checkboxPrimary3" />
                  <label for="checkboxPrimary3">Anglais</label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
