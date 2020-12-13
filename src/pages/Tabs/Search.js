import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import firebase from "../../firebase";
import LinkItem from "../../components/Link/LinkItem";
import Header from "../../components/Header/Header";

const Search = () => {
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getInitialLinks();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [filter]);

  function getInitialLinks() {
    firebase.db
      .collection("links")
      .get()
      .then((snapshot) => {
        const links = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setLinks(links);
      });
  }

  function handleChange(evt) {
    if (evt.key === "Enter") {
      setFilter(evt.target.value);
    }
  }

  function handleSearch() {
    const query = filter.toLowerCase();
    const matchedLinks = links.filter((link) => {
      return (
        link.title.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.postedBy.name.toLowerCase().includes(query)
      );
    });
    setFilteredLinks(matchedLinks);
  }

  return (
    <IonPage>
      <Header title="Search" small />
      <IonContent fullscreen>
        <Header title="Search" />
        <IonSearchbar
          placeholder="Search"
          spellcheck="false"
          type="url"
          value={filter}
          onKeyPress={handleChange}
          animated
        />
        {filteredLinks.map((filteredLink, index) => (
          <LinkItem
            key={filteredLink.id}
            showCount={false}
            link={filteredLink}
            index={index}
            url={`/link/${filteredLink.id}`}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Search;
