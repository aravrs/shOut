import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header/Header";
import LinkList from "../../components/Link/LinkList";

const Feed = (props) => {
  return (
    <IonPage>
      <Header title="shOut" small />
      <IonContent fullscreen>
        <Header title="shOut" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Feed;
