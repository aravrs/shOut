import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header";

const Trending = () => {
  return (
    <IonPage>
      <Header title="Trending" small />
      <IonContent fullscreen>
        <Header title="Trending" />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
