import React from "react";

/**
 * * LAYOUTS
 */
import Layout from "../../layouts/Layout";

/**
 * * COMPONENTS
 */
import Card from "../../components/Default/Card";

const Home = () => {
  return (
    <Layout>
      <div class="card card-primary card-outline">
        <div class="card-header">
          <h3 class="card-title">OFFRES D´EMPLOI</h3>
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

export default Home;
