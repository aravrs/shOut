import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header";

const Feed = () => {
  return (
    <IonPage>
      <Header title="shOut" small />
      <IonContent fullscreen>
        <Header title="shOut" />
      </IonContent>
    </IonPage>
  );
};

export default Feed;
