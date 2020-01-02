// firestore reference (https://firebase.google.com/docs/reference/js/firebase.firestore.html?authuser=0)
// firestore quickstart (https://firebase.google.com/docs/firestore/quickstart?authuser=0)

import * as firebase from "firebase/app";
import "firebase/firestore";

let db = firebase.firestore();

export default {
  load_ptf_datas(store) {
    db.collection("portfolios").get().then((querySnapshot) => {
      let doc_list = [];
      querySnapshot.forEach((doc) => {
        doc_list.push(doc.data());
      });
      store.commit("portfolio/updatePtfsData", doc_list);
    });
  }
};
