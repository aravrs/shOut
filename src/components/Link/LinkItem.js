import React from "react";
import {
  IonCard,
  IonCardContent,
  IonList,
  IonButton,
  IonLabel,
  IonIcon,
  IonText,
  IonItem,
} from "@ionic/react";
import {
  linkOutline,
  personCircleOutline,
  timeOutline,
  chatbubbleEllipsesOutline,
  caretUp,
} from "ionicons/icons";
import { getHostName } from "../../helpers/domain";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const LinkItem = ({ link, index, showCount, url, browser }) => {
  return (
    <IonCard routerLink={url} onClick={browser} button>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonButton
              style={{
                verticalAlign: "middle",
              }}
              slot="end"
              size="large"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <IonIcon icon={caretUp} />
                {link.voteCount}
              </div>
            </IonButton>
            <IonLabel>
              <p
                style={{
                  alignItems: "center",
                  fontSize: "0.8rem",
                  fontWeight: "normal",
                }}
              >
                <IonIcon
                  icon={linkOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {getHostName(link.url)}
                </IonText>
              </p>
              <div className="ion-padding-vertical">
                <div className="ion-text-wrap">
                  <strong style={{ fontSize: "1rem" }}>{link.title}</strong>
                </div>

                <div className="ion-text-wrap" style={{ fontSize: "0.8rem" }}>
                  {link.description}
                </div>
              </div>
              <p
                style={{
                  alignItems: "center",
                  fontSize: "0.8 rem",
                  fontWeight: "normal",
                }}
              >
                <IonIcon
                  icon={personCircleOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {link.postedBy.name}
                </IonText>
                {" | "}
                <IonIcon
                  icon={timeOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {formatDistanceToNow(link.created)}
                </IonText>
                {link.comments.length > 0 && (
                  <>
                    {" | "}
                    <IonIcon
                      icon={chatbubbleEllipsesOutline}
                      style={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    <IonText
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      {link.comments.length} comments
                    </IonText>
                  </>
                )}{" "}
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default LinkItem;
