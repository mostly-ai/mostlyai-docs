// gtm.js
import TagManager from "react-gtm-module";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const initTagManager = () => {
  if (gtmId) {
    console.log("Initializing GTM with ID:", gtmId);
    TagManager.initialize({ gtmId });
  } else {
    console.log("GTM initialization skipped: NEXT_PUBLIC_GTM_ID not set");
  }
};