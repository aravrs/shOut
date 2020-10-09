import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header/Header";

const Search = () => {
  return (
    <IonPage>
      <Header title="Search" small />
      <IonContent fullscreen>
        <Header title="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
