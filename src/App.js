import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  newspaperOutline,
  trendingUpOutline,
  createOutline,
  searchOutline,
  personCircleOutline,
} from "ionicons/icons";

import Feed from "./pages/Tabs/Feed";
import Profile from "./pages/Tabs/Profile";
import Search from "./pages/Tabs/Search";
import Submit from "./pages/Tabs/Submit";
import Trending from "./pages/Tabs/Trending";

import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import EditProfile from "./pages/Auth/EditProfile";
import Forgot from "./pages/Auth/Forgot";

import useAuth from "./hooks/useAuth";
import userContext from "./contexts/UserContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import UserContext from "./contexts/UserContext";

const App = () => {
  const [user, setUser] = useAuth();
  return (
    <IonApp>
      <UserContext.Provider value={{ user, setUser }}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                path="/"
                render={() => <Redirect to="/feed" />}
                exact={true}
              />
              <Route component={() => <Redirect to="/feed" />} />
              <Route path="/feed" component={Feed} />
              <Route path="/trending" component={Trending} />
              <Route path="/submit" component={Submit} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/forgot" component={Forgot} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="feed" href="/feed">
                <IonIcon icon={newspaperOutline} />
                <IonLabel>Feed</IonLabel>
              </IonTabButton>
              <IonTabButton tab="trending" href="/trending">
                <IonIcon icon={trendingUpOutline} />
                <IonLabel>Trending</IonLabel>
              </IonTabButton>
              <IonTabButton tab="submit" href="/submit">
                <IonIcon icon={createOutline} />
                <IonLabel>Submit</IonLabel>
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={searchOutline} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </UserContext.Provider>
    </IonApp>
  );
};

export default App;
