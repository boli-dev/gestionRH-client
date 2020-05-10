import React from "react";

import { Link } from "react-router-dom";

/**
 * * LAYOUTS
 */
import Layout from "../../layouts/Layout";

/**
 * * COMPONENTS
 */
import Card from "../../components/Default/Card";

const OfferDetails = () => {
  return (
    <Layout>
      <div class="card">
        <div className="card-header">Offer #1002</div>
        <div class="card-body">
          <h5 class="card-title">Critères de l'annonce pour le poste</h5>
          <br />

          <dl class="row mt-2">
            <dt class="col-sm-4">Métier : </dt>
            <dd class="col-sm-8">Informatique, nouvelles technologies </dd>
            <dt class="col-sm-4">Secteur d´activité: </dt>
            <dd class="col-sm-8">Informatique, SSII, Internet </dd>

            <dt class="col-sm-4">Type de contrat: </dt>
            <dd class="col-sm-8">Freelance</dd>

            <dt class="col-sm-4">Région : </dt>
            <dd class="col-sm-8">Rabat</dd>

            <dt class="col-sm-4">Ville: </dt>
            <dd class="col-sm-8">Rabat</dd>

            <dt class="col-sm-4">Niveau d'expérience: </dt>
            <dd class="col-sm-8">Expérience entre 2 ans et 5 ans</dd>

            <dt class="col-sm-4">Niveau d'études: </dt>
            <dd class="col-sm-8"> Bac+5 et plus</dd>

            <dt class="col-sm-4">Langues exigées: </dt>
            <dd class="col-sm-8">Anglais›Bon NiveauFrançais›Courant</dd>

            <dt class="col-sm-4">Niveau d'expérience: </dt>
            <dd class="col-sm-8">Expérience entre 2 ans et 5 ans</dd>
          </dl>

          <Link href="#" class="card-link">
            Postuler
          </Link>
        </div>
      </div>

      <div class="card card-primary card-outline">
        <div class="card-header">
          <h3 class="card-title">
            Autres offres d'emploi susceptibles de vous intéresser
          </h3>
        </div>
        <div className="card-body p-0">
          <Card
            title="Ingénieur Informatique"
            date="08.05.2020"
            desc="Nous recherchons un Ingénieur InformatiqueGPS manager a
                développé une application web destinée aux concessionnaires
                automobiles...."
          />

          <Card
            title="Ingénieur Informatique"
            date="08.05.2020"
            desc="Nous recherchons un Ingénieur InformatiqueGPS manager a
                développé une application web destinée aux concessionnaires
                automobiles...."
          />

          <Card
            title="Ingénieur Informatique"
            date="08.05.2020"
            desc="Nous recherchons un Ingénieur InformatiqueGPS manager a
                développé une application web destinée aux concessionnaires
                automobiles...."
          />

          <Card
            title="Ingénieur Informatique"
            date="08.05.2020"
            desc="Nous recherchons un Ingénieur InformatiqueGPS manager a
                développé une application web destinée aux concessionnaires
                automobiles...."
          />
        </div>
      </div>
    </Layout>
  );
};

export default OfferDetails;
