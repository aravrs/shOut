import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header/Header";
import LinkList from "../../components/Link/LinkList";

const Trending = (props) => {
  return (
    <IonPage>
      <Header title="Trending" small />
      <IonContent fullscreen>
        <Header title="Trending" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
