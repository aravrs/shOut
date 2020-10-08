import React from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
} from "@ionic/react";
import NavHeader from "../../components/NavHeader";

const Login = () => {
  return (
    <IonPage>
      <NavHeader title="Log In" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required />
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput name="password" type="password" required />
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Log In
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-padding-vertical">
            <IonRouterLink routerLink="/forgot">Forgot Password?</IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
