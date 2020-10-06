import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

// 'small' for iOS notch
const Header = ({ title, small }) => {
  return (
    <IonHeader
      style={{
        background: "var(--ion-color-primary)",
      }}
      collapse={!small && "condense"}
    >
      <IonToolbar color="primary">
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
