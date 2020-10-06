import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header";

const Submit = () => {
  return (
    <IonPage>
      <Header title="Submit" small />
      <IonContent fullscreen>
        <Header title="Submit" />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
