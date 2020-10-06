import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <IonPage>
      <Header title="Profile" small />
      <IonContent fullscreen>
        <Header title="Profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
